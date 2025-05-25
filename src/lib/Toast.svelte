<script lang="ts">
  const { message, show, timeout = 3000 } = $props<{
    message: string;
    show: boolean;
    timeout?: number;
  }>();

  let visible = false;

  $effect(() => {
    if (show) {
      visible = true;
      setTimeout(() => (visible = false), timeout);
    }
  });
</script>

{#if visible}
  <div class="toast">
    {message}
  </div>
{/if}

<style>
  .toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #1db954;
    color: black;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-weight: bold;
    z-index: 9999;
  }
</style>
