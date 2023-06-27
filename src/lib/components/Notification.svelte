<script lang="ts">
    export let text: string = "";
    export let color: string = "";
</script>

<div>
    <p>{text}</p>
</div>

<style>
    div {
        display: block;
        position: absolute;
        z-index: 3;
        background: #ff4248;
        left: 50%;
        top: 13%;
        transform: translate(-50%, 0);
        font-size: 1.5rem;
        border-radius: 15px;
        padding: 15px;
        color: #f5f5f5;
        box-shadow: 0px 3px 5px 0px rgba(112, 126, 127, 0.75);
        font-weight: 400;
    }
</style>