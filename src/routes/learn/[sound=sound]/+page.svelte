<script>
    import { page } from "$app/stores";
    import { toneMap } from "$lib/tones";
    export let sound = toneMap($page.params.sound);
</script>

<h1>{sound}</h1>