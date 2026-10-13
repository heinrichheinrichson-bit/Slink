# SLINK · Wachstums-Module

Sechs echte 3D-Module, separat vom bestehenden Spiel. Die Vorschau nutzt genau die Fabrik in `growth-modules.mjs`.

## Verwendung

Die ES-Modulquelle benötigt dieselbe Three.js-Abhängigkeit wie der bestehende Renderer, einschließlich `RoundedBoxGeometry`.

```js
import {createTile, disposeTile} from './growth-modules.mjs';
const tile = createTile('earth-loam', {seed: 73});
tile.position.set(column * 80 + 60, -(row * 80 + 60), 0);
scene.add(tile);
// Beim Entfernen: disposeTile(tile);
```

Kennungen: `earth-loam`, `earth-humus`, `earth-clay`, `grass-velvet`, `grass-sprouts`, `grass-clover`, `reference`.

Die Geometrie liegt in der XY-Ebene; Z zeigt nach oben. Gleicher Rasterabstand 80, gleiche Grundfläche 78,5 × 78,5, gemeinsame Unterkante −3,5. Erde endet bei Z=8,5, die bestehende Wiese bei Z=13,5 und die neue Grasoberfläche bei Z=18. Halme und Blätter liegen darüber und bleiben innerhalb der Grundfläche.

Erdmodule verwenden eine flachere vertikale Fase, erhalten aber den horizontalen Eckenradius. Alle Materialdetails bestehen aus Geometrie oder prozeduralem Relief. Es sind keine generierten Vorschaubilder.

Die Module enthalten keine Spielregeln, keine Rahmengeometrie und keine eigene Beleuchtung. Diese gehören zum bestehenden Renderer. Ein späterer Wechsel Erde→Wiese oder Wiese→hohes Gras tauscht das Modul an derselben Rasterposition. Die aktuelle Werkstatt demonstriert zwei Zustände; eine zeitlich animierte Wachstumssequenz ist noch nicht implementiert.

Geprüft: Grundfläche und Höhen aller sieben Module einschließlich Referenz, gemeinsame Unterkante und Einhaltung der Grundfläche durch Dekoration. Smartphone-Leistung mit vielen hohen Grasfeldern muss vor einer vollständigen Integration auf einem realen Android-Gerät geprüft werden; die Werkstatt ist kein solcher Gerätetest.
