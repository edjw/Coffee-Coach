<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { fade } from "svelte/transition";

  const toggleCalculator = () => {
    dispatch("togglecalculator");
  };

  export let waterAsMultipleOfCoffee;

  let coffeeAmount = 15;

  $: waterAmount = Math.round(coffeeAmount * waterAsMultipleOfCoffee * 10) / 10;
</script>

<style>
  input {
    width: 100px;
    display: block;
  }
</style>

<section id="startWithCoffeeCalculator" in:fade>

  <label for="coffeeAmount">
    1. How many
    <strong>grams of coffee</strong>
    do you want to use?
  </label>
  <input
    type="number"
    inputmode="decimal"
    name="coffeeAmount"
    id="coffeeAmount"
    bind:value={coffeeAmount} />

  <p id="waterAmount">
    2. Then use
    <strong>{waterAmount}g</strong>
    of water.
  </p>

  <button id="startWithWater" on:click={toggleCalculator}>
    Start with water instead
  </button>
</section>
