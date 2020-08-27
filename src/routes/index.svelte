<script>
  import allRecipes from "./_allRecipes";
</script>

<svelte:head>
  <title>Coffee Coach – V60</title>
</svelte:head>

<ul>
  {#each allRecipes as page}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href={page.slug}>{page.title}</a>
    </li>
  {/each}
</ul>
