<script>
  import Recipe from "../../components/Recipe.svelte";

  import Ingredients from "../../components/Ingredients.svelte";

  import Steps from "../../components/pourover-by-scott-rao/pouroverScottRaoSteps.svelte";

  import GrindSize from "../../components/GrindSize.svelte";

  import * as store from "../../components/pourover-by-scott-rao/pouroverScottRaoStore.js";

  import { grindSize } from "../../components/pourover-by-scott-rao/pouroverScottRaoStore.js";

  let recipe = { name: "Pourover by Scott Rao" };
</script>

<Recipe {...recipe}>
  <div slot="ingredients">
    <Ingredients {store} />
  </div>
  <div slot="grind">
    <GrindSize {grindSize} />
  </div>
  <div slot="steps">
    <Steps />
  </div>
  <div slot="notes">
    <p>
      This is a recipe simplified from
      <a href="https://www.youtube.com/watch?v=BjsGf3R9mc0">Scott Rao's video '<i>Updated
          manual pourover technique!</i></a>.'
    </p>

    <p>It uses a ratio of 20g coffee to 340g water (1 to 17).</p>
  </div>
</Recipe>
