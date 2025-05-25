<script lang="ts">
  const { data }: { data: { favorites: any[] } } = $props();
</script>

<h1 class="text-2xl font-bold mb-4">❤️ Favoriten</h1>

{#if data.favorites.length > 0}
  <div class="grid">
    {#each data.favorites as song}
      <div class="card">
        <strong>{song.titel}</strong> – {song.künstler}
        <img src={song.cover_url} alt="Cover" class="mt-2 w-full rounded" />
        <audio controls class="w-full mt-2">
          <source src={song.audio_url} type="audio/mpeg" />
        </audio>

        
        <form method="POST" class="mt-3">
          <input type="hidden" name="id" value={song._id} />
          <button type="submit" formaction="?/delete" class="btn btn-red">
            🗑️ Löschen
          </button>
        </form>
      </div>
    {/each}
  </div>
{:else}
  <p>Keine Favoriten gespeichert.</p>
{/if}

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .card {
    background-color: #181818;
    padding: 1rem;
    border-radius: 0.75rem;
    color: white;
  }

  .btn.btn-red {
    background-color: #e63946;
    color: white;
    padding: 0.4rem 0.75rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .btn.btn-red:hover {
    background-color: #ff4d4d;
  }
</style>
