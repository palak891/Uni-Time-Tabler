var translator = {
    translate: function(key) {
        var translation = translator.languages[config.data.language][key];
        return translation;
    },
    
    translate_ui: function() {
        var elements_to_translate = document.querySelectorAll("[data-translator-key]");
        
        for (element of elements_to_translate) {
            element.innerText = translator.translate(element.getAttribute("data-translator-key"));
        }
    },

    languages: {
        en: {
            "timetable": "Timetable",
            "settings": "Settings",
            "language: ": "Language:",
            "save": "Save",
            "general": "General",
            "backup": "Backup",
            "restore": "Restore",
            "reset": "Reset",
            "colors": "Colors",
            "periods": "Schedule",
            "add": "Add",
            "availability":"Availability",
            "data_saved": "Your application data was successfully saved.",
            "reset_confirm": "Are you sure to reset all data? If you haven't made a backup, all application data will be lost forever."
        },
        
        de: {
            "timetable": "Stundenplan",
            "settings": "Einstellungen",
            "language: ": "Sprache:",
            "save": "Speichern",
            "general": "Allgemein",
            "backup": "Sichern",
            "restore": "Wiederherstellen",
            "reset": "Zurücksetzen",
            "colors": "Farben",
            "periods": "Zeiten",
            "add": "Hinzufügen",
            "availability":"Verfügbarkeit",
            "data_saved": "Ihre Anwendungsdaten wurden erfolgreich gespeichert.",
            "reset_confirm": "Sind Sie sich sicher, dass sie alle Anwendungsdaten zurücksetzen wollen? Wenn Sie kein Backup gemacht haben, gehen dadurch alle Anwendungsdaten für immer verloren."
        }
    }
}
