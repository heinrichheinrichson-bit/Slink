// src/renderer/flower-goals.js
import * as THREE2 from "three";

// src/renderer/garden-marker-goals.js
import * as THREE from "three";
var MARKER_LAYOUTS = {
  front: { name: "Vorne \xB7 mittel", radius: 13, x: 0, z: 22, fx: 0, fz: -13 },
  diagonal: { name: "Rechts vorne", radius: 13, x: 19, z: 19, fx: -8, fz: -12 },
  compact: { name: "Rechts vorne \xB7 klein", radius: 10.5, x: 19, z: 19, fx: -8, fz: -12 },
  left: { name: "Links vorne", radius: 13, x: -19, z: 19, fx: 8, fz: -12 },
  side: { name: "Seitlich", radius: 13, x: 22, z: 0, fx: -15, fz: 0 },
  large: { name: "Vorne \xB7 gro\xDF", radius: 16, x: 0, z: 21, fx: 0, fz: -15 }
};
function createGardenGoal({ number = 1, state = "closed", layout = new URLSearchParams(location.search).get("marke") || "front" } = {}) {
  const config = MARKER_LAYOUTS[layout] || MARKER_LAYOUTS.front, r = config.radius, tx = config.x, tz = config.z;
  const group = new THREE.Group(), flower = new THREE.Group();
  group.add(flower);
  flower.position.set(config.fx, 0, config.fz);
  const geo = new THREE.SphereGeometry(1, 20, 14), mats = [];
  const mat = (color, roughness = 0.48) => {
    let m = new THREE.MeshStandardMaterial({ color, roughness });
    mats.push(m);
    return m;
  };
  const gold = mat("#ffd05a"), light = mat("#ffeaa2"), green = mat("#538b2c"), heart = mat("#e5a32a");
  function shape(parent, m, x, y, z, sx, sy, sz) {
    let a = new THREE.Mesh(geo, m);
    a.position.set(x, y, z);
    a.scale.set(sx, sy, sz);
    a.castShadow = true;
    a.receiveShadow = true;
    parent.add(a);
    return a;
  }
  shape(flower, green, 0, 5, 0, 2.2, 7, 2.2);
  for (let side of [-1, 1]) {
    let leaf = shape(flower, green, side * 7, 4, 1, 9, 1.7, 4);
    leaf.rotation.z = side * 0.27;
    leaf.rotation.y = side * 0.3;
  }
  let petals = [];
  for (let i = 0; i < 6; i++) {
    let pivot = new THREE.Group();
    pivot.rotation.y = i * Math.PI / 3;
    flower.add(pivot);
    let p = shape(pivot, i % 2 ? gold : light, 0, 12, 0, 5, 9, 4);
    petals.push(p);
  }
  const center = shape(flower, heart, 0, 12, 0, 5, 3.5, 5);
  const rimMat = mat("#c5a777"), rimGeo = new THREE.CylinderGeometry(r + 1.6, r + 1.6, 2.6, 40), rim = new THREE.Mesh(rimGeo, rimMat);
  rim.position.set(tx, 3, tz);
  rim.castShadow = true;
  group.add(rim);
  const diskGeo = new THREE.CylinderGeometry(r, r, 2.2, 40), tag = new THREE.Mesh(diskGeo, mat("#fff4da"));
  tag.position.set(tx, 3.6, tz);
  tag.castShadow = true;
  group.add(tag);
  let c = document.createElement("canvas");
  c.width = c.height = 128;
  let ctx = c.getContext("2d");
  ctx.fillStyle = "#4b2a15";
  ctx.font = "bold 100px Trebuchet MS";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(number), 64, 69);
  const texture = new THREE.CanvasTexture(c);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.userData.transient = true;
  const labelMat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }), labelGeo = new THREE.PlaneGeometry(r * 1.72, r * 1.72), label = new THREE.Mesh(labelGeo, labelMat);
  label.rotation.x = -Math.PI / 2;
  label.position.set(tx, 4.74, tz);
  group.add(label);
  let openness = 0, target = 0, current = "";
  function setState(s) {
    if (!["closed", "next", "bloom"].includes(s)) throw Error("Unknown goal state");
    current = s;
    target = s === "bloom" ? 1 : s === "next" ? 0.16 : 0;
    group.userData.state = s;
    rimMat.color.set(s === "next" ? "#f9bf39" : "#c5a777");
    rimMat.emissive.set(s === "next" ? "#d89514" : "#000000");
    rimMat.emissiveIntensity = s === "next" ? 0.15 : 0;
  }
  function update(time, delta = 0.016) {
    openness += (target - openness) * Math.min(1, delta * 7);
    let o = openness;
    for (let p of petals) {
      p.position.set(0, 13 - o * 3, 2 + o * 10);
      p.scale.set(5 + o * 1.5, 9 - o * 6, 4 + o * 4);
      p.rotation.x = o * -0.25;
    }
    center.visible = o > 0.4;
    center.position.y = 11.4;
    let pulse = current === "next" ? 1 + Math.sin(time * 2.8) * 0.035 : 1;
    flower.scale.setScalar(pulse);
    gold.emissive.set("#ffc33e");
    gold.emissiveIntensity = current === "next" ? 0.08 + Math.sin(time * 2.8) * 0.04 : 0;
  }
  setState(state);
  openness = target;
  update(0, 1);
  group.userData.goalNumber = number;
  function setSize(percent) {
    let radius = percent === 33 ? 13 : percent === 40 ? 15.7 : 10.5;
    rim.scale.set((radius + 1.6) / (r + 1.6), 1, (radius + 1.6) / (r + 1.6));
    tag.scale.set(radius / r, 1, radius / r);
    label.scale.setScalar(radius / r);
    group.userData.markerSize = percent;
  }
  return { group, setState, setSize, update, dispose() {
    geo.dispose();
    diskGeo.dispose();
    rimGeo.dispose();
    labelGeo.dispose();
    texture.dispose();
    labelMat.dispose();
    mats.forEach((m) => m.dispose());
  } };
}

// src/renderer/flower-goals.js
var FLOWER_SPECIES = {
  daisy: { name: "G\xE4nsebl\xFCmchen", petals: 10, colors: ["#fff6dc", "#ffffff"], center: "#edb62c", width: 2.9, length: 7.8, radius: 10.8, heart: 4.5 },
  buttercup: { name: "Butterblume", petals: 5, colors: ["#ffd133", "#ffe567"], center: "#dca119", width: 6.5, length: 8, radius: 9.2, heart: 3.3 },
  meadow: { name: "Wiesenbl\xFCte", petals: 5, colors: ["#df68bf", "#ed8cd1"], center: "#ffdc63", width: 6.8, length: 8.1, radius: 9.4, heart: 3.5 },
  poppy: { name: "Kleiner Mohn", petals: 4, colors: ["#f16d51", "#ff8a68"], center: "#50343c", width: 8.7, length: 9.2, radius: 8.8, heart: 4.1 }
};
var flightHash = (step, seed) => THREE2.MathUtils.euclideanModulo(Math.sin(step * 127.1 + seed * 311.7) * 43758.5453, 1);
function sampleVisitorFlight(time, seed, out = new THREE2.Vector3()) {
  const period = 3.4 + flightHash(0, seed) * 1.5, t = Math.max(0, time) / period, step = Math.floor(t), phase = t - step;
  const waypoint = (k) => {
    const near = k % 4 === 2 ? 0.4 : 1;
    return [(flightHash(k * 3 + 1, seed) * 2 - 1) * 14 * near, 21.5 + flightHash(k * 3 + 2, seed) * 3.5, (flightHash(k * 3 + 3, seed) * 2 - 1) * 9 * near];
  };
  const a = waypoint(step), b = waypoint(step + 1), u = THREE2.MathUtils.clamp((phase - 0.12) / 0.73, 0, 1), s = u * u * u * (u * (u * 6 - 15) + 10);
  return out.set(THREE2.MathUtils.lerp(a[0], b[0], s) + Math.sin(time * 1.7 + seed) * 0.3, THREE2.MathUtils.lerp(a[1], b[1], s) + Math.sin(time * 2.1 + seed) * 0.35, THREE2.MathUtils.lerp(a[2], b[2], s) + Math.sin(time * 1.3 + seed) * 0.25);
}
function createFlowerGoal({ species = "daisy", number = 1, state = "closed", layout = "compact", insects = true } = {}) {
  const spec = FLOWER_SPECIES[species];
  if (!spec) throw Error("Unknown flower species " + species);
  const marker = createGardenGoal({ number, state, layout }), group = marker.group, bud = group.children[0], blossom = new THREE2.Group();
  blossom.position.copy(bud.position);
  group.add(blossom);
  const geometries = [], materials = [];
  const material = (color) => {
    const m = new THREE2.MeshStandardMaterial({ color, roughness: 0.56 });
    materials.push(m);
    return m;
  };
  const green = material("#538b2c"), petalMats = spec.colors.map(material), heartMat = material(spec.center), sphere = new THREE2.SphereGeometry(1, 20, 12);
  geometries.push(sphere);
  function ball(parent, mat, x, y, z, sx, sy, sz) {
    const m = new THREE2.Mesh(sphere, mat);
    m.position.set(x, y, z);
    m.scale.set(sx, sy, sz);
    m.castShadow = m.receiveShadow = true;
    parent.add(m);
    return m;
  }
  ball(blossom, green, 0, 5, 0, 1.8, 6, 1.8);
  for (const side of [-1, 1]) {
    const leaf = ball(blossom, green, side * 6, 3, 0, 8, 1.4, 3);
    leaf.rotation.z = side * 0.25;
  }
  const petals = [];
  for (let k = 0; k < spec.petals; k++) {
    const pivot = new THREE2.Group();
    pivot.position.y = 12;
    pivot.rotation.y = k * Math.PI * 2 / spec.petals;
    blossom.add(pivot);
    const hinge = new THREE2.Group();
    pivot.add(hinge);
    let geo = sphere;
    if (species === "poppy") {
      geo = sphere.clone();
      const p = geo.attributes.position;
      for (let j = 0; j < p.count; j++) {
        const x = p.getX(j), z = p.getZ(j);
        p.setY(j, p.getY(j) + Math.sin(Math.atan2(z, x) * 5) * 0.26 * Math.hypot(x, z));
      }
      geo.computeVertexNormals();
      geometries.push(geo);
    }
    const petal = new THREE2.Mesh(geo, petalMats[k % 2]);
    petal.position.z = spec.radius;
    petal.scale.set(spec.width, species === "poppy" ? 1.5 : 1.2, spec.length);
    petal.castShadow = petal.receiveShadow = true;
    hinge.add(petal);
    petals.push(hinge);
  }
  const heart = ball(blossom, heartMat, 0, 13.8, 0, spec.heart, 2.7, spec.heart);
  for (let k = 0; k < (species === "poppy" ? 9 : 7); k++) {
    const a = k * Math.PI * 2 / (species === "poppy" ? 9 : 7);
    ball(blossom, heartMat, Math.cos(a) * spec.heart * 0.7, 16, Math.sin(a) * spec.heart * 0.7, 0.65, 0.6, 0.65);
  }
  const visitors = new THREE2.Group();
  visitors.name = "flower-visitors";
  blossom.add(visitors);
  const honey = material("#e9ad32"), fluff = material("#d6af50"), dark = material("#60452b"), wingMat = material("#fff6df");
  fluff.roughness = 0.95;
  wingMat.transparent = true;
  wingMat.opacity = 0.72;
  wingMat.depthWrite = false;
  const flights = [];
  for (let k = 0; k < 2; k++) {
    const insect = new THREE2.Group();
    insect.name = k ? "bumblebee" : "bee";
    insect.scale.setScalar(1.8);
    visitors.add(insect);
    const width = k ? 0.95 : 0.7, height = k ? 0.86 : 0.65;
    ball(insect, k ? fluff : honey, 0, 0, 0, width, height, 1.2);
    ball(insect, dark, 0, 0, 1.05, 0.48, 0.48, 0.48);
    for (const z of [-0.55, 0.15]) ball(insect, dark, 0, 0, z, width * 1.02, height * 1.02, 0.18);
    const wings = [];
    for (const side of [-1, 1]) {
      const wing = ball(insect, wingMat, side * 0.95, 0.5, -0.1, 1.5, 0.16, 0.65);
      wing.castShadow = false;
      wings.push(wing);
    }
    flights.push({ insect, wings, seed: number * 17 + k * 31 + Object.keys(FLOWER_SPECIES).indexOf(species) * 7, phase: k * 2.7, a: new THREE2.Vector3(), b: new THREE2.Vector3() });
  }
  let insectsEnabled = Boolean(insects);
  function setInsects(enabled) {
    insectsEnabled = Boolean(enabled);
    group.userData.insects = insectsEnabled;
  }
  group.userData.visitorSizes = { bee: 100, bumblebee: 100 };
  function setVisitorSize(kind, percent = 100) {
    if (!["bee", "bumblebee"].includes(kind)) throw Error("Unknown flower visitor");
    if (!Number.isFinite(percent) || percent < 50 || percent > 300) throw RangeError("Visitor size must be between 50 and 300 percent");
    flights.find((f) => f.insect.name === kind).insect.scale.setScalar(1.8 * percent / 100);
    group.userData.visitorSizes[kind] = percent;
  }
  let current = state, target = state === "bloom" ? 1 : 0, openness = target;
  function setState(s) {
    marker.setState(s);
    current = s;
    target = s === "bloom" ? 1 : 0;
  }
  function update(time, delta = 0.016) {
    marker.update(time, delta);
    openness += (target - openness) * Math.min(1, delta * 7);
    const o = openness;
    bud.scale.multiplyScalar(1 - o);
    bud.visible = o < 0.999;
    blossom.visible = o > 1e-3;
    blossom.scale.setScalar(o);
    for (const hinge of petals) hinge.rotation.x = -(1 - o) * 1.1;
    heart.scale.y = 2.7 * (0.8 + 0.2 * o);
    visitors.visible = insectsEnabled && current === "bloom" && o > 0.94;
    for (const f of flights) {
      sampleVisitorFlight(time, f.seed, f.a);
      sampleVisitorFlight(time + 0.08, f.seed, f.b);
      f.insect.position.copy(f.a);
      const vx = f.b.x - f.a.x, vz = f.b.z - f.a.z;
      if (Math.hypot(vx, vz) > 0.012) {
        const heading = Math.atan2(vx, vz), turn = Math.atan2(Math.sin(heading - f.insect.rotation.y), Math.cos(heading - f.insect.rotation.y));
        f.insect.rotation.y += turn * Math.min(1, delta * 4);
      }
      f.insect.rotation.z = THREE2.MathUtils.clamp(-vx * 0.18, -0.18, 0.18);
      f.wings.forEach((w, k) => w.rotation.z = Math.sin(time * 30 + f.phase) * (k ? 1 : -1) * 0.5);
    }
  }
  setInsects(insects);
  update(0, 1);
  group.userData.species = species;
  group.userData.decorative = true;
  return { group, setState, setInsects, setVisitorSize, setSize: marker.setSize, update, get state() {
    return current;
  }, dispose() {
    marker.dispose();
    geometries.forEach((g) => g.dispose());
    materials.forEach((m) => m.dispose());
  } };
}
export {
  FLOWER_SPECIES,
  createFlowerGoal,
  sampleVisitorFlight
};
