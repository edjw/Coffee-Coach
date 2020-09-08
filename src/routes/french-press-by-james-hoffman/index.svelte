<script>
  import Recipe from "../../components/Recipe.svelte";

  import Ingredients from "../../components/Ingredients.svelte";

  import * as store from "../../components/french-press-by-james-hoffman/frenchPressStore";

  let recipe = { name: "French Press by James Hoffman" };
</script>

<Recipe {...recipe}>
  <div slot="ingredients">
    <Ingredients {store} />
  </div>
  <div slot="pour-amounts">
    <!-- <PourAmounts /> -->
  </div>
  <div slot="notes">
    <p>
      This is a recipe simplified from <a
        href="https://www.youtube.com/watch?v=st571DYYTR8">James Hoffman's video
        '<i>The Ultimate French Press Technique</i></a>.'
    </p>

    <p>It uses a ratio of 30g coffee to 500g water (1 to 16.67).</p>
  </div>
</Recipe>
