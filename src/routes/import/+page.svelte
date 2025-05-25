<script lang="ts">
  const { data }: { data: { results: any[] } } = $props();

  let searchTerm = '';
</script>

<h1 class="text-2xl font-bold mb-4">⬇️ iTunes-Import</h1>

<form method="GET" class="import-form">
  <input
    name="q"
    bind:value={searchTerm}
    placeholder="🔍 Künstler oder Titel suchen..."
    class="input"
  />
  <button type="submit" class="btn">Suchen</button>
</form>

{#if data.results.length > 0}
  <h2 class="text-xl font-semibold mt-6 mb-3">Suchergebnisse</h2>
  <div class="grid">
    {#each data.results as result}
      <div class="card">
        <strong>{result.trackName}</strong> – {result.artistName}<br />
        <img src={result.artworkUrl100} alt="Cover" width="100" class="rounded mt-2" />
        <audio controls src={result.previewUrl} class="w-full mt-2"></audio>

        <form method="POST" class="mt-3">
          <input type="hidden" name="titel" value={result.trackName} />
          <input type="hidden" name="künstler" value={result.artistName} />
          <input type="hidden" name="cover_url" value={result.artworkUrl100} />
          <input type="hidden" name="audio_url" value={result.previewUrl} />
          <button type="submit" class="btn btn-green">➕ In Datenbank speichern</button>
        </form>
      </div>
    {/each}
  </div>
{/if}

<style>
  .import-form {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .input {
    flex: 1;
    padding: 0.75rem;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
  }

  .btn {
    background-color: #333;
    color: white;
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }

  .btn:hover {
    background-color: #555;
  }

  .btn-green {
    background-color: #1db954;
    color: black;
  }

  .btn-green:hover {
    opacity: 0.9;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .card {
    background-color: #181818;
    padding: 1rem;
    border-radius: 0.75rem;
    color: white;
  }
</style>
