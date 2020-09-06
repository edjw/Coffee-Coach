<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
</script>

<style>
  main {
    max-width: 56rem;
    padding: 1rem 2rem;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <title>Coffee Coach – {status}</title>
</svelte:head>

<main>
  <h3>{status}</h3>

  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}

  {#if status === 500}<button on:click={clearLocalStorage}>Reset</button>{/if}
  <!-- This is a hack to get around a bug where if you reload the page with an input empty, it saves undefined or NaN to local storage then can't work out important data from that. -->
</main>
