# Zusammenhängende Felsgruppen · separate Studie

`public/felsgruppen.html` zeigt Zweierfels, L-Form und 2×2-Block. Ein Schalter vergleicht die Körper mit einzelnen Findlingen. Keine Änderung am Hauptspiel oder an freigegebenen Einzelmodulen.

`createRockGroup({cells:[[col,row],...],style:'plain'|'vein'|'leaf',pitch:80})` liefert `{group,dispose}`. Pro Gruppe entsteht ein einziges Mesh aus der gemeinsamen Kontur; innere Zellkanten werden vor der Geometrieerstellung entfernt. Außenabstand 7, Unterkante -6.5, Oberkante etwa 27–28. Die Materialkoordinaten laufen über die gesamte Gruppe, ohne pro Feld neu zu beginnen. Eine Gruppe trägt höchstens ein Relief. Z ist oben, Feldmittelpunkt `(col*80+40,-row*80-40)`.

Prototyp für vierseitig zusammenhängende Gruppen. Getrennte/diagonal berührende Gruppen müssen einzeln erzeugt werden. Ringförmige Gruppen werden auf eine freie Innenzelle geprüft. Noch keine allgemeine Prüfung aller im Katalog auftretenden Steingruppen, keine Leistungsprüfung auf Android. Automatisierte Tests prüfen Nahtfreiheit über gemeinsame Kanten, Außenmaße, freie L-/Ringzellen und endliche Normalen. Browservergleich separat visuell geprüft.


Nutzerentscheidung nach Sichtung (2026-10-13): Verschmelzungen wirken zu wuchtig. Einzelsteine bleiben die gewaehlte Richtung. Diese Studie wird nur als Vergleich erhalten und nicht ins Hauptspiel integriert.
