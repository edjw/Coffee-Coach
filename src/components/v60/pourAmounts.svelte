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
    <i>0 - 45s</i>: Pour a bloom of <strong>between {minimumBloom}g and {maximumBloom}g
      of water
    </strong>
  </li>
  <li>
    <i>45 - 1m15s</i>: Pour water until you've poured in a total of <strong>{firstPour}g
      of water</strong>
  </li>
  <li>
    <i>1m15s - 1m45s</i>: Pour in a further {secondPour}g of water for a <strong>total
      weight of {totalPour}g</strong>
  </li>
</ol>
