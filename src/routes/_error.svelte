<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
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
</main>
