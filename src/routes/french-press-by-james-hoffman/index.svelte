<script>
  let name = "French Press by James Hoffman";

  import { frenchPress } from "../../components/store.js";

  let {
    waterAsMultipleOfCoffee,
    waterAmount,
    coffeeAmount,
    grindSize,
    currentCalculator,
  } = frenchPress;

  import Recipe from "../../components/Recipe.svelte";
</script>

<Recipe {name} {...frenchPress}>
  <div slot="steps">
    <li>Pour in the coffee and all {$waterAmount}g of the water</li>
    <li>Let it sit for 4 minutes</li>
    <li>Stir the crust. Scoop up the foam and coffee bits off the top</li>
    <li>Wait for 5-8 minutes</li>
    <li>Push the plunger down to just to underneath the surface</li>
    <li>Pour gently and carefully</li>
  </div>
  <div slot="notes">
    <p>
      This is a recipe simplified from
      <a href="https://www.youtube.com/watch?v=st571DYYTR8">James Hoffman's
        video '<i>The Ultimate French Press Technique</i></a>.'
    </p>

    <p>It uses a ratio of 30g coffee to 500g water (1 to 16.67).</p>
  </div>
</Recipe>
