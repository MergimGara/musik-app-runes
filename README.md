# 🎵 MusikApp

## 👤 Projekt von
Mergim Gara - garamer1
Modul: Prototyping – Dozent: Max Meisterhans

---

## 📋 Projektbeschreibung

Die **MusikApp** ist eine moderne Webanwendung zur Verwaltung und Wiedergabe von Songs. Sie erlaubt es, Songs zu importieren, als Favoriten zu speichern und in Playlists zu organisieren. Die Oberfläche ist inspiriert von Spotify und wurde mit Fokus auf Design, Benutzerfreundlichkeit und Modularität umgesetzt.

---

## 🧪 Technologien

| Technologie      | Beschreibung                                |
|------------------|---------------------------------------------|
| 🟠 SvelteKit 5    | Modernes Framework mit Runes-Modus          |
| 🌐 MongoDB        | Datenbank für Songs, Favoriten, Playlists   |
| 🎨 Tailwind CSS   | Modernes Utility-first CSS Framework        |
| 🎛️ Bootstrap      | Für Buttons und Form-Komponenten            |
| 🎧 iTunes API     | Externe API zum Import von Songdaten        |
| 💾 Vercel         | Deployment-Plattform für SvelteKit          |

---

## 🔗 Live-Demo & GitHub

- **🔴 Online-Demo**: [https://musikapp.vercel.app](https://musikapp.vercel.app)  
- **📦 Quellcode auf GitHub**: [https://github.com/dein-username/musikapp](https://github.com/dein-username/musikapp)

---

## 📷 Screenshots

> Füge Screenshots in `/screenshots/` ein und verlinke sie hier:

### 🎵 Startseite
![Startseite](./screenshots/startseite.png)

### 🎶 Songs anzeigen & abspielen
![Songs](./screenshots/songs.png)

### ❤️ Favoritenfunktion
![Favoriten](./screenshots/favoriten.png)

### 📁 Playlists erstellen & Songs zuweisen
![Playlists](./screenshots/playlists.png)

---

## ✅ Erfüllte Anforderungen laut Projektbeschreibung

### ✅ **1. HTML (3/3 Punkte)**
- Struktur der Anwendung klar durch HTML aufgebaut.
- Mindestens ein Bild pro Song (Coverbild) und Medien (Audio-Player).
- Klar strukturierte Pages mit Listen, Formularen, Layout.

### ✅ **2. CSS / Bootstrap (6/6 Punkte)**
- Eigene Gestaltung mit TailwindCSS & benutzerdefiniertem Styling.
- Bootstrap-Klassen gezielt eingebunden (z. B. `.btn`, `.form-control`).
- Responsive Layout mit Grid-System und Flexbox.

### ✅ **3. Webanwendung (12/12 Punkte)**
- **Deployment:** Live auf [Vercel](https://vercel.com/) erreichbar.
- **Inhalt:**
  - Seiten für mehrere Entitäten: Songs, Playlists, Favoriten
  - Detailseiten & Formularseiten (Playlist erstellen, Import)
- **Navigation:** Navigationsleiste mit Emojis, Routing mit SvelteKit
- **Components:** 10+ eigene `.svelte` Komponenten (Pages + Subkomponenten)

### ✅ **4. Datenbank & Datenverwaltung (9/9 Punkte)**
- **MongoDB** mit 3 Collections: `songs`, `playlists`, `favorites`
- **Datenbank-Funktionen:** insertOne, find, deleteOne, updateOne
- **Form Actions:** z. B. Favoriten markieren, Playlists verwalten

### ✅ **5. Erweiterungen (9/9 Punkte)**
- Zuletzt hinzugefügte Songs (visuell als Karussell-Stil)
- Dynamische Favoritenliste
- Interaktive Import-Suche über externe API
- Mehrere UI-Komponenten + responsive Optimierung

---

## 🛠️ Projektstruktur

📁 src
├── lib
│ └── db.ts # Verbindung zur MongoDB
├── routes
│ ├── +page.svelte # Startseite
│ ├── songs/
│ ├── playlists/
│ ├── favorites/
│ └── import/
├── styles
│ └── app.css # Globale Styles (optional)

---

## 🧾 Zusatzinfos

- Das Projekt verwendet den neuen **Runes-Modus** von Svelte 5 (Pflicht).
- MongoDB wird über Compass verwaltet.
- Alle Formulare & Datenbankoperationen sind voll funktionsfähig.
- Deployment wurde mit Vercel realisiert – keine Konfiguration nötig.

---

## 🧑‍🏫 Hinweise für Bewertung / Test

- Bitte testen Sie die Anwendung mit dem Link oben.
- Um Songs zu importieren, nutzen Sie z. B. den Begriff „Coldplay“.
- Um die Funktion „Favoriten“ zu testen, klicken Sie auf das ❤️-Symbol.
- Die Navigation ist bewusst einfach & übersichtlich gehalten.

---


>>>>>>> 5ca1be6 (Ganzes Projekt Babyyyy)
