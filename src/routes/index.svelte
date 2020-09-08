<script>
  import allRecipes from "./_allRecipes";
</script>

<style>
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
    font-size: 120%;
    margin-top: 1rem;
  }
</style>

<svelte:head>
  <title>Coffee Coach – Home</title>
</svelte:head>

<ul>
  {#each allRecipes as page}
    <li><a rel="prefetch" href={page.slug}>{page.title}</a></li>
  {/each}
  <!-- `rel=prefetch` attribute tells Sapper to load the data for the page as soon as the user hovers over the link or taps it-->
</ul>
