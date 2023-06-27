<script lang="ts">
    import Vingette from "./Vingette.svelte";

    export let title: string = "";
    export let body: string = "";

    const closeModal = () => {
        window.document.getElementsByClassName("modal")[0].remove();
        window.document.getElementsByClassName("vingette")[0].remove();
    }
</script>

<div class="modal">
    {#if title}
        <h2>{title}</h2>3
    {/if}
    <p>{body}</p>
    <button on:click={closeModal}>Close</button>
</div>
<Vingette />

<style>
    .modal {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        padding: .5rem;
        background: #f5f5f5;
        border: 3px solid #adcb74;
        border-radius: 20px;
        box-shadow: 0 0 10px black;
        width: 25vw;
        height: 25vh;
        min-width: 300px;
        min-height: 220px;
        z-index: 99;
    }

    .modal h2 {
        font-size: 2rem;
    }

    .modal p {
        font-size: 1.5rem;
        text-align: center;
    }

    .modal button {
        font-size: 1.3rem;
        padding: 13px;
        border-color: #ff9a42;
    }

    .modal button:hover {
        background: #ff9a42;
    }
</style>