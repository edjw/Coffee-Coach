<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { fade } from "svelte/transition";

  import {
    waterAmount,
    coffeeAmount,
    waterAsMultipleOfCoffee,
  } from "./v60store.js";

  const toggleCalculator = () => {
    dispatch("togglecalculator");
  };

  // let newWaterAmount;

  $: newWaterAmount =
    Math.round($coffeeAmount * $waterAsMultipleOfCoffee * 10) / 10;

  $: waterAmount.set(newWaterAmount);
</script>

<style>
  input {
    display: block;
    margin-top: 1rem;
    width: 100px;
  }

  ol {
    padding-left: 1rem;
  }

  li {
    margin-top: 1.5rem;
  }
</style>

<section id="startWithCoffeeCalculator" in:fade>
  <ol>
    <li>
      <label for="coffeeAmount">
        How many <strong>grams of coffee</strong> do you want to use?
      </label>
    </li>
    <input
      type="number"
      inputmode="decimal"
      name="coffeeAmount"
      id="coffeeAmount"
      bind:value={$coffeeAmount} />

    <li id="waterAmount">
      Then use <strong>{newWaterAmount}g</strong> of water.
    </li>
  </ol>
  <button id="startWithWater" on:click={toggleCalculator}>
    Start with water instead ⟳
  </button>
</section>
