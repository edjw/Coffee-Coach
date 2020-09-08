<script>
  import Titles from "../components/Titles.svelte";

  import { fade } from "svelte/transition";
</script>

<style>
  main {
    max-width: 56rem;
    padding: 1rem 2rem;
    margin: 0 auto;
  }

  div {
    margin-top: 2rem;
  }
</style>

<main transition:fade={{ delay: 100 }}>
  <Titles />
  <div>
    <slot />
  </div>
</main>
