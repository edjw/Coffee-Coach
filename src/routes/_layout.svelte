<script>
  // import Nav from '../components/Nav.svelte';
  import Titles from "../components/Titles.svelte";

  // export let segment;
</script>

<style>
  main {
    /* position: relative; */
    max-width: 56rem;
    /* background-color: white; */
    padding: 1rem 2rem;
    margin: 0 auto;
    /* box-sizing: border-box; */
  }
</style>

<!-- <Nav {segment}/> -->
<main>
  <Titles />

  <slot />
</main>
