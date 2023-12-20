<svelte:head>
    <title>{name}</title>
</svelte:head>

<script lang="ts">
    import {page} from "$app/stores"
    import {goto} from "$app/navigation"
    import Icon from "svelte-awesome"
    import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse"

    export let name: string = ""
</script>

<div class="w-full h-12 text-3xl text-white bg-gray-800 border border-gray-700 rounded-t-xl shrink-0 relative">
    {#if $page.url.pathname !== "/"}
        <button on:click={() => goto("/")} class="top-0 left-0 w-12 h-12 flex justify-center items-center cursor-pointer absolute p-2 hover:opacity-75">
            <Icon data={faHouse} class="w-6 h-6" />
        </button>
    {/if}
    <div class="top-1/2 left-1/2 w-fit h-auto -translate-x-1/2 -translate-y-1/2 absolute">{name}</div>
</div>

<div class="w-full h-[calc(100%-48px)] custom-scrollbar">
    <slot />
</div>

<style>
    div.custom-scrollbar {
        overflow-x: hidden;
        overflow-y: auto;
    }

    div.custom-scrollbar::-webkit-scrollbar {
        width: 10px;
    }

    div.custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
    }

    div.custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: rgb(31, 41, 55);
    }

    div.custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: rgb(55, 65, 81);
    }
</style>
