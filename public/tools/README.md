> Historische Dokumentation des ersten 100er-Katalogs. Der aktuelle Katalog hat 500 Rätsel; siehe `catalogue-curator.cjs`. Der alte Generator schreibt inzwischen ausschließlich `legacy-generated-levels.js` und `legacy-generated-report.json`, damit er den aktuellen Katalog nicht überschreibt.

# SLINK · Rätselwerkzeug und Testkatalog

100 spielbare Level: die bisherigen zehn bleiben erhalten, dazu 90 neue.

| Set | Neue Rätsel | Rasterbreite |
|---|---:|---:|
| Kleine Gärten | 20 | 4 |
| Teichpfade | 30 | 5 |
| Glut und Klee | 30 | 6 |
| Große Gärten | 10 | 7 |

Die ursprünglichen zwei 8er-Rätsel bleiben im ersten Set. Neue Rätsel verwenden höchstens sieben Felder nebeneinander. Das ist noch keine Bestätigung der Bedienbarkeit auf echten Android-Geräten.

## Werkzeug verwenden

Mit Node.js ausführen:

```
node puzzle-tool.cjs --check
node puzzle-tool.cjs
```

`--check` prüft den gespeicherten Katalog. Ohne Argument wird der Katalog reproduzierbar neu erzeugt und überschreibt `../legacy-generated-levels.js` und `../legacy-generated-report.json`. Die ursprünglichen zehn stammen aus `original-ten.js`. Nach einer Neuerzeugung die Webseite neu laden. Die separate Einzeldatei `SLINK-Welt-1.html` wird dadurch nicht aktualisiert.

Der Generator verändert zusammenhängende, vollständige Pfade mit Backbite-Schritten, kürzt die Enden für unterschiedliche Umrisse und verteilt Hindernisse. Ein unabhängiger Tiefensuchsolver zählt gültige Lösungen unter Beachtung der nummerierten Ziele. Er verwirft abgetrennte Restflächen und unmögliche Sackgassen. Bei mehreren Lösungen werden Zwischenziele ergänzt. Kandidaten werden nur übernommen, wenn genau eine Lösung ohne Erreichen des Suchlimits bewiesen ist. Spiegelungen und Drehungen derselben Feld-/Zielkonfiguration werden aussortiert. Materialwechsel allein gelten nicht als neues Rätsel.

Alle 90 neuen Rätsel sind eindeutig. Die ursprünglichen zehn bleiben unverändert; einige davon erlauben mehrere gültige Lösungen. Die Schwierigkeit ist zunächst nach Rastergröße eingeteilt, nicht durch menschliche Spieltests bestätigt. Suchknoten sind Diagnosewerte, kein verlässliches Maß für menschliche Schwierigkeit. Für einen finalen Katalog müssen Wiederholungsgefühl, Verständlichkeit und Schwierigkeit praktisch bewertet werden.

Die Gartenerde wird zu einer festen, pro Feld gespeicherten Kleewiesenvariante. Blüten und Insekten liegen außerhalb nummerierter Felder; pro Rätsel gibt es höchstens ein Insektenfeld. Alle vorhandenen Materialien und Studien bleiben erhalten.

Nach der Lösung bleibt der Garten 3,2 Sekunden frei sichtbar. Rückgängig oder Neustart verhindert eine verspätete Abschlussmeldung.
