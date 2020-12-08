<script>
  import Titles from "../components/Titles.svelte";

  import { fade } from "svelte/transition";
</script>

<style>
  main,
  footer {
    max-width: 56rem;
    padding: 0 2rem 1rem 3rem;
    /* margin: 0 auto; */
  }

  footer {
    border-top: 1px solid #333;
    margin-top: 2rem;
    padding-top: 1rem;
  }

  div {
    margin-top: 2rem;
  }
</style>

<Titles />

<main transition:fade={{ delay: 100 }}>
  <div>
    <slot />
  </div>
</main>

<footer transition:fade={{ delay: 300 }}>
  <a href="https://github.com/edjw/Coffee-Coach/">See the source for this
    website</a>
</footer>
