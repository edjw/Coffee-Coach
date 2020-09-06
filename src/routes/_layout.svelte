<script>
  import Titles from "../components/Titles.svelte";
</script>

<style>
  main {
    max-width: 56rem;
    padding: 1rem 2rem;
    margin: 0 auto;
  }
</style>

<main>
  <Titles />

  <slot />
</main>
