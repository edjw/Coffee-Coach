<script>
  import {
    waterAmount,
    coffeeAmount,
  } from "../../components/aeropress-by-hasbean/aeropressStore";

  let dilutionAmount;
  $: dilutionAmount = Math.round(($waterAmount / 2.5) * 1) / 1;
</script>

<style>
  ol {
    padding-left: 0;
  }
  li {
    list-style-position: inside;
  }
</style>

<ol>
  <li>
    With an inverted Aeropress, pour in the
    {$coffeeAmount}g of the coffee
  </li>
  <li>Pour in all {$waterAmount}g of the water</li>
  <li>Stir for 10 seconds</li>
  <li>Steep for 30 seconds</li>
  <li>Plunge</li>
  <li>Optionally, dilute with up to {dilutionAmount}g of water</li>
</ol>
