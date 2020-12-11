<script>
  import allRecipes from "./_allRecipes";

  import { fade } from "svelte/transition";
</script>

<style>
  ul {
    padding-left: 0;
    display: table;
    border-collapse: separate;
    border-spacing: 0 1.3rem;
  }
  li {
    list-style-type: none;
    font-size: 120%;
    display: table-row;
  }

  li::before {
    content: "☕ ";
    display: table-cell;
    padding-right: 0.25rem;
  }
</style>

<svelte:head>
  <title>Coffee Coach – Home</title>
</svelte:head>

<ul in:fade={{ delay: 100 }}>
  {#each allRecipes as page}
    <li><a rel="prefetch" href={page.slug}>{page.title}</a></li>
  {/each}
  <!-- `rel=prefetch` attribute tells Sapper to load the data for the page as soon as the user hovers over the link or taps it-->
</ul>
