<script>
  import Recipe from "../../components/Recipe.svelte";

  import Ingredients from "../../components/Ingredients.svelte";

  import Steps from "../../components/v60-by-james-hoffman/v60Steps.svelte";

  import * as store from "../../components/v60-by-james-hoffman/v60store";

  let recipe = { name: "v60 by James Hoffman" };
</script>

<Recipe {...recipe}>
  <div slot="ingredients">
    <Ingredients {store} />
  </div>
  <div slot="steps">
    <Steps />
  </div>
  <div slot="notes">
    <p>
      This is a recipe simplified from <a
        href="https://www.youtube.com/watch?v=AI4ynXzkSQo">James Hoffman's video
        '<i>The Ultimate V60 Technique</i></a>.'
    </p>

    <p>It uses a ratio of 30g coffee to 500g water (1 to 16.67).</p>
  </div>
</Recipe>
