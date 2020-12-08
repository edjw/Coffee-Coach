<script>
  import Recipe from "../../components/Recipe.svelte";

  import Ingredients from "../../components/Ingredients.svelte";

  import Steps from "../../components/clever-by-james-hoffman/cleverSteps.svelte";

  import * as store from "../../components/clever-by-james-hoffman/cleverStore";

  let recipe = { name: "Clever Dripper by James Hoffman" };
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
      This is a recipe simplified from
      <a href="https://www.youtube.com/watch?v=RpOdennxP24">James Hoffman's
        video '<i>The Ultimate Clever Dripper Guide</i></a>.'
    </p>

    <p>It uses a ratio of 15g coffee to 250g water (1 to 16.67).</p>
  </div>
</Recipe>
