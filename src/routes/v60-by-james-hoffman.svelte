<script>
  import CoffeeFirst from "../components/v60/coffeeFirst.svelte";
  import WaterFirst from "../components/v60/waterFirst.svelte";
  import PourAmounts from "../components/v60/pourAmounts.svelte";

  import { currentCalculator } from "../components/v60/v60store";

  // let currentCalculator = "coffeeFirst";

  const toggleCalculator = () => {
    if ($currentCalculator === "coffeeFirst") {
      currentCalculator.set("waterFirst");
    } else if ($currentCalculator === "waterFirst") {
      currentCalculator.set("coffeeFirst");
    }
  };

  let recipeName = "v60 by James Hoffman";
</script>

<style>
  section {
    margin-top: 3rem;
    max-width: 60ch;
  }

  h2 {
    display: inline;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    padding: 14px 16px 16px 0;
  }
</style>

<svelte:head>
  <title>Coffee Coach – {recipeName}</title>
</svelte:head>

<h2>{recipeName}</h2>

<section>
  <h3>Ingredients</h3>

  {#if $currentCalculator == "coffeeFirst"}
    <CoffeeFirst on:togglecalculator={toggleCalculator} />
  {:else if $currentCalculator == "waterFirst"}
    <WaterFirst on:togglecalculator={toggleCalculator} />
  {/if}
</section>

<section>
  <h3>Pouring</h3>

  <PourAmounts />
</section>

<section>
  <h3>Notes</h3>
  <p>
    This is a recipe simplified from <a
      href="https://www.youtube.com/watch?v=AI4ynXzkSQo">James Hoffman's video '<i>The
        Ultimate V60 Technique</i></a>.'
  </p>

  <p>It uses a ratio of 30g coffee to 500g water (1 to 16.67).</p>
</section>
