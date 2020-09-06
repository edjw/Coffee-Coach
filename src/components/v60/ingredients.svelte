<script>
  import { fade } from "svelte/transition";

  import {
    waterAmount,
    coffeeAmount,
    waterAsMultipleOfCoffee,
    currentCalculator,
  } from "./v60store.js";

  const toggleCalculator = () => {
    if ($currentCalculator === "waterFirst") {
      currentCalculator.set("coffeeFirst");
    } else if ($currentCalculator === "coffeeFirst") {
      currentCalculator.set("waterFirst");
    }
  };

  let firstIngredientAmount;
  let secondIngredientAmount;

  $: {
    if ($currentCalculator === "coffeeFirst") {
      firstIngredientAmount = $coffeeAmount;
      secondIngredientAmount =
        Math.round(firstIngredientAmount * $waterAsMultipleOfCoffee * 10) / 10;

      coffeeAmount.set(firstIngredientAmount);
      waterAmount.set(secondIngredientAmount);
    } else if ($currentCalculator === "waterFirst") {
      firstIngredientAmount = $waterAmount;
      secondIngredientAmount =
        (Math.round(firstIngredientAmount / $waterAsMultipleOfCoffee) * 10) /
        10;

      waterAmount.set(firstIngredientAmount);
      coffeeAmount.set(secondIngredientAmount);
    }
  }
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

{#if $currentCalculator === 'coffeeFirst'}
  <section id="startWithCoffeeCalculator" in:fade>
    <ol>
      <li>
        <label for="coffeeAmount">
          How many <strong>grams of coffee grounds</strong> do you want to use?
        </label>
      </li>
      <input
        type="number"
        inputmode="decimal"
        name="coffeeAmount"
        id="coffeeAmount"
        min="0"
        bind:value={$coffeeAmount} />

      <li id="waterAmount">
        Use <strong>{#if $coffeeAmount === undefined || isNaN($waterAmount)}
            0g
          {:else}{secondIngredientAmount}g{/if}</strong> of water.
      </li>
    </ol>
    <button id="startWithWater" on:click={toggleCalculator}>
      Start with water instead ⟳
    </button>
  </section>
{:else if $currentCalculator === 'waterFirst'}
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
        Use <strong>{#if isNaN($waterAmount)}
            0g
          {:else}{secondIngredientAmount}g{/if}</strong> of coffee grounds.
      </li>
    </ol>

    <button id="startWithCoffee" on:click={toggleCalculator}>
      Start with coffee instead ⟳
    </button>
  </section>
{/if}
