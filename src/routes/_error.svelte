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
  {#if status === 500}
    <h3>The app broke!</h3>
    <p>
      Sorry about that. This is <a
        href="https://github.com/edjw/Coffee-Coach/issues/1">a known bug</a>.
    </p>
    <p>
      Avoid refreshing or closing the webpage with the first ingredient input
      box empty. That's what causes the app to break.
    </p>

    <p>Click the 'Reset app' button to make the app work again.</p>

    <button on:click={clearLocalStorage}>Reset app</button>
    <!-- This is a hack to get around a bug where if you reload the page with an input empty, it saves undefined or NaN to local storage then can't work out important data from that. -->
  {:else}
    <h3>{status}</h3>

    <p>{error.message}</p>

    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}
  {/if}
</main>
