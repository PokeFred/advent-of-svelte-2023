<script lang="ts">
    import type {PageServerData} from "./$types"

    export let data: PageServerData
</script>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Tally</th>
        </tr>
    </thead>
    <tbody>
        {#await data.data}
            <div>Loading</div>
        {:then data}
            {#each data as element}
                <tr>
                    <td>{element.name}</td>
                    <td>{element.tally}</td>
                </tr>
            {/each}
        {:catch error}
            <div>Error: {JSON.stringify(error)}</div>
        {/await}
    </tbody>
</table>