<script>
  import Recipe from "../../components/Recipe.svelte";

  import Ingredients from "../../components/Ingredients.svelte";

  import Steps from "../../components/aeropress-by-hasbean/aeropressSteps.svelte";

  import * as store from "../../components/aeropress-by-hasbean/aeropressStore";

  let recipe = { name: "Aeropress by Hasbean" };
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
      This is a recipe slightly adapted from
      <a href="https://www.hasbean.co.uk/pages/aeropress-brew-guide">Hasbean's
        recipe '<i> Aeropress Brew Guide </i></a>.'
    </p>

    <p>
      This recipe uses a ratio of 15g coffee to 220g of water (1 to 14.67).
      Hasbean's recipe uses a ratio of 17g coffee to 250g water (1 to 14.7) but
      250g is too tricky to easily fit in an Aeropress.
    </p>
  </div>
</Recipe>
