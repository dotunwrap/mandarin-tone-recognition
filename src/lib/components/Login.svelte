<script lang="ts">
    import Icon from "./Icon.svelte";
    import { browser } from "$app/environment";

    const showDropdown = () => {
        window.document.getElementById("login-container")?.classList.remove("hide");
    }
</script>

{#if browser}
    <Icon name="user" color={window.document.body.classList.contains("dark-mode") ? "#f5f5f5" : "#000"} clickable on:click={showDropdown} />
{/if}

<div id="login-container" class="hide">
    <h2>Login</h2>
    <div>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
    </div>
</div>

<style>
    .hide {
        display: none;
    }

    #login-container:not(.hide) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        z-index: 99;
        position: absolute;
        top: 8.3%;
        right: 0%;
        background-color: #f5f5f5;
        padding: 1rem;
    }

    #login-container>div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }
</style>