<script async lang="ts">
    import { assets } from "$app/paths";
    import { page } from "$app/stores";
    import Icon from "$lib/components/Icon.svelte";
    // import Login from "$lib/components/Login.svelte";
    // import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
</script>

<nav>
    <div>
        <a href="/"><img src="{assets}/favicon.png" alt="logo" /></a>
        <div>
            <a href="/test" class="{$page.url.pathname === '/test' ? 'active' : ''}">Test</a>
            <a href="/learn" class="{$page.url.pathname === '/learn' ? 'active' : ''}">Learn</a>
        </div>
    </div>
    <!-- TODO: Make this section of the nav actually work??? -->
    <!-- <div>
        <Login />
        <ThemeSwitcher />
    </div> -->
</nav>

<main>
    <slot />
</main>

<footer>
    <div>
    </div>
    <div>
        <h3>Made with 🧡 by Gabby</h3>
    </div>
    <div class="socials-container">
        <a href="https://github.com/pogriella/mandarin-helper" target="_blank"><Icon name="github2" /></a>
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
    }

    :global(svg) {
        fill: #000;
    }

    :global(svg):hover {
        fill: #ff9a42;
    }
</style>