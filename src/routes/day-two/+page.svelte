<script lang="ts">
    import LayoutTemplate from "$components/LayoutTemplate.svelte"

    let counter: number = 0;

    function add(): void {
        counter++
    }

    function remove(): void {
        if (counter === 0) return
        counter--
    }

    function reset(): void {
        counter = 0
    }
</script>

<LayoutTemplate name="Day 02">
    <div class="p-4">
        <div class="my-2 text-3xl">Cookies: {counter}</div>
        <div><button on:click={add} class="my-2 w-fit h-auto text-xl bg-green-700 rounded-xl px-4">Add</button></div>
        <div><button on:click={remove} class="my-2 w-fit h-auto text-xl bg-blue-700 rounded-xl px-4">Remove</button></div>
        <div><button on:click={reset} class="my-2 w-fit h-auto text-xl bg-red-700 rounded-xl px-4">Reset</button></div>
    </div>
</LayoutTemplate>
