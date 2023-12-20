<script lang="ts">
    import LayoutTemplate from "$components/LayoutTemplate.svelte"
    import {goto} from "$app/navigation"
</script>

<LayoutTemplate name="Home">
    <div class="p-4">
        <button on:click={() => goto("day-one")}>Day 01</button><br>
        <button on:click={() => goto("day-two")}>Day 02</button>
    </div>
</LayoutTemplate>

<style>
    button {
        @apply my-0.5 text-2xl text-slate-200 hover:text-blue-500;
    }
</style>
