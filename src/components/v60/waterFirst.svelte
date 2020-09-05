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

  $: newCoffeeAmount =
    Math.round(($waterAmount / $waterAsMultipleOfCoffee) * 10) / 10;

  $: coffeeAmount.set(newCoffeeAmount);
</script>

<style>
  input {
    display: block;
    margin-top: 1rem;
    width: 100px;
  }

  ol {
    padding-left: 0;
  }

  li {
    margin-top: 1.5rem;
    list-style-position: inside;
  }
</style>

<section id="startWithWaterCalculator" in:fade>
  <ol>
    <li>
      <label for="waterAmount">
        How many <strong>grams of water</strong> do you want to use?
      </label>
    </li>
    <input
      type="number"
      inputmode="decimal"
      name="waterAmount"
      id="waterAmount"
      bind:value={$waterAmount} />

    <li id="coffeeAmount">
      Then use <strong>{$coffeeAmount}g</strong> of coffee.
    </li>
  </ol>

  <button id="startWithCoffee" on:click={toggleCalculator}>
    Start with coffee instead ⟳
  </button>
</section>
