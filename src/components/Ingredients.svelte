<script>
  export let store;

  let {
    waterAmount,
    coffeeAmount,
    waterAsMultipleOfCoffee,
    currentCalculator,
  } = store;

  import { fade } from "svelte/transition";

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
</style>

{#if $currentCalculator === 'coffeeFirst'}
  <section id="{$currentCalculator}Calculator" in:fade={{ delay: 100 }}>
    <label for="coffeeAmount">
      How many <strong>grams of coffee grounds</strong> do you want to use?
    </label>
    <input
      type="number"
      inputmode="decimal"
      name="coffeeAmount"
      id="coffeeAmount"
      min="0"
      bind:value={$coffeeAmount} />
    <button id="startWithWater" on:click={toggleCalculator}>
      Start with water instead ⟳
    </button>
  </section>
{:else if $currentCalculator === 'waterFirst'}
  <section id="{$currentCalculator}Calculator" in:fade={{ delay: 100 }}>
    <label for="waterAmount">
      How many <strong>grams of water</strong> do you want to use?
    </label>
    <input
      type="number"
      inputmode="decimal"
      name="waterAmount"
      id="waterAmount"
      min="0"
      bind:value={$waterAmount} />
    <button id="startWithCoffee" on:click={toggleCalculator}>
      Start with coffee instead ⟳
    </button>
  </section>
{/if}
