<a href="/playlists/new" class="btn">➕ Neue Playlist</a>

<script lang="ts">
  const { data }: { data: { playlists: any[] } } = $props();
</script>

<h1 class="text-3xl font-bold mb-6">📁 Playlists</h1>

<div class="grid">
  {#each data.playlists as playlist}
    <a class="card" href={`/playlists/${playlist._id}`}>
      <h2>{playlist.name}</h2>
      <p>{playlist.beschreibung}</p>
    </a>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .card {
    background-color: #181818;
    padding: 1.5rem;
    border-radius: 1rem;
    color: white;
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .card:hover {
    background-color: #1db954;
    color: black;
  }
  .btn {
  display: inline-block;
  background-color: #1db954;
  color: black;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
}

</style>


