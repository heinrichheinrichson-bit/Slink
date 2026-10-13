# Elfenbeinrahmen · separate Designstudie

`public/elfenbeinwerkstatt.html` zeigt drei Varianten derselben Geometrie. B und C haben einen dickeren, stärker gerundeten Rand. Die Bodenplatte bleibt unter den Erdfeldern; nur die Randwülste steigen höher. Benachbarte begehbare Felder erhalten keine zusätzlichen Streben. Benachbarte gleichartige Hindernisse teilen sich eine Öffnung.

Die Quelle `src/renderer/ivory-frame.js` ist ein wiederverwendbares Three.js-Modul. `public/ivory-frame.mjs` ist dieselbe Quelle zum Herunterladen; sie benötigt Three.js im jeweiligen Projekt/Bundler. Es handelt sich nicht um ein Hintergrundbild und noch nicht um eine Änderung des Spielkatalogs.

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
// frame.openings liefert zu jeder Hindernisgruppe die passende Flüssigkeitsform.
// Bei einem Levelwechsel frame.dispose() aufrufen.
```

Koordinaten: Z ist oben, Rasterabstand 80. Feldmittelpunkt `(Spalte*80+40, -Zeile*80-40)`. Der bisherige Spielrenderer verwendet einen Ursprung mit zusätzlichem Versatz `(20,-20)`. Bei einer späteren Integration müssen Rahmen und aus `openings` erzeugte Flüssigkeitsmeshes denselben Versatz erhalten. `frame.walkableShapes` liefert zusätzlich die zusammenhängenden Formen für die braune Unterlage zwischen begehbaren Feldern. Die Studie verwendet sie, damit dort keine cremefarbenen Fugen sichtbar werden. Der Spielrenderer kann seine bestehende Erdunterlage beibehalten.

Die vorhandenen Module behalten ihre Größe; Flüssigkeitsoberflächen werden aus den zurückgegebenen Öffnungen aufgebaut.

Der Rahmen unterstützt unregelmäßige Umrisse, zusammenhängende Becken, mehrere getrennte Komponenten und Inseln innerhalb ringförmiger Becken. Ein gemeinsamer Grundkörper und kontinuierliche gerundete Randkonturen bilden die Cremefläche. Wasser und Lava bleiben vertieft; Steine sind weiterhin eigene erhöhte Module.

Prüfung: alle 500 aktuellen Grundrisse mit Variante B erzeugt; endliche Geometrie, freie Erdmittelpunkte und offene Wasser-/Lavamittelpunkte geprüft. Zusätzlich alle drei Stile mit verbundenen Becken, ringförmigen Becken und diagonal getrennten Komponenten geprüft. B und C wurden in der Browserstudie visuell betrachtet. Ein vollständiger Android-Leistungs- oder Integrationstest steht für dieses neue Modul noch aus.
