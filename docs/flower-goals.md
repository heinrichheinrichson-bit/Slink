# Blumenmodule · separate einsatzfähige Studie

`public/blumenwerkstatt.html` zeigt Gänseblümchen, Butterblume, Wiesenblüte und kleinen Mohn. Alle haben dieselbe bestehende goldene Knospe und eine unabhängige Zahlenmarke. Das kleine Testrätsel hat acht begehbare Felder, drei geordnete Ziele und ein Wasserfeld. Eingabe per Ziehen oder schrittweisem Antippen, Zurücknehmen, Neustart, automatische Vorführung und Artenwechsel bei gleichem Spielstand. Nach Abschluss bleibt das Brett sichtbar.

```js
import {createFlowerGoal} from './flower-goals.mjs';
const flower = createFlowerGoal({species:'daisy', number:1, state:'next', layout:'compact'});
flower.group.rotation.x = Math.PI / 2; // bestehendes Z-up-Spielbrett
flower.group.position.set(cellX, cellY, terrainTop);
scene.add(flower.group);
flower.setSize(27); // 27 / 33 / 40
flower.setState('bloom');
flower.update(elapsedSeconds, deltaSeconds);
// Beim Entfernen flower.dispose() aufrufen.
```

Quelle: `src/renderer/flower-goals.js`, nutzt das bestehende Markermodul. Download `public/flower-goals.mjs` bündelt beide Quellen; nur Three.js bleibt als Paketabhängigkeit. Browser mit Canvas-Unterstützung erforderlich. Arten: `daisy`, `buttercup`, `meadow`, `poppy`. Zustände: `closed`, `next`, `bloom`. Ursprung ist Geländeoberkante, Y-up wie beim bisherigen Zielmodul; für Z-up um X rotieren. Die Module sind dekorativ; Terrain bleibt Eingabeziel.

Aufblühen: goldenes Knospenmodell wird kleiner, artspezifische Blätter wachsen und klappen aus; der Stempel wird sichtbar. Rücknahme läuft umgekehrt. In der Studie wächst gleichzeitig Erde zu Wiese. Die Zahlenmarke bleibt an ihrer Position und wird nicht durch die Blume ersetzt.

Automatische Prüfung: identische geschlossene Knospen, monotones Öffnen, Rücknahme, Markengrößen, Zellgrenzen und Ressourcenfreigabe. Separate Studie; noch keine Integration in den 500er-Katalog oder Android-Geräteprüfung. Die Auswahl der Arten ist noch nicht freigegeben.


Bluetenbesucher: optional ein kleines Bienchen und eine rundlichere Hummel. Sichtbar erst bei fast vollstaendig geoeffneter Bluete; bei Ruecknahme sofort verborgen. Langsame begrenzte Flugbahnen oberhalb der Bluete, kleine flatternde Fluegel. `insects:false` oder `setInsects(false)` schaltet sie ab. Die Studie bietet einen Vergleichsschalter; neu gewaehlte Arten uebernehmen dessen Zustand.

Bewegungsrevision: Biene/Hummel auf 1.8-fache Groesse angehoben. Kreisbahnen durch reproduzierbare pseudozufaellige Zielpunkte mit weich beschleunigten/abgebremsten Fluegen und kurzen Schwebephasen ersetzt. Unterschiedliche Seeds pro Zielnummer, Art und Besucher; sanfte Richtungswechsel und Hoehenvariation. Alle Flugbahnen bleiben begrenzt. Automatisiert auf Spruenge, Grenzen und Markierungsabstand geprueft.

Groessenwerkzeug: getrennte Regler fuer Biene und Hummel, 50-300 Prozent relativ zum zuletzt gezeigten 1.8-fachen Modell. `setVisitorSize("bee"|"bumblebee",percent)` wirkt direkt, ohne Blumenzustand oder Flugbahn zu aendern. Werte bleiben bei Artenwechsel erhalten und werden nur fuer diese Studie lokal gespeichert. Reset setzt beide auf 100 Prozent. Der Nutzer hat das aktuelle Flugmuster als unnatuerlich bewertet; die Bewegung ist damit noch nicht freigegeben und wurde fuer diesen Groessentest nicht erneut veraendert.

Weitere Revision: Hummel kompakter und rundlicher, mit heller Hinterleibsspitze und 260 kurzen farbigen Fellfasern. Flugpfade sind jetzt durchgehend gekruemmte kubische B-Splines mit stetiger Beschleunigung statt gerader Start-Stopp-Strecken. Sanfte Zeitverzerrung variiert das Tempo; Koerper folgt Flugrichtung und neigt sich in Kurven. Flugbereich ueber mehr Flaeche des eigenen Feldes erweitert; eine ausgesparte Ecke schuetzt die Zahlenmarke. Neue Darstellung noch zur Sichtung, keine Aussage ueber vom Nutzer bestaetigte Natuerlichkeit.
