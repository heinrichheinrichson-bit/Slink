# Blumen, Besucher und Einzelsteine im Hauptspiel

Der Renderer `world-catalogue-entry.js` verwendet `createFlowerGoal` und `createStoneTile`. Der bisherige Rahmen bleibt bestehen; vorgemerkte Elfenbeinvarianten und abgelehnte Verschmelzungen werden nicht eingebaut.

## Verteilung

`createGardenDecorationPlan(level)` bestimmt rein dekorative Zuordnungen aus stabilen Level-IDs. Alle vier Blumenarten und alle acht Steinarten kommen im 500er-Katalog vor. Eine Hauptblume pro Level, gelegentlich eine zweite Sorte bei vielen Zielen. Beruehrende Steine teilen die Findlingsfamilie C/E/F/G/H, mit hoechstens einem Akzent pro Gruppe. Sie bleiben einzelne Steine mit Fugen. Daten, IDs, Ziele, Loesungen, Schwierigkeit und vorhandener Fortschritt bleiben unveraendert.

Stein-Geometrie/Material wird innerhalb eines Levels pro Stil wiederverwendet. Die Wiese bleibt Gartenerde -> Kleewiese samt bisheriger Wiesenvarianten; Wasser/Lava behalten ihre bisherigen Animationen. Blueten wachsen an denselben Zielstellen und behalten die Zahlenmarken.

## Einstellungen

Im vorhandenen Einstellungsdialog: Besucher an/aus, getrennte Bienen-/Hummelgroesse 50-300 Prozent, Reset auf 100. Aenderungen werden sofort auf bestehende Ziele angewendet, ohne Weg oder Level zu wechseln. Speicherung unter `slink-visitor-settings-v1`. Beim ersten Start werden gueltige Groessen aus der Blumenstudie uebernommen. Preview/QA verwendet `slink-visitor-preview-settings-v1`, damit Tests keine Spielereinstellungen ueberschreiben. Zahlenmarkengroesse bleibt separat bei 27/33/40 Prozent. Abschlussmeldung weiterhin nach 3200 ms.

## Pruefung

Automatisierte Tests pruefen alle 500 Dekorationsplaene, Verwendung aller Varianten, Gruppenkoharenz und unveraenderte Raetseldaten. Settings-Tests pruefen Migration, sofortige Aenderung ohne Wegverlust, Speicherung, Reset und Preview-Isolation. Bestehende Gameplay- und Modulpruefungen bleiben aktiv.

`integration-pruefung.html?preview=1` ist eine isolierte Browserpruefung von 14 geladenen/komplett begruenten Brettern, inklusive verschiedener Kapitel, vieler Steine und wiederholter Levelwechsel mit Ressourcenvergleich. Kein Test auf echter Android-Hardware.

Browserresultat: 14/14 bestanden, keine erfassten Fehler. Wiederholtes Level 1 jeweils 30 Texturen, 589 Geometrien und 9 Programme nach vollstaendiger Bluete. Bericht: garden-integration-browser-report.json. Live-Regler von 175 auf 180 Prozent geprueft; Weg blieb 12/12. npm test vollstaendig bestanden.
