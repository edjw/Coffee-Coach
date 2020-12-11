<script>
  import {
    waterAmount,
    coffeeAmount,
  } from "../../components/pourover-by-scott-rao/pouroverScottRaoStore";

  const toOneDecimalPlace = (number) => {
    return Math.round(number * 10) / 10;
  };

  $: bloom = toOneDecimalPlace($coffeeAmount * 3);

  // This looks like a magic number and it kind of is. It's 240/310
  $: firstPour = toOneDecimalPlace($waterAmount * 0.6176470588235294);

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
</style>

<!-- bloom 60 1st 210 total 2nd 340 17 to 1 -->
<ol>
  <li>
    <i>0 - 45s</i>: Pour the bloom with
    <strong>{#if $coffeeAmount === undefined || isNaN($waterAmount)}
        0g (maximum 0g) of water
      {:else}{bloom}g of water{/if}.
    </strong>
    Give it a spin.
  </li>
  <li>
    <i>45s</i>: Pour again until you've poured
    <strong>{#if $coffeeAmount === undefined || isNaN($waterAmount)}
        0g of water
      {:else}{firstPour}g of water{/if}</strong>
  </li>
  <li>
    <i>When half of the water has drained</i>: Pour again until you've poured a
    final
    <strong>total of
      {#if $coffeeAmount === undefined || isNaN($waterAmount)}
        0g
      {:else}{totalPour}g{/if}</strong>
  </li>
</ol>
