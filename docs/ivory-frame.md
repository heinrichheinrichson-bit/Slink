# Elfenbeinrahmen Â· separate Designstudie

`public/elfenbeinwerkstatt.html` zeigt drei Varianten derselben Geometrie. B und C verwenden einen einzigen breiter abgerundeten Grundkoerper, ohne separate TubeGeometry-Randrollen. Eine deterministische matte Bump-Textur und leichte Hoehenvariation brechen die perfekte Regelmaessigkeit. Die Bodenplatte bleibt unter den Erdfeldern. Benachbarte begehbare Felder erhalten keine zusaetzlichen Streben; gleichartige Hindernisse teilen sich eine Oeffnung.

Die Quelle `src/renderer/ivory-frame.js` ist ein wiederverwendbares Three.js-Modul. `public/ivory-frame.mjs` ist dieselbe Quelle zum Herunterladen; sie benÃ¶tigt Three.js im jeweiligen Projekt/Bundler. Es handelt sich nicht um ein Hintergrundbild und noch nicht um eine Ã„nderung des Spielkatalogs.

```js
const frame = createIvoryFrame({
  n: level.n,
  cells: [...level.solution, ...level.water, ...level.lava, ...level.stones],
  water: level.water,
  lava: level.lava,
  stones: level.stones,
  style: 'soft' // current | soft | plush
});
scene.add(frame.group);
// frame.openings liefert zu jeder Hindernisgruppe die passende FlÃ¼ssigkeitsform.
// Bei einem Levelwechsel frame.dispose() aufrufen.
```

Koordinaten: Z ist oben, Rasterabstand 80. Feldmittelpunkt `(Spalte*80+40, -Zeile*80-40)`. Der bisherige Spielrenderer verwendet einen Ursprung mit zusÃ¤tzlichem Versatz `(20,-20)`. Bei einer spÃ¤teren Integration mÃ¼ssen Rahmen und aus `openings` erzeugte FlÃ¼ssigkeitsmeshes denselben Versatz erhalten. `frame.walkableShapes` liefert zusÃ¤tzlich die zusammenhÃ¤ngenden Formen fÃ¼r die braune Unterlage zwischen begehbaren Feldern. Die Studie verwendet sie, damit dort keine cremefarbenen Fugen sichtbar werden. Der Spielrenderer kann seine bestehende Erdunterlage beibehalten.

Die vorhandenen Module behalten ihre GrÃ¶ÃŸe; FlÃ¼ssigkeitsoberflÃ¤chen werden aus den zurÃ¼ckgegebenen Ã–ffnungen aufgebaut.

Der Rahmen unterstÃ¼tzt unregelmÃ¤ÃŸige Umrisse, zusammenhÃ¤ngende Becken, mehrere getrennte Komponenten und Inseln innerhalb ringfÃ¶rmiger Becken. Ein gemeinsamer GrundkÃ¶rper und kontinuierliche gerundete Randkonturen bilden die CremeflÃ¤che. Wasser und Lava bleiben vertieft; Steine sind weiterhin eigene erhÃ¶hte Module.

PrÃ¼fung: alle 500 aktuellen Grundrisse mit Variante B erzeugt; endliche Geometrie, freie Erdmittelpunkte und offene Wasser-/Lavamittelpunkte geprÃ¼ft. ZusÃ¤tzlich alle drei Stile mit verbundenen Becken, ringfÃ¶rmigen Becken und diagonal getrennten Komponenten geprÃ¼ft. B und C wurden in der Browserstudie visuell betrachtet. Ein vollstÃ¤ndiger Android-Leistungs- oder Integrationstest steht fÃ¼r dieses neue Modul noch aus.


Materialrevision: B/C verwenden denselben prozeduralen Materialverlauf auf Deckflaeche, Rundung und Wand. Die Hoehe steuert Creme/Sand/Ocker, Hindernisnaehe eine dezente warme Vertiefung. Zweifrequente weiche Farbvariation und feine Poren vermeiden eine uniforme weisse Flaeche. Die Geometrie und Spielmechanik bleiben unveraendert. Browserpruefung: beide Shader ohne Konsolenfehler dargestellt.


Passformkorrektur: Alle Stile verwenden feste Beckenmasse (Inset 7, Innenradius 7, Bevel 5). Nur Aussenkontur, Koerpertiefe und Material variieren. rimShape beschreibt die obere Oeffnung; shape die etwas breitere, von den Waenden verdeckte Fluessigkeitsunterlage; surfaceZ=-20 die Oberflaeche. Stein erzeugt keine Oeffnung, sondern steht wie im Hauptspiel auf geschlossener Unterlage. Studienstein hat die Spielmasse 66x66x33. Der Lichtwinkel macht echte Becken- und Steinschatten sichtbar; die urspruengliche Umgebungsaufhellung ist wiederhergestellt. Regression prueft identische Oeffnungen aller Stile, geschlossene Steinunterlage und vorhandene Beckenwaende. Noch separate Studie, kein Austausch im Hauptspiel.

Fehlerursache des orangefarbenen Spalts: Hindernis-Lochkonturen hatten dieselbe Laufrichtung wie die Aussenkontur. Dadurch zeigten die Beckenwand-Normalen vom Beckeninneren weg (Backface-Culling). Lochkonturen sind nun entgegengesetzt orientiert. Ein horizontaler Raycast aus jedem Testbecken prueft die tatsaechlich von innen sichtbare Wand. Die warmen Seitenfarben wurden deutlich aufgehellt, ohne die Farben der Terrainmodule zu aendern.


Rundungsrevision: Aussenueberstand A/B/C von 11/17/20 auf 8/11/13 reduziert. Beckeninset einheitlich von 7 auf 6 reduziert; Innenradius von 7 auf 16 vergroessert. Fluessigkeitsunterlage verwendet dazu den erweiterten Radius 21, damit die Wandecken weiterhin gedeckt sind. Farben und Licht unveraendert.


Status 2026-10-13: Vom Nutzer als Modulset vorgemerkt. Referenzstand: Commit `60fb0a6`. Alle drei Varianten bleiben erhalten; keine Auswahl zwischen A, B und C getroffen. Noch kein Austausch im Hauptspiel.
