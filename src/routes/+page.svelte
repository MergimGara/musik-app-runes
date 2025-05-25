<script lang="ts">
const { data }: { data: { songs: any[]; favorites: any[]; recentSongs: any[] } } = $props();



  const sections = [
    { title: 'Songs', emoji: '🎶', link: '/songs' },
    { title: 'Playlists', emoji: '📁', link: '/playlists' },
    { title: 'Import', emoji: '⬇️', link: '/import' },
    { title: 'Favoriten', emoji: '❤️', link: '/favorites' }
  ];

  const artists = [
    { name: 'Lady Gaga', image: 'https://picsum.photos/id/1011/200/200' },
    { name: 'David Guetta', image: 'https://picsum.photos/id/1012/200/200' },
    { name: 'Ed Sheeran', image: 'https://picsum.photos/id/1013/200/200' },
    { name: 'Coldplay', image: 'https://picsum.photos/id/1015/200/200' },
    { name: 'Rihanna', image: 'https://picsum.photos/id/1016/200/200' }
  ];
</script>

<h1 class="text-3xl font-bold mb-6">Willkommen zur MusikApp 🎵</h1>

<div class="grid">
  {#each sections as section}
    <a class="card" href={section.link}>
      <h2>{section.emoji} {section.title}</h2>
      <p>Jetzt entdecken</p>
    </a>
  {/each}
</div>

<h2 class="section-title">🎧 Angesagte Songs</h2>
<div class="card-row">
  {#each data.songs as song}
    <div class="song-card">
      <img src={song.cover_url} alt="Cover" />
      <div class="info">
        <strong>{song.titel}</strong>
        <p>{song.künstler}</p>
      </div>
    </div>
  {/each}
</div>

<h2 class="section-title">👥 Beliebte Künstler*innen</h2>
<div class="artist-row">
  {#each artists as artist}
    <div class="artist-card">
      <img src={artist.image} alt={artist.name} />
      <p>{artist.name}</p>
    </div>
  {/each}
</div>

<h3 class="mt-6 text-lg font-semibold">❤️ Zuletzt favorisiert</h3>
<div class="card-row">
  {#each data.favorites as fav}
    <div class="song-card">
      <img src={fav.cover_url} alt="Cover" />
      <div class="info">
        <strong>{fav.titel}</strong>
        <p>{fav.künstler}</p>
      </div>
    </div>
  {/each}
</div>

<h3 class="mt-6 text-lg font-semibold">🆕 Zuletzt hinzugefügte Songs</h3>
<div class="card-row">
  {#each data.recentSongs as song}
    <div class="song-card">
      <img src={song.cover_url} alt="Cover" />
      <div class="info">
        <strong>{song.titel}</strong>
        <p>{song.künstler}</p>
      </div>
    </div>
  {/each}
</div>


<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .card {
    background-color: #181818;
    padding: 2rem;
    border-radius: 1rem;
    color: white;
    text-decoration: none;
    transition: transform 0.2s ease;
  }

  .card:hover {
    transform: scale(1.05);
    background-color: #1db954;
    color: black;
  }

  .section-title {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
  }

  .card-row {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 2rem;
  }

  .song-card {
    min-width: 180px;
    background: #1c1c1c;
    padding: 1rem;
    border-radius: 0.5rem;
    flex-shrink: 0;
    color: white;
  }

  .song-card img {
    width: 100%;
    border-radius: 0.25rem;
  }

  .info {
    margin-top: 0.5rem;
  }

  .artist-row {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 4rem;
  }

  .artist-card {
    text-align: center;
    flex-shrink: 0;
  }

  .artist-card img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #1db954;
  }

  .artist-card p {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: white;
  }
</style>
