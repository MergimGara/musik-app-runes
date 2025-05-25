<script>
  import '../app.css';
</script>

<style>
  .layout {
    display: flex;
    height: 100vh;
    background-color: #121212;
    color: #fff;
    font-family: 'Helvetica Neue', sans-serif;
  }

  nav {
    width: 250px;
    background-color: #000;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 4px;
  }

  nav a:hover {
    background-color: #1db954;
    color: #000;
  }

  main {
    flex-grow: 1;
    padding: 2rem;
    overflow-y: auto;
  }
</style>

<div class="layout">
  <nav>
    <h2>🎵 MusikApp</h2>
    <a href="/">🏠 Startseite</a>
    <a href="/songs">🎶 Songs</a>
    <a href="/playlists">📁 Playlists</a>
    <a href="/import">⬇️ Import</a>
    <a href="/favorites">❤️ Favoriten</a>
  </nav>

 <main class="main">
  <slot />
</main>
</div>
