<script>
  let name = "Aeropress by Hasbean";

  import { aeropress } from "../../components/store.js";

  let {
    waterAsMultipleOfCoffee,
    waterAmount,
    coffeeAmount,
    grindSize,
    currentCalculator,
  } = aeropress;

  let dilutionAmount;
  $: dilutionAmount = Math.round(($waterAmount / 2.5) * 1) / 1;

  import Recipe from "../../components/Recipe.svelte";
</script>

<Recipe {name} {...aeropress}>
  <div slot="steps">
    <li>
      With an inverted Aeropress, pour in the
      {$coffeeAmount}g of the coffee
    </li>
    <li>Pour in all {$waterAmount}g of the water</li>
    <li>Stir for 10 seconds</li>
    <li>Steep for 30 seconds</li>
    <li>Plunge</li>
    <li>Optionally, dilute with up to {dilutionAmount}g of water</li>
  </div>

  <div slot="notes">
    <p>
      This is a recipe slightly adapted from
      <a href="https://www.hasbean.co.uk/pages/aeropress-brew-guide">Hasbean's
        recipe '<i> Aeropress Brew Guide </i></a>.'
    </p>

    <p>
      This recipe uses a ratio of 15g coffee to 220g of water (1 to 14.67).
      Hasbean's recipe uses a ratio of 17g coffee to 250g water (1 to 14.7) but
      250g is too tricky to easily fit in an Aeropress.
    </p>
  </div>
</Recipe>
