<script>
  import { waterAmount, coffeeAmount } from "./v60store.js";

  const toOneDecimalPlace = (number) => {
    return Math.round(number * 10) / 10;
  };

  $: minimumBloom = toOneDecimalPlace($coffeeAmount * 2);

  $: maximumBloom = toOneDecimalPlace($coffeeAmount * 3);

  $: firstPour = toOneDecimalPlace($waterAmount * 0.6);

  $: secondPour = toOneDecimalPlace($waterAmount * 0.4);

  $: totalPour = toOneDecimalPlace($waterAmount);
</script>

<style>
  ol {
    padding-left: 0;
  }

  li {
    margin-top: 1rem;
    list-style: none;
  }

  li:nth-child(n + 2) {
    border-top: 1px solid #333;
    padding-top: 1rem;
  }
</style>

<ol>
  <li>
    <i>0 - 45s</i>: Pour a bloom of <strong>{#if $coffeeAmount === undefined || isNaN($waterAmount)}
        0g (maximum 0g) of water
      {:else}{minimumBloom}g (maximum {maximumBloom}g) of water{/if}
    </strong>
  </li>
  <li>
    <i>45s - 1m15s</i>: Pour until you've poured in a total of <strong>{#if $coffeeAmount === undefined || $waterAmount === undefined}
        0g of water
      {:else}{firstPour}g of water{/if}</strong>
  </li>
  <li>
    <i>1m15s - 1m45s</i>: Pour a further {#if $coffeeAmount === undefined || $waterAmount === undefined}
      0g of water
    {:else}{secondPour}g of water{/if} for a <strong>total of {#if $coffeeAmount === undefined || $waterAmount === undefined}0g{:else}{totalPour}g{/if}</strong>
  </li>
</ol>
