# SLINK · Animierte Flüssigkeitsmaterialien

`living-liquid.mjs` enthält die wiederverwendbare Materialfabrik für die vorhandenen vertieften 3D-Becken. Die gezeigte Studie verwendet diese Quelle. Rahmen und Beckenform werden vom bestehenden Renderer erzeugt und bleiben unverändert.

```js
import {createLivingLiquid} from './living-liquid.mjs';
const liquid = createLivingLiquid('water', {center: [60, -60]});
// Oder: createLivingLiquid('lava', ...)
existingPoolMesh.material = liquid.material;
// Im Renderzyklus, Zeit in Sekunden:
liquid.update(elapsedSeconds);
renderer.render(scene, camera);
// Beim Entfernen:
liquid.dispose();
```

Voraussetzung: die vorhandene Three.js-Umgebung. Die Oberfläche liegt in der XY-Ebene, Z zeigt nach oben. Die bisherigen Poolgeometrien haben ihre Rasterkoordinaten bereits in den Geometriepositionen; dadurch laufen Muster ohne Naht über verbundene Felder. Bei lokal zentrierten Einzelgeometrien muss dieselbe Koordinatenkonvention hergestellt werden.

Die Animation berechnet Farbe und Lichtmuster im Materialshader. Sie verändert weder Geometrie noch Kollisionen. Wellen- und Blasenringe sind Materialeffekte; echte aufsteigende 3D-Blasen oder eine physikalische Simulation sind nicht enthalten.

Die Studie rendert etwa 30-mal pro Sekunde, hält die Animationszeit bei Pause an und rendert in verborgenen Tabs nicht weiter. Die Einbindung in den eigentlichen Spielrenderer und ein Leistungstest auf einem echten Android-Gerät stehen noch aus.

## Ruhige Varianten

Die Materialfabrik unterstützt nun zusätzlich `style`:

- Wasser: `sway` (sanftes Wabern), `shimmer` (Lichtspiel), `ripples` (kleine Wellen).
- Lava: `sway` (zähes Wabern), `breathe` (atmende Glut), `bubbles` (leises Brodeln).

Beispiel: `createLivingLiquid('water', {style: 'sway', center: [60, -60]})`.

`quiet-liquid-presets.js` muss neben `living-liquid.mjs` liegen. Der Standard `flow` erhält die vorherige Studie. Ruhige Varianten verschieben Muster nur begrenzt periodisch oder verändern deren Helligkeit; es gibt keine dauerhafte Strömungsrichtung. Geometrie und Spielregeln bleiben unverändert.
