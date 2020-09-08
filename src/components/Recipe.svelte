<script>
  export let name;
</script>

<style>
  h2 {
    display: inline;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    padding: 14px 16px 16px 0;
  }

  section {
    margin-top: 3rem;
    max-width: 60ch;
  }
</style>

<svelte:head>
  <title>Coffee Coach – {name}</title>
</svelte:head>

<h2>{name}</h2>

<section>
  <h3>Ingredients</h3>
  <slot name="ingredients" />
</section>

<section>
  <h3>Pouring</h3>  
  <slot name="pour-amounts" />
</section>

<section>
  <h3>Notes</h3>
  <slot name="notes" />
</section>
