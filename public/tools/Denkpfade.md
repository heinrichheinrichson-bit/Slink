# Denkpfade · anspruchsvolle Testserie

12 neue Rätsel, zusätzlich zum bisherigen Katalog (jetzt 112). Separater Einstieg: `../denkpfade.html`. Der separate Einstieg speichert seinen Fortschritt unabhängig; Markengröße und Materialien entsprechen dem Hauptspiel.

## Auswahl

12.000 reproduzierbare Kandidaten, 79 erfüllten die Filter. Ausgewählt wurden neun mit vielen verzögerten Fehlentscheidungen und drei mit einer echten Engstelle: Entfernt man das betreffende begehbare Feld, zerfällt die begehbare Fläche in getrennte Bereiche.

* Rasterbreite sechs oder sieben Felder.
* Zwei bis vier geordnete Zahlenziele.
* Genau eine gültige Gesamtlösung, vollständig nachgewiesen.
* Mindestens fünf falsche Abzweigungen entlang des Lösungswegs überstehen drei oder mehr zusätzliche Schritte, ohne dass die Restflächenprüfung oder die Prüfung auf unmögliche Sackgassen sie sofort verwirft.
* Drehungen und Spiegelungen derselben Konfiguration werden aussortiert.

Die Fehlwege werden bis maximal zehn Schritte beziehungsweise 600 Suchknoten untersucht. Die Messwerte sind Auswahlhilfen, keine Garantie menschlicher Schwierigkeit. Einige Fehlwege können durch weitere logische Überlegungen früher erkannt werden. Es fehlen weiterhin menschliche Spieltests und eine belastbare Schwierigkeitsskala.

## Werkzeug

`node hard-puzzles.cjs` erzeugt die separate Serie und den Analysebericht neu. `CANDIDATES` kann die Kandidatenanzahl überschreiben. Die Hauptkatalogdatei wird durch dieses Werkzeug nicht verändert. Eine erneute Übernahme in den Hauptkatalog muss vorhandene IDs ersetzen statt doppelt anzuhängen. Diagnosewerte und Beispiele liegen in `../hard-report.json`; die Beispiele verraten Teile der Lösung.

Anders als der erste Generator entfernt diese Version auch kurze Schleifen aus dem Inneren eines Pfads. So entstehen Hindernisse, schmale Verbindungen und verschieden große Teilbereiche. Zusätzliche Ziele werden auf vier begrenzt, statt Eindeutigkeit mit immer mehr Zielmarken zu erzwingen.
