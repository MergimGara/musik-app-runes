<script lang="ts">
  import { onMount, tick } from 'svelte';
  const { data }: { data: { songs: any[] } } = $props();

  const toastState = $state({ showToast: false, type: '', message: '' });

  onMount(async () => {
    const url = new URL(window.location.href);
    const status = url.searchParams.get('success');
    if (status === 'favorite') {
      toastState.message = '🎉 Song zu Favoriten hinzugefügt!';
    } else if (status === 'deleted') {
      toastState.message = '🗑️ Song gelöscht!';
    }
    if (toastState.message) {
      toastState.showToast = true;
      await tick();
      setTimeout(() => (toastState.showToast = false), 3000);
    }
  });
</script>

<h1 class="text-2xl font-bold mb-4">🎶 Songs</h1>

{#if toastState.showToast}
  <div class="toast">{toastState.message}</div>
{/if}

<div class="song-grid">
  {#each data.songs as song}
    <div class="song-card">
      {#if song.cover_url}
        <img src={song.cover_url} alt="Cover" />
      {/if}
      <div class="info">
        <h3>{song.titel}</h3>
        <p>{song.künstler}</p>
        {#if song.audio_url}
          <audio controls class="audio-short">
            <source src={song.audio_url} type="audio/mpeg" />
          </audio>
        {/if}

        <div class="btn-row">
          <!--  Favorit -->
          <form method="POST">
            <input type="hidden" name="id" value={song._id} />
            <button type="submit" formaction="?/favorite&success=favorite" class="btn btn-green">
              ❤️ Favorit
            </button>
          </form>

          <!--  Löschen -->
          <form method="POST">
            <input type="hidden" name="id" value={song._id} />
            <button type="submit" formaction="?/delete&success=deleted" class="btn btn-red">
              🗑️ Löschen
            </button>
          </form>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .toast {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background-color: #1db954;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    z-index: 9999;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  .song-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .song-card {
    background-color: #181818;
    padding: 1rem;
    border-radius: 0.5rem;
    color: white;
  }

  .song-card img {
    width: 100%;
    border-radius: 0.5rem;
  }

  .info {
    margin-top: 0.5rem;
  }

  .btn-row {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;
  }

  .btn {
    padding: 0.4rem 0.75rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .btn-green {
    background-color: #1db954;
    color: white;
  }

  .btn-green:hover {
    background-color: #1ed760;
  }

  .btn-red {
    background-color: #e63946;
    color: white;
  }

  .btn-red:hover {
    background-color: #ff4d4d;
  }

  .audio-short {
    width: 100%;
    height: 32px;
    margin-top: 0.5rem;
  }
</style>



