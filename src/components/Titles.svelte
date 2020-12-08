<script>
  export let title = "Coffee Coach";
  export let subtitle = "Recipes to make coffee easier";
</script>

<style>
  header {
    max-width: 56rem;
    padding: 1rem 2rem 0 3rem;
    /* margin: 0 auto; */
  }

  h1 a {
    text-decoration: none;
  }

  p {
    font-size: 105%;
    font-variant: small-caps;
    margin-top: 0.5rem;
  }
</style>

<header>
  <h1><a rel="prefetch" href="/">{title}</a></h1>
  <p>{subtitle}</p>
</header>
