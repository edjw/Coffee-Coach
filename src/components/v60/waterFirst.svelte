<script>
  import { fade } from "svelte/transition";

  import {
    waterAmount,
    coffeeAmount,
    waterAsMultipleOfCoffee,
    currentCalculator,
  } from "./v60store.js";

  const toggleCalculator = () => {
    currentCalculator.set("coffeeFirst");
  };

  $: newCoffeeAmount =
    (Math.round($waterAmount / $waterAsMultipleOfCoffee) * 10) / 10;

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
      min="0"
      bind:value={$waterAmount} />

    <li id="coffeeAmount">
      Use <strong>{#if $coffeeAmount === undefined}0{:else}{$coffeeAmount}{/if}g</strong>
      of coffee grounds.
    </li>
  </ol>

  <button id="startWithCoffee" on:click={toggleCalculator}>
    Start with coffee instead ⟳
  </button>
</section>
