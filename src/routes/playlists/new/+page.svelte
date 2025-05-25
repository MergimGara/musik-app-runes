<script lang="ts">
  let name = '';
  let beschreibung = '';
</script>

<h1 class="text-2xl font-bold mb-4">➕ Neue Playlist erstellen</h1>

<form method="POST" class="form">
  <label>
    Name:
    <input type="text" name="name" bind:value={name} required />
  </label>

  <label>
    Beschreibung:
    <textarea name="beschreibung" bind:value={beschreibung}></textarea>
  </label>

  <button type="submit" class="btn">🆕 Erstellen</button>
</form>

<style>
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
  }

  input, textarea {
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    width: 100%;
  }

  .btn {
    background-color: #1db954;
    color: black;
    padding: 0.75rem;
    font-weight: bold;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
  }
</style>
