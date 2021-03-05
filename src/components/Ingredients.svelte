<script>
  export let waterAmount;
  export let coffeeAmount;
  export let waterAsMultipleOfCoffee;
  export let currentCalculator;

  import { blur } from "svelte/transition";

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

  import Button from "./Button.svelte";
</script>

<style>
  input {
    display: block;
    margin-top: 1rem;
    width: 100px;
  }
</style>

{#if $currentCalculator === 'coffeeFirst'}
  <section id="{$currentCalculator}Calculator" in:blur={{ delay: 100 }}>
    <label for="coffeeAmount">
      How many
      <strong>grams of coffee grounds</strong>
      do you want to use?
    </label>
    <input
      type="number"
      inputmode="decimal"
      name="coffeeAmount"
      id="coffeeAmount"
      min="0"
      bind:value={$coffeeAmount} />
    <p>
      Use
      <strong>{#if Number.isNaN($waterAmount)}
          0g
        {:else}{secondIngredientAmount}g{/if}</strong>
      of water.
    </p>
    <Button id="startWithWater" clickAction={toggleCalculator}>
      Start with water ⟳
    </Button>
  </section>
{:else if $currentCalculator === 'waterFirst'}
  <section id="{$currentCalculator}Calculator" in:blur={{ delay: 100 }}>
    <label for="waterAmount">
      How many
      <strong>grams of water</strong>
      do you want to use?
    </label>
    <input
      type="number"
      inputmode="decimal"
      name="waterAmount"
      id="waterAmount"
      min="0"
      bind:value={$waterAmount} />
    <p>
      Use
      <strong>{#if Number.isNaN($waterAmount)}
          0g
        {:else}{secondIngredientAmount}g{/if}</strong>
      of coffee grounds.
    </p>
    <Button id="startWithCoffee" clickAction={toggleCalculator}>
      Start with coffee ⟳
    </Button>
  </section>
{/if}
