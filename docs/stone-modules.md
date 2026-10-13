# Steinstudie

Separate Studie: `public/steinwerkstatt.html`. Hauptspiel und vorgemerktes Elfenbeinset bleiben unverändert.

`createStoneTile(style, {seed})` aus `src/renderer/stone-modules.js` liefert `{group, dispose}`. Z ist oben, Ursprung ist der Feldmittelpunkt. Rasterabstand 80, Grundfläche 66 × 66, Unterkante -6.5. Oberkante der Grundform 26.5; Findling maximal unter 33. Alle Varianten sind unbegehbar und werfen/empfangen Schatten.

- `reference`: unbearbeitete Grundform, kein exakter Nachbau des alten Reliefmaterials.
- `split`: leicht gebrochene Oberfläche mit geometrisch abgesenkten, verzweigten Spalten.
- `pebble`: stärkere Wölbung, weichere Ecken, helle Quarzader im Material.
- `fossil`: vertieftes vierblättriges Relief in Geometrie und Bump-Textur.

Die Grundfarben liegen in derselben warmgrauen Farbfamilie, sind zwischen den Varianten bewusst leicht unterschiedlich. Farbe und Mikrorelief werden deterministisch als DataTextures erzeugt. Keine externen Bilder oder Bildgenerator-Assets. Downloadquelle `public/stone-modules.mjs` benötigt Three.js und dessen Addons im Bundler.

Die Studie zeigt jeden Stein vergrößert und zweimal in einem identischen kleinen Gelände mit Erde, Wiese und Wasser. Noch keine Auswahl und keine Integration in das Hauptspiel. Automatisierte Prüfung: Grundfläche, Höhe, Unterkante, endliche Normalen, geschlossene Oberfläche, geometrische Blattvertiefung und Ressourcenfreigabe. Browserdarstellung separat visuell prüfen; kein Android-Gerätetest.


Revision: C (`pebble`) vom Nutzer vorgemerkt, noch nicht ins Hauptspiel integriert. Wolkige Farbschwankung und Mikro-Bump stark reduziert; Seiten werden mit sauberem Grundmaterial dargestellt, damit planare UVs dort keine gestreckten Muster erzeugen. B-Spalte schmaler und heller. Neue Varianten: `plain` (E, ohne Motiv), `strata` (F, zwei Quarzadern), `dimples` (G, drei geometrische Mulden), `rosette` (H, sechs geometrisch vertiefte Blaetter). C und E-H verwenden identische Basisform, Grundfarbe und Hoehenwoelbung; nur die Oberflaechendetails variieren.
