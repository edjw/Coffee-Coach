<script>
  let name = "Clever Dripper by James Hoffman";

  import { clever } from "../../components/store.js";

  let {
    waterAsMultipleOfCoffee,
    waterAmount,
    coffeeAmount,
    grindSize,
    currentCalculator,
  } = clever;

  import Recipe from "../../components/Recipe.svelte";
</script>

<Recipe {name} {...clever}>
  <div slot="steps">
    <li>Pour in all {$waterAmount}g of the water</li>
    <li>Pour in all {$coffeeAmount}g of the coffee</li>
    <li>Stir and let it steep for 2 minutes</li>
    <li>Break the crust with a stir</li>
    <li>Leave for 30 seconds to settle</li>
    <li>Place on the cup to release the coffee</li>
  </div>
  <div slot="notes">
    <p>
      This is a recipe simplified from
      <a href="https://www.youtube.com/watch?v=RpOdennxP24">James Hoffman's
        video '<i>The Ultimate Clever Dripper Guide</i></a>.'
    </p>

    <p>It uses a ratio of 15g coffee to 250g water (1 to 16.67).</p>
  </div>
</Recipe>
