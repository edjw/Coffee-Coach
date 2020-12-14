<script>
    export let id;
    export let clickAction;
    export let type = undefined;
</script>

<style>
    button {
        /* -webkit-appearance: button; */
        background-color: #ffffff;
        border: 1px solid #333;
        cursor: pointer;
        padding: 0.5rem;
        font-size: 1rem;
        line-height: 1;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    button:hover,
    button:focus {
        background-color: #fcfcfc;
    }

    button:focus {
        outline: 1px solid #fcfcfc;
        outline-offset: -4px;
    }

    button:active {
        transform: scale(0.99);
    }
</style>

<button {id} on:click={clickAction} {type}><slot /></button>
