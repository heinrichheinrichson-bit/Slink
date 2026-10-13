# SLINK · Wiesenvielfalt

Die sechs Bewuchsvarianten verwenden exakt den Grundblock der ausgewählten Kleewiese: identische Geometrie, Position, Oberflächenfarbe `#a4d536`, Relief, Rauheit und dezente Eigenhelligkeit. Nur zusätzlicher Bewuchs variiert. Das Spiel wurde für diese Studie nicht geändert.

```js
import {createMeadowTile} from './meadow-variants.mjs';
const tile = createMeadowTile('visitors', {seed: 73});
scene.add(tile.group);
// Nur animierte Module benötigen einen laufenden Zeitwert:
tile.update(elapsedSeconds);
// Beim Entfernen:
tile.dispose();
```

Kennungen: `calm`, `classic`, `rich`, `tuft`, `flowers`, `visitors`.
Die Datei benötigt `growth-modules.js` daneben sowie Three.js einschließlich RoundedBoxGeometry aus der vorhandenen Build-Umgebung.

Gleicher Seed und gleiche Kennung erzeugen denselben Bewuchs. Die beiden Insekten des Moduls `visitors` sind kleine animierte 3D-Körper mit Flügeln. Ihre Flugbahnen bleiben innerhalb der Rastergrundfläche. Ein automatisches Verteilen dieser Varianten auf Spiellevel ist noch nicht implementiert. Die Häufigkeiten, Freiräume um Zahlen und Leistung auf einem echten Android-Gerät sind vor der Übernahme ins Spiel zu prüfen.

Geprüft: identische Grundgeometrie und Materialwerte aller Varianten; statischer Bewuchs und Insektenflug bleiben innerhalb der Feldgrundfläche, inklusive einer Abtastung über 20 Animationssekunden.
