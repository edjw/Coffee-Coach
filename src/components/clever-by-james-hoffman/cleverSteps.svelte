<script>
  import { waterAmount } from "../../components/clever-by-james-hoffman/cleverStore.js";
  import { coffeeAmount } from "../../components/clever-by-james-hoffman/cleverStore.js";
</script>

<style>
  ol {
    padding-left: 0;
  }
  li {
    list-style-position: inside;
  }
  li:nth-child(n + 2) {
    margin-top: 1rem;
  }
</style>

<ol>
  <li>Pour in all {$waterAmount}g of the water</li>
  <li>Pour in all {$coffeeAmount}g of the coffee</li>
  <li>Stir and let it steep for 2 minutes</li>
  <li>Break the crust with a stir</li>
  <li>Leave for 30 seconds to settle</li>
  <li>Place on the cup to release the coffee</li>
</ol>
