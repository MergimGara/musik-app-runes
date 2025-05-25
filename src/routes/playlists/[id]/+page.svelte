<script lang="ts">
  const { data }: { data: { playlist: any; songs: any[]; allSongs: any[] } } = $props();
</script>

<h1 class="text-2xl font-bold mb-2">{data.playlist.name}</h1>
<p class="mb-6">{data.playlist.beschreibung}</p>

<h3 class="text-xl mt-8 mb-4">🎵 Songs hinzufügen</h3>
<div class="song-grid">
  {#each data.allSongs as song}
    <div class="song-card">
      {#if song.cover_url}
        <img src={song.cover_url} alt="Cover" class="cover" />
      {/if}
      <div class="info">
        <strong>{song.titel}</strong><br />
        <small>{song.künstler}</small>
        <form method="POST">
          <input type="hidden" name="songId" value={song._id} />
          <button type="submit" formaction="?/addSong" class="btn">➕</button>
        </form>
      </div>
    </div>
  {/each}
</div>

<h3 class="text-xl mt-10 mb-4">🎶 Songs in dieser Playlist</h3>

{#if data.songs.length > 0}
  <div class="playlist-song-list">
    {#each data.songs as song}
      <div class="playlist-song">
        <div class="text-info">
          <strong>{song.titel}</strong><br />
          <small>{song.künstler}</small>
          {#if song.audio_url}
            <audio controls class="mt-2 w-full">
              <source src={song.audio_url} type="audio/mpeg" />
            </audio>
          {/if}

          <!-- Entfernen-Button -->
          <form method="POST" class="mt-2">
            <input type="hidden" name="songId" value={song._id} />
            <button type="submit" formaction="?/removeSong" class="btn-remove">
              🗑️ Entfernen
            </button>
          </form>
        </div>

        {#if song.cover_url}
          <img src={song.cover_url} alt="Cover" class="small-cover" />
        {/if}
      </div>
    {/each}
  </div>
{:else}
  <p>Keine Songs in dieser Playlist.</p>
{/if}

<style>
  .playlist-song-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .playlist-song {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #181818;
    padding: 1rem;
    border-radius: 0.5rem;
    color: white;
  }

  .text-info {
    flex: 1;
    margin-right: 1rem;
  }

  .small-cover {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
</style>

