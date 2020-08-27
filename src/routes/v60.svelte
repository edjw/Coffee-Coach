<script>
  import CoffeeFirst from "../components/coffeeFirst.svelte";
  import WaterFirst from "../components/waterFirst.svelte";

  let currentCalculator = "coffeeFirst";
  let waterAsMultipleOfCoffee = 16.66666666666667;
  // This is equivalent to 30g coffee to 500g water (500 ÷ 30 = 16.67)

  const toggleCalculator = () => {
    if (currentCalculator === "coffeeFirst") {
      currentCalculator = "waterFirst";
    } else if (currentCalculator === "waterFirst") {
      currentCalculator = "coffeeFirst";
    }
  };

  let recipeName = "James Hoffman's v60 recipe";
</script>

<style>
  section {
    margin-top: 2rem;
  }
</style>

<svelte:head>
  <title>Coffee Coach – {recipeName}</title>
</svelte:head>

<h3>{recipeName}</h3>

<section>

  {#if currentCalculator === 'coffeeFirst'}
    <CoffeeFirst
      on:togglecalculator={toggleCalculator}
      {waterAsMultipleOfCoffee} />
  {:else if currentCalculator === 'waterFirst'}
    <WaterFirst
      on:togglecalculator={toggleCalculator}
      {waterAsMultipleOfCoffee} />
  {/if}
</section>
