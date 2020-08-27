<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { fade } from "svelte/transition";

  const toggleCalculator = () => {
    dispatch("togglecalculator");
  };

  export let waterAsMultipleOfCoffee;
  let waterAmount = 250;

  $: coffeeAmount =
    Math.round((waterAmount / waterAsMultipleOfCoffee) * 10) / 10;
</script>

<style>
  input {
    width: 100px;
    display: block;
  }
</style>

<section id="startWithWaterCalculator" in:fade>

  <label for="waterAmount">
    1. How many
    <strong>grams of water</strong>
    do you want to use?
  </label>
  <input
    type="number"
    inputmode="decimal"
    name="waterAmount"
    id="waterAmount"
    bind:value={waterAmount} />

  <p id="coffeeAmount">
    2. Then use
    <strong>{coffeeAmount}g</strong>
    of coffee.
  </p>

  <button id="startWithCoffee" on:click={toggleCalculator}>
    Start with coffee instead
  </button>
</section>
