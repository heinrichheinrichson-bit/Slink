# Prüfstand des 500er-Katalogs

## Rätsel und Spiellogik

- 306.000 Kandidaten untersucht, 7.147 in den Vorauswahlpools, 500 ausgewählt.
- Genau eine gültige Lösung pro ausgewähltem Rätsel, erneut vollständig verifiziert.
- 500 verschiedene begehbare Formen, einschließlich Prüfung auf Verschiebung, Rotation und Spiegelung.
- Zwei bis vier Zahlenziele; vier bis sieben Felder Rasterbreite.
- Vorgesehene Kapitelzahlen und ihre Auswahlgrenzen geprüft.
- 50 Level im Engstellen-Kapitel besitzen einen nicht nummerierten Verbindungspunkt, dessen Entfernen die Fläche in Bereiche mit jeweils mindestens vier Feldern zerlegt.
- Keine abgetrennten, frei schwebenden Materialinseln. Wasser, Lava und Stein überschneiden sich nicht und sind nicht begehbar.
- Alle 500 Level mit dem tatsächlichen Spielcode gelöst; Tipps, Rückgängig, Rückwärtsziehen, falscher Start und Hindernisse geprüft.
- 476 plausible falsche Wege mit der Tippfunktion geprüft. Der erste Tipp verändert den Weg nicht; der bestätigte zweite Tipp startet neu.
- Veraltete Abschlusstimer nach Rückgängig/Neustart abgefangen.
- Der exakte Solver wurde mit einer unabhängigen, ungeprunten vollständigen Enumeration auf 8.640 kleinen Brettkonfigurationen verglichen. Keine Abweichungen.

## Grafik

Im echten In-App-Browser wurden alle 500 Terrainkonfigurationen geladen, sowohl als Erde als auch als vollständig begrünte Fläche. Der Durchlauf meldete keine Rendererfehler. Die Grafikressourcen werden beim Levelwechsel freigegeben.

Gemessener Ressourcenbestand im Durchlauf:

- maximal 93 Texturen;
- maximal 1.992 Geometrien;
- maximal neun Shaderprogramme;
- beim letzten Brett 83 Texturen und 1.732 Geometrien.

Diese Werte sind keine Bildraten- oder Android-Leistungsmessung. Die automatisierte Grafikprüfung ersetzt keine individuelle gestalterische Begutachtung jedes Rätsels. Zusätzlich wurden Einstieg, Expertenauswahl und Engstellen visuell betrachtet.

Die Darstellung wurde in festen Browseransichten für 320 × 640 und 390 × 844 geprüft. Bedienelemente blieben erreichbar; kein horizontaler Überlauf wurde beobachtet. Die sehr kleinen Ziffern bei großen Brettern bleiben ein Thema für echte Geräte- und Lesbarkeitstests.

## Oberfläche

- Zehn Kapitel auswählbar; Gesamtkatalog bis Level 500 über 50er-Seiten erreichbar.
- Markengrößenwechsel bei laufendem Rätsel ohne Wegverlust und Speicherung nach Neuladen geprüft.
- Lokale Bewertung mit Notiz nach Neuladen geprüft. Gesammelte Bewertungen lassen sich zum Kopieren anzeigen.
- Bewertungen im Prüfmodus benutzen einen eigenen Speicherbereich.

## Noch nicht nachgewiesen

- Menschlich kalibrierte Schwierigkeitskurve und Langzeit-Abwechslungsreichtum.
- Spielgefühl, Akkubedarf und Bildrate auf echten Android-Geräten.
- Native Android-Verpackung, Store-Veröffentlichung und geräteübergreifender Fortschritt.

Die Kapitel sind eine systematisch geprüfte Testauswahl. Die menschlichen Bewertungen sollen die nächsten Anpassungen steuern.
