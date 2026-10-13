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
