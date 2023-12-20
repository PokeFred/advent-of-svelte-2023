<script lang="ts">
    import type {PageServerData} from "./$types"
    import LayoutTemplate from "$components/LayoutTemplate.svelte"

    export let data: PageServerData
</script>

<LayoutTemplate name="Day 01">
    <table>
        <thead>
            <tr class="w-32 h-10">
                <th class="w-32 h-10 text-center border border-y-0 border-slate-600/50 px-4">Name</th>
                <th class="w-32 h-10 text-center border border-y-0 border-slate-600/50 px-4">Tally</th>
            </tr>
        </thead>
        <tbody>
            {#await data.data}
                <div>Loading</div>
            {:then data}
                {#each data as element}
                    <tr class="w-32 h-6">
                        <td class="w-32 h-6 text-left border border-y-0 border-slate-600/50 px-4">{element.name}</td>
                        <td class="w-32 h-6 text-left border border-y-0 border-slate-600/50 px-4">{element.tally}</td>
                    </tr>
                {/each}
            {:catch error}
                <div>Error: {JSON.stringify(error)}</div>
            {/await}
        </tbody>
    </table>
</LayoutTemplate>
