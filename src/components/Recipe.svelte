<script>
  export let name;
  import { fade } from "svelte/transition";
</script>

<style>
  h2 {
    display: inline-block;
    max-width: 30ch;
    padding: 14px 16px 16px 0;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
  }

  section {
    margin-top: 2rem;
    max-width: 60ch;
  }
</style>

<svelte:head>
  <title>Coffee Coach – {name}</title>
</svelte:head>

<h2>{name}</h2>

<section in:fade={{ delay: 100 }}>
  <h3>Ingredients</h3>
  <slot name="ingredients" />
</section>

<section in:fade={{ delay: 200 }}>
  <h3>Steps</h3>
  <slot name="steps" />
</section>

<section in:fade={{ delay: 300 }}>
  <h3>Notes</h3>
  <slot name="notes" />
</section>
