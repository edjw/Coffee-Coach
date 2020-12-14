<script>
  import Titles from "../components/Titles.svelte";

  import { fade } from "svelte/transition";
</script>

<style>
  :global(#sapper) {
    height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header" "main" "footer";
    max-width: 56rem;
    margin: 0 auto;
  }

  :global(#sapper) > header {
    grid-area: header;
  }

  :global(#sapper) > main {
    grid-area: main;
  }

  :global(#sapper) > footer {
    grid-area: footer;
  }

  header,
  main,
  footer {
    padding: 1rem 2rem 1rem 3rem;
  }

  footer {
    border-top: 1px solid #333;
    margin-top: 2rem;
  }

  :global(main > * + *),
  :global(section > * + *) {
    margin-top: 1rem;
  }
</style>

<header>
  <Titles />
</header>

<main transition:fade={{ delay: 100 }}>
  <slot />
</main>

<footer transition:fade={{ delay: 300 }}>
  <a href="https://github.com/edjw/Coffee-Coach/">See the source for this
    website</a>
</footer>
