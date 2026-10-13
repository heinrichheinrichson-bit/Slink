// src/renderer/flower-goals.js
import * as THREE3 from "three";

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

// src/renderer/visitor-motion.js
import * as THREE2 from "three";
var hash = (n, seed) => THREE2.MathUtils.euclideanModulo(Math.sin(n * 127.1 + seed * 311.7) * 43758.5453, 1);
var stations = [[-13, -9], [20, -10], [8, 4], [-11, 18]];
function bound(p) {
  p.x = THREE2.MathUtils.clamp(p.x, -16, 24);
  p.z = THREE2.MathUtils.clamp(p.z, -14, 22);
  const excess = Math.max(0, (p.x + p.z - 14) / 2);
  p.x -= excess;
  p.z -= excess;
  return p;
}
function createVisitorMotion(seed = 73) {
  const agents = [{ kind: "bee", position: new THREE2.Vector3(-12, 25, 10), velocity: new THREE2.Vector3(), speed: 19, leg: 0, wait: 0, station: -1 }, { kind: "bumblebee", position: new THREE2.Vector3(3, 21.5, -7), velocity: new THREE2.Vector3(), speed: 9, leg: 0, wait: 0, station: -1 }];
  let time = 0;
  function choose(a, index) {
    a.leg++;
    a.age = 0;
    const key = seed + index * 113, visiting = a.kind === "bumblebee" ? a.leg % 2 === 1 : a.leg % 5 === 0;
    if (visiting) {
      a.target = new THREE2.Vector3((hash(a.leg + 1, key) - 0.5) * 5, 20.5, (hash(a.leg + 3, key) - 0.5) * 5);
      a.visiting = true;
    } else {
      let station = Math.floor(hash(a.leg, key) * 4);
      if (station === a.station) station = (station + 1 + Math.floor(hash(a.leg + 9, key) * 2)) % 4;
      a.station = station;
      const [x, z] = stations[station];
      a.target = bound(new THREE2.Vector3(x + (hash(a.leg + 2, key) - 0.5) * 3, a.kind === "bee" ? 24.5 : 23, z + (hash(a.leg + 4, key) - 0.5) * 3));
      a.visiting = false;
    }
    const other = agents[1 - index], flatDistance = (p, q) => Math.hypot(p.x - q.x, p.z - q.z);
    if (flatDistance(a.target, other.position) < 13 || other.target && flatDistance(a.target, other.target) < 13) {
      let best = -1;
      for (let k = 0; k < stations.length; k++) {
        const [x, z] = stations[k], p = new THREE2.Vector3(x, 24, z), score = flatDistance(p, other.position) + (other.target ? flatDistance(p, other.target) : 0);
        if (score > best) {
          best = score;
          a.target = p;
          a.station = k;
        }
      }
      a.visiting = false;
    }
  }
  agents.forEach(choose);
  function step(dt) {
    time += dt;
    const separation = agents[0].position.clone().sub(agents[1].position);
    separation.y = 0;
    const distance = separation.length();
    for (let index = 0; index < 2; index++) {
      const a = agents[index];
      a.age += dt;
      if (a.wait <= 0 && a.age > (a.kind === "bee" ? 4.2 : 6.2) + hash(a.leg, seed + index) * 1.3) choose(a, index);
      const d = a.target.clone().sub(a.position), flat = Math.hypot(d.x, d.z);
      if (a.wait > 0) {
        a.wait -= dt;
        if (a.wait <= 0) choose(a, index);
      } else if (flat < 1 && a.velocity.length() < 2) {
        a.wait = a.visiting ? (a.kind === "bumblebee" ? 1.2 : 0.45) + hash(a.leg, seed + index) * 1.3 : 0.12 + hash(a.leg, seed + index) * 0.3;
      }
      const desired = d.clone();
      desired.y = 0;
      if (desired.lengthSq() > 0) desired.normalize().multiplyScalar(a.speed * Math.min(1, flat / 8));
      const acceleration = desired.sub(new THREE2.Vector3(a.velocity.x, 0, a.velocity.z)).multiplyScalar(5.5);
      if (distance < 16 && distance > 1e-3) acceleration.addScaledVector(separation, (index ? -1 : 1) * (16 - distance) * 11 / distance);
      acceleration.y = (a.target.y + Math.sin(time * 4.1 + index * 2.3) * 0.16 - a.position.y) * 16 - a.velocity.y * 7;
      acceleration.clampLength(0, 95);
      a.velocity.addScaledVector(acceleration, dt);
      a.velocity.clampLength(0, a.speed * 1.1);
      a.position.addScaledVector(a.velocity, dt);
      bound(a.position);
    }
  }
  return { agents, update(delta) {
    let remaining = THREE2.MathUtils.clamp(delta, 0, 0.1);
    while (remaining > 1e-8) {
      const dt = Math.min(1 / 120, remaining);
      step(dt);
      remaining -= dt;
    }
    return agents;
  } };
}

// src/renderer/flower-goals.js
var FLOWER_SPECIES = {
  daisy: { name: "G\xE4nsebl\xFCmchen", petals: 10, colors: ["#fff6dc", "#ffffff"], center: "#edb62c", width: 2.9, length: 7.8, radius: 10.8, heart: 4.5 },
  buttercup: { name: "Butterblume", petals: 5, colors: ["#ffd133", "#ffe567"], center: "#dca119", width: 6.5, length: 8, radius: 9.2, heart: 3.3 },
  meadow: { name: "Wiesenbl\xFCte", petals: 5, colors: ["#df68bf", "#ed8cd1"], center: "#ffdc63", width: 6.8, length: 8.1, radius: 9.4, heart: 3.5 },
  poppy: { name: "Kleiner Mohn", petals: 4, colors: ["#f16d51", "#ff8a68"], center: "#50343c", width: 8.7, length: 9.2, radius: 8.8, heart: 4.1 }
};
var flightHash = (step, seed) => THREE3.MathUtils.euclideanModulo(Math.sin(step * 127.1 + seed * 311.7) * 43758.5453, 1);
function sampleVisitorFlight(time, seed, out = new THREE3.Vector3()) {
  const clock = Math.max(0, time), phase = flightHash(0, seed) * 6.28, t = clock * 0.52 + 0.6 * Math.sin(clock * 0.43 + phase) + 0.18 * Math.sin(clock * 0.97 + phase * 1.7) + 2, step = Math.floor(t), u = t - step;
  const weights = [(1 - u) ** 3 / 6, (3 * u ** 3 - 6 * u * u + 4) / 6, (-3 * u ** 3 + 3 * u * u + 3 * u + 1) / 6, u ** 3 / 6];
  out.set(0, 0, 0);
  for (let j = 0; j < 4; j++) {
    const k = Math.floor((step + j - 1) / 2), w = weights[j];
    let x = -16 + flightHash(k * 3 + 1, seed) * 40, z = -14 + flightHash(k * 3 + 3, seed) * 36;
    const excess = Math.max(0, (x + z - 14) / 2);
    x -= excess;
    z -= excess;
    out.x += x * w;
    out.y += (21.5 + flightHash(k * 3 + 2, seed) * 5) * w;
    out.z += z * w;
  }
  out.y += Math.sin(clock * 3.3 + phase) * 0.18;
  return out;
}
function createFlowerGoal({ species = "daisy", number = 1, state = "closed", layout = "compact", insects = true } = {}) {
  const spec = FLOWER_SPECIES[species];
  if (!spec) throw Error("Unknown flower species " + species);
  const marker = createGardenGoal({ number, state, layout }), group = marker.group, bud = group.children[0], blossom = new THREE3.Group();
  blossom.position.copy(bud.position);
  group.add(blossom);
  const geometries = [], materials = [];
  const material = (color) => {
    const m = new THREE3.MeshStandardMaterial({ color, roughness: 0.56 });
    materials.push(m);
    return m;
  };
  const green = material("#538b2c"), petalMats = spec.colors.map(material), heartMat = material(spec.center), sphere = new THREE3.SphereGeometry(1, 20, 12);
  geometries.push(sphere);
  function ball(parent, mat, x, y, z, sx, sy, sz) {
    const m = new THREE3.Mesh(sphere, mat);
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
    const pivot = new THREE3.Group();
    pivot.position.y = 12;
    pivot.rotation.y = k * Math.PI * 2 / spec.petals;
    blossom.add(pivot);
    const hinge = new THREE3.Group();
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
    const petal = new THREE3.Mesh(geo, petalMats[k % 2]);
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
  const visitors = new THREE3.Group();
  visitors.name = "flower-visitors";
  blossom.add(visitors);
  const honey = material("#e9ad32"), fluff = material("#d6af50"), dark = material("#60452b"), wingMat = material("#fff6df");
  fluff.roughness = 0.95;
  wingMat.transparent = true;
  wingMat.opacity = 0.72;
  wingMat.depthWrite = false;
  const flights = [];
  for (let k = 0; k < 2; k++) {
    const insect = new THREE3.Group();
    insect.name = k ? "bumblebee" : "bee";
    insect.scale.setScalar(1.8);
    visitors.add(insect);
    const width = k ? 1.08 : 0.7, height = k ? 0.98 : 0.65;
    ball(insect, k ? fluff : honey, 0, 0, 0, width, height, 1.2);
    ball(insect, dark, 0, 0, 1.05, k ? 0.56 : 0.48, k ? 0.54 : 0.48, 0.48);
    for (const z of [-0.55, 0.15]) ball(insect, dark, 0, 0, z, width * 1.02, height * 1.02, 0.18);
    if (k) {
      const cream = material("#f4e4b9");
      cream.roughness = 1;
      ball(insect, cream, 0, 0, -0.98, 0.72, 0.65, 0.38);
      const positions = [], colors = [], count = 260;
      for (let j = 0; j < count; j++) {
        const y = 1 - 2 * (j + 0.5) / count, r = Math.sqrt(1 - y * y), a = j * 2.39996323, x = Math.cos(a) * r, z = Math.sin(a) * r;
        const root = new THREE3.Vector3(x * width * 1.015, y * height * 1.015, z * 1.215), normal = new THREE3.Vector3(x / width, y / height, z / 1.2).normalize(), length = 0.12 + flightHash(j, 91) * 0.12;
        const tip = root.clone().addScaledVector(normal, length);
        tip.z -= 0.045;
        positions.push(...root.toArray(), ...tip.toArray());
        const c = new THREE3.Color(z < -0.72 ? "#f4e4b9" : Math.abs(z + 0.46) < 0.18 || Math.abs(z - 0.12) < 0.17 ? "#635238" : j % 3 ? "#d6af50" : "#e7c776");
        colors.push(...c.toArray(), ...c.toArray());
      }
      const hairGeo = new THREE3.BufferGeometry();
      hairGeo.setAttribute("position", new THREE3.Float32BufferAttribute(positions, 3));
      hairGeo.setAttribute("color", new THREE3.Float32BufferAttribute(colors, 3));
      geometries.push(hairGeo);
      const hairMat = new THREE3.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.82, depthWrite: false });
      materials.push(hairMat);
      const fur = new THREE3.LineSegments(hairGeo, hairMat);
      fur.name = "bumblebee-fur";
      insect.add(fur);
    }
    const wings = [];
    for (const side of [-1, 1]) {
      const wing = ball(insect, wingMat, side * 0.95, 0.5, -0.1, 1.5, 0.16, 0.65);
      wing.castShadow = false;
      wings.push(wing);
    }
    flights.push({ insect, wings, seed: number * 17 + k * 31 + Object.keys(FLOWER_SPECIES).indexOf(species) * 7, phase: k * 2.7, a: new THREE3.Vector3(), b: new THREE3.Vector3() });
  }
  let insectsEnabled = Boolean(insects);
  function setInsects(enabled) {
    insectsEnabled = Boolean(enabled);
    group.userData.insects = insectsEnabled;
  }
  const motion = createVisitorMotion(number * 17 + Object.keys(FLOWER_SPECIES).indexOf(species) * 7);
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
    const agents = motion.update(delta);
    for (let i = 0; i < flights.length; i++) {
      const f = flights[i], a = agents[i];
      f.insect.position.copy(a.position);
      const vx = a.velocity.x, vz = a.velocity.z, speed = Math.hypot(vx, vz);
      if (speed > 0.5) {
        const heading = Math.atan2(vx, vz), turn = Math.atan2(Math.sin(heading - f.insect.rotation.y), Math.cos(heading - f.insect.rotation.y));
        f.insect.rotation.y += turn * Math.min(1, delta * 9);
        f.insect.rotation.z = THREE3.MathUtils.clamp(-turn * 0.22, -0.24, 0.24);
      } else f.insect.rotation.z *= Math.max(0, 1 - delta * 6);
      f.insect.rotation.x = -Math.min(0.16, speed * 9e-3);
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
