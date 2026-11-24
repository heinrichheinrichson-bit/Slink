# Erste Einführung

Aktueller Stand (24.11.2026): Die folgenden Textkarten sind ersetzt. Nach Freigabe der Lernrätsel führt jetzt ein modaler, pausierter Spielbereich durch drei kleine Gärten. Die Hinweise erklären alle Erdfelder, Zahlenreihenfolge und rückgängig gemachte Schritte; die Hand läuft bis zum ersten eigenen Zug. Abschluss/Überspringen/Zurück schließt die Einführung und entlädt die Szene. Deutsche und englische Fassung, bestehende Sicherungsflags sowie erneuter Aufruf über Hilfe bleiben erhalten. Siehe `phone-test-0.1.32.md`. Der folgende Abschnitt dokumentiert die abgelöste erste Fassung.

Neue Spieler sehen beim ersten tatsächlichen Rätselstart drei kurze, überspringbare Hinweise: bei 1 beginnen und über benachbarte Felder ziehen; Zahlen der Reihe nach besuchen; alle Erdfelder vor der letzten Zahl begrünen. Die bestehende Hilfe erklärt weiterhin Hindernisse und Rückwärtsgehen ausführlicher.

Die Einführung verändert keinen Zug und verbraucht keine Tipps. Als modaler Dialog pausiert sie über die vorhandene Dialogbehandlung die Spielzeit. Beim Vorladen des unsichtbaren Spiels erscheint sie noch nicht; erst die validierte Nachricht des übergeordneten Menüs öffnet sie. Direkte Rätselstarts einschließlich Tagesrätsel werden ebenfalls unterstützt. Vorschau- und Entwicklerseiten erhalten keine automatische Einführung.

Abschließen, Überspringen oder Escape merkt `nurbi-intro-v1` vor. Dieser kleine Datensatz ist in der portablen Sicherung enthalten. Wer bereits Katalogrätsel gelöst hat, erhält keine ungefragte Einführung. Über **So spielst du → Einführung ansehen** im Rätsel kann sie jederzeit wieder geöffnet werden. Deutsch und Englisch nutzen die bestehende zentrale Übersetzung.

Implementierung: `public/first-steps.js`, Darstellung in `public/slink.css`, Einbindung in `slink.html` und in der Android-Assetliste. Kein neuer APK-/AAB-Build in diesem Arbeitsschritt.

Prüfung: eigener Test für Vorladen/Wake-Absender, drei Schritte, Überspringen, Wiederholung, bestehende Fortschritte, Vorschau, Sicherung und Offline-Paketierung. Browser bei 320 × 568: alle drei deutschen Schritte, einmalige Anzeige nach Reload, englische Wiederholung und Überspringen geprüft.
