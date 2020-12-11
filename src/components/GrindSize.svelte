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
      <button on:click={showSetGrindSize}>Set grind</button>
    {/if}
  </p>
  {#if $grindSize && grindSizeSaved}
    <button on:click={showSetGrindSize}>Change grind</button>
  {/if}

  {#if setGrindSizeShown}
    <input
      type="text"
      id="grind-size-input"
      placeholder="Add your preferred grind size(s)"
      bind:value={$grindSize} />
    <button id="grind-size-save" on:click={saveGrindSize}>Save</button>
  {/if}
</section>
