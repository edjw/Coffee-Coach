<script>
  let name = "v60 by James Hoffman";

  import { v60 } from "../../components/store.js";

  let {
    waterAsMultipleOfCoffee,
    waterAmount,
    coffeeAmount,
    grindSize,
    currentCalculator,
  } = v60;

  const toOneDecimalPlace = (number) => {
    return Math.round(number * 10) / 10;
  };

  $: minimumBloom = toOneDecimalPlace($coffeeAmount * 2);

  $: maximumBloom = toOneDecimalPlace($coffeeAmount * 3);

  $: firstPour = toOneDecimalPlace($waterAmount * 0.6);

  $: totalPour = toOneDecimalPlace($waterAmount);

  import Recipe from "../../components/Recipe.svelte";
</script>

<Recipe {name} {...v60}>
  <div slot="steps">
    <li>
      <i>0 - 45s</i>: Pour the bloom with
      <strong
        >{#if $coffeeAmount === undefined || Number.isNan($waterAmount)}
          0g (maximum 0g) of water
        {:else}{minimumBloom}g (maximum {maximumBloom}g) of water{/if}
      </strong>
    </li>
    <li>
      <i>45s - 1m15s</i>: Pour again until you've poured
      <strong
        >{#if $coffeeAmount === undefined || Number.isNan($waterAmount)}
          0g of water
        {:else}{firstPour}g of water{/if}</strong
      >
    </li>
    <li>
      <i>1m15s - 1m45s</i>: Pour again until you've poured a final
      <strong
        >total of
        {#if $coffeeAmount === undefined || Number.isNan($waterAmount)}
          0g
        {:else}{totalPour}g{/if}</strong
      >
    </li>
    <li>Give it a stir once one way, then once the other way</li>
    <li>After the water has drained away a bit, give it a swirl</li>
  </div>
  <div slot="notes">
    <p>
      This is a recipe simplified from
      <a href="https://www.youtube.com/watch?v=AI4ynXzkSQo"
        >James Hoffman's video '<i>The Ultimate V60 Technique</i></a
      >.'
    </p>

    <p>It uses a ratio of 30g coffee to 500g water (1 to 16.67).</p>
  </div>
</Recipe>
