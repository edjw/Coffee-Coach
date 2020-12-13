<script>
  export let name;
  export let waterAmount;
  export let coffeeAmount;
  export let waterAsMultipleOfCoffee;
  export let currentCalculator;
  export let grindSize;

  import { fade } from "svelte/transition";

  import Ingredients from "./Ingredients.svelte";

  import GrindSize from "./GrindSize.svelte";
</script>

<style>
  ol {
    padding-left: 0;
  }
  ol :global(li) {
    list-style-position: inside;
  }
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
  <Ingredients
    {waterAmount}
    {coffeeAmount}
    {waterAsMultipleOfCoffee}
    {currentCalculator} />
</section>

<section in:fade={{ delay: 200 }}>
  <h3>Grind</h3>
  <p>Save your preferred grind size for this recipe</p>
  <GrindSize {grindSize} />
</section>

<section in:fade={{ delay: 200 }}>
  <h3>Steps</h3>
  <!-- <Steps /> -->
  <ol>
    <slot name="steps" />
  </ol>
</section>

<section in:fade={{ delay: 300 }}>
  <h3>Notes</h3>
  <slot name="notes" />
</section>
