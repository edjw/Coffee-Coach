<script>
  import { waterAmount, coffeeAmount } from "./v60store.js";

  const toOneDecimalPlace = (number) => {
    return Math.round(number * 10) / 10;
  };

  $: minimumBloom = toOneDecimalPlace($coffeeAmount * 2);

  $: maximumBloom = toOneDecimalPlace($coffeeAmount * 3);

  $: firstPour = toOneDecimalPlace($waterAmount * 0.6);

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
    <i>0 - 45s</i>: Pour the bloom with <strong>{#if $coffeeAmount === undefined || isNaN($waterAmount)}
        0g (maximum 0g) of water
      {:else}{minimumBloom}g (maximum {maximumBloom}g) of water{/if}
    </strong>
  </li>
  <li>
    <i>45s - 1m15s</i>: Pour again until you've poured <strong>{#if $coffeeAmount === undefined || isNaN($waterAmount)}
        0g of water
      {:else}{firstPour}g of water{/if}</strong>
  </li>
  <li>
    <i>1m15s - 1m45s</i>: Pour again until you've poured a final <strong>total
      of {#if $coffeeAmount === undefined || isNaN($waterAmount)}
        0g
      {:else}{totalPour}g{/if}</strong>
  </li>
</ol>
