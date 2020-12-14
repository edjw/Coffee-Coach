<script>
  export let grindSize;
  let setGrindSizeShown = false;
  let grindSizeSaved = false;

  if (grindSize != "") {
    grindSizeSaved = true;
  }

  function showSetGrindSize() {
    setGrindSizeShown = true;
    grindSizeSaved = false;
  }

  // This isn't DRY but is easier to understand imo
  function saveGrindSize() {
    setGrindSizeShown = false;
    grindSizeSaved = true;
  }

  import Button from "./Button.svelte";
</script>

<style>
  input::placeholder {
    font-size: 80%;
  }
</style>

<section>
  <p>
    <i>Grind size</i>:
    {#if $grindSize && !setGrindSizeShown}
      <strong>{$grindSize}</strong>
    {:else if !setGrindSizeShown}
      <Button clickAction={showSetGrindSize}>Set grind</Button>
    {/if}
  </p>
  {#if $grindSize && grindSizeSaved}
    <Button clickAction={showSetGrindSize}>Change grind</Button>
  {/if}

  {#if setGrindSizeShown}
    <input
      type="text"
      id="grind-size-input"
      placeholder="Add your preferred grind size(s)"
      bind:value={$grindSize} />
    <Button id="grid-size-save" clickAction={saveGrindSize} type="submit">
      Save
    </Button>
  {/if}
</section>
