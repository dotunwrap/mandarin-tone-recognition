<script>
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import Icon from "$lib/components/Icon.svelte";

    const toggleTheme = () => onMount(() => window.document.body.classList.toggle("dark-mode"));
</script>

{#if browser}
    {#if !window.document.body.classList.contains("dark-mode")}
        <Icon name="sun" on:click={toggleTheme} />
    {:else}
        <Icon name="moon" on:click={toggleTheme}/>
    {/if}
{/if}