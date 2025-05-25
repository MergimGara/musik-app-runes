# 🎵 MusikApp – SvelteKit Projektarbeit

Willkommen zur MusikApp – einer modernen, webbasierten Anwendung zur Verwaltung von Songs, Playlists und Favoriten. Die App ist im Rahmen einer Einzelprojektarbeit mit **SvelteKit 5**, **TypeScript**, **MongoDB** und **Netlify** entstanden und bietet eine Vielzahl an Funktionen für Musikliebhaber.

## 🔗 Live-Demo

👉 [Zur deployed App](https://musik-app-runes.netlify.app/)  
👉 [Zum GitHub Repository](https://github.com/MergimGara/musik-app-runes)

---

## 📚 Inhaltsverzeichnis

- [🎯 Projektübersicht](#-projektübersicht)
- [🧠 Features](#-features)
- [📁 Dateistruktur](#-dateistruktur)
- [🧩 Datenmodell](#-datenmodell)
- [📄 Seitenübersicht](#-seitenübersicht)
- [🧱 Komponenten](#-komponenten)
- [⚙️ Technologien](#️-technologien)
- [🚀 Deployment (Netlify)](#-deployment-netlify)
- [🛠️ Lokale Installation](#️-lokale-installation)
- [📦 .env Beispiel](#-env-beispiel)

---

## 🎯 Projektübersicht

Die MusikApp ist eine kleine Musikbibliothek zum Hochladen, Verwalten und Organisieren von Songs. Benutzer können eigene Playlists erstellen, Songs als Favoriten markieren, neue Songs importieren, löschen und wiedergeben.

### Ziel:
- Interaktive Webanwendung zum Thema Musikverwaltung
- Moderne UI (in Anlehnung an Spotify)
- Vollständige Datenverwaltung über MongoDB (CRUD)

---

## 🧠 Features

✅ Songs importieren, abspielen und löschen  
✅ Songs als ❤️ Favoriten markieren  
✅ Favoriten anzeigen & entfernen  
✅ Playlists erstellen, benennen und befüllen  
✅ Erweiterte Startseite: zuletzt hinzugefügt, zuletzt favorisiert  
✅ Interaktive Toast-Komponenten bei Aktionen  
✅ Responsive Layout mit Grid/Flexbox + Spotify-Look  
✅ Komplettes Deployment via GitHub & Netlify  
✅ Vollständige Datenbankanbindung über MongoDB

---

## 📁 Dateistruktur (Auszug)

```
/src
 ├─ /routes
 │   ├─ +page.svelte              → Startseite
 │   ├─ /songs                    → Songübersicht & Favoritenbutton
 │   ├─ /favorites                → Favoritenanzeige
 │   ├─ /playlists                → Playlists + Detailseiten
 │   ├─ /playlists/new            → Neues Playlistformular
 │   └─ /import                   → Song-Importformular
 │
 ├─ /lib
 │   ├─ db.ts                     → MongoDB-Verbindung & Helper
 │   └─ Toast.svelte              → Benachrichtigungs-Komponente
 │
 └─ svelte.config.js
```

---

## 🧩 Datenmodell

### Songs

```json
{
  "_id": "ObjectId",
  "titel": "Songtitel",
  "künstler": "Künstlername",
  "audio_url": "https://...",
  "cover_url": "https://..."
}
```

### Playlists

```json
{
  "_id": "ObjectId",
  "name": "Meine Playlist",
  "beschreibung": "Beschreibung der Playlist",
  "songs": ["songId1", "songId2"]
}
```

### Favorites

Wird via `insertOne()` in eine eigene Collection gespeichert. Struktur ist identisch mit Songs.

---

## 📄 Seitenübersicht

| Seite              | Funktion                                           |
|--------------------|----------------------------------------------------|
| `/`                | Startseite mit Navigation, Highlights & Artists   |
| `/songs`           | Alle Songs anzeigen, abspielen, ❤️ markieren      |
| `/favorites`       | Favorisierte Songs verwalten                      |
| `/import`          | Songs via Formular hinzufügen                     |
| `/playlists`       | Playlists anzeigen + neue Playlist erstellen      |
| `/playlists/new`   | Neue Playlist anlegen                             |
| `/playlists/[id]`  | Playlist-Details: Songs anzeigen + hinzufügen     |

---

## 🧱 Komponenten

- **+layout.svelte**: Globale Navigation (Sidebar)
- **+page.svelte**: Für jede Route eigene Seitenstruktur
- **Toast.svelte**: Reusable Benachrichtigungs-Komponente
- **Formulare**: Import, neue Playlists, Song-Favoriten
- **CRUD Actions**: Über FormActions und MongoDB

---

## ⚙️ Technologien

- **Frontend**: [SvelteKit 5](https://kit.svelte.dev/), TypeScript
- **Styling**: CSS Grid, Flexbox, Bootstrap-Klassen
- **Backend**: MongoDB Atlas (Cloud), `mongodb` Node.js Driver
- **Deployment**: Netlify (automatisch via GitHub)

---

## 🚀 Deployment (Netlify)

Konfiguration:

```bash
npm install -D @sveltejs/adapter-netlify
```

`svelte.config.js`:

```ts
import adapter from '@sveltejs/adapter-netlify';
export default {
  kit: {
    adapter: adapter()
  }
};
```

`netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "build"
```

---

## 🛠️ Lokale Installation

```bash
git clone https://github.com/MergimGara/musik-app-runes.git
cd musik-app-runes
npm install
npm run dev
```

---

## 📦 .env Beispiel (optional)

Falls du mit Umgebungsvariablen arbeitest:

```env
DB_URI=mongodb+srv://username:password@cluster0.mongodb.net/musikapp
```

> In deinem `db.ts` wird diese Variable dann mit `process.env.DB_URI` verwendet.

---

## 📮 Kontakt

**Autor**: Mergim Gara  
**E-Mail**: garamer1@students.zhaw.ch  
**Deploy-URL**: https://musik-app-runes.netlify.app/

---

## ✅ Status

🟢 **Projekt abgeschlossen und vollständig deployt**  
🔒 Ready for submission – alle Anforderungen erfüllt ✔️

