<script async lang="ts">
    import { assets } from "$app/paths";
    import { page } from "$app/stores";
    import { theme } from "$lib/stores/theme";
    import { onMount } from "svelte";
    import Icon from "$lib/components/Icon.svelte";
    import { browser } from "$app/environment";

    onMount(() => theme.set("light"));
    
    const changeTheme = () => {
        if (!browser) return;
        $theme === "light" ? window.document.body.classList.remove("dark-mode") : window.document.body.classList.add("dark-mode");
        console.log($theme);
    }

    $: $theme.theme, changeTheme();
</script>

<nav>
    <div>
        <a href="/"><img src="{assets}/favicon.png" alt="logo" /></a>
        <div>
            <a href="/test" class="{$page.url.pathname === '/test' ? 'active' : ''}">Test</a>
            <a href="/learn" class="{$page.url.pathname === '/learn' ? 'active' : ''}">Learn</a>
        </div>
    </div>
    <div>
        <a href="https://github.com/pogriella/mandarin-tone-recognition" target="_blank"><Icon name="github" /></a>
        <div on:click={() => theme.set($theme === "light" ? "dark" : "light" )}>
            {#if $theme === "light"}
                <Icon name="moon" />
            {:else}
                <Icon name="sun" />
            {/if}
        </div>
    </div>
</nav>

<main>
    <slot />
</main>

<footer>
    <div class="footer-column">
    </div>
    <div class="footer-column">
        <p>Made with 🧡 by Gabby</p>
    </div>
    <div class="footer-column">
       
    </div>
</footer>

<style>
    nav {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1rem;
        background: #f5f5f5;
    }

    nav img {
        height: 3rem;
    }

    nav div {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    nav>div>div>a {
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
        font-size: 1.5rem;
        font-weight: 800;
        cursor: pointer;
        transition: .2s;
    }

    nav>div>div>a:hover {
        color: #ff9a42;
    }

    nav>div>div>a.active {
        color: #adcb74;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 82vh;
    }

    footer {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 2rem;
        background: #f5f5f5;
        text-align: center;
    }

    .footer-column {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
    }

    :global(svg) {
        fill: #000;
        transition: .2s;
        cursor: pointer;

    }

    :global(svg):hover {
        fill: #ff9a42;
    }
</style>