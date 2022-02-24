<!--
    This module handles color selections
-->

<script lang="ts">
    export let color: string | null;
    export let colors: [string, string][] = [
        

        ["#00ffbf", "Turquoise"],
        ["#34FF01", "Green"],
        ["#0198FF", "Blue"],
        ["blueviolet", "Nice"],
        ["#ff1a8c", "Pink"],
        ["#FF0000", "Red"],
        ["goldenrod", "Gold"],
    ];

    $: pair = colors.find((cl) => cl[0] === color);
</script>


<div class="container">
    {#if pair != null && pair.length == 2}
        <span style="color: {pair[0]};">{pair[1]}</span>
    {/if}
    <div class="tray">
        {#each colors as [cl, name]}
            <div class="cell {color === cl ? 'active' : ''}" on:click="{() => color = cl}" style="background: {cl};"></div>
        {/each}
    </div>

</div>


<style lang="scss">
    .container{
        font-size: 20px;
        font-weight: bold;
        display: inline-flex;
        flex-direction: column;
        background: #0f0f24;
        border: solid 5px;
        border-radius: 17.5px;
        & > span {
            padding: 0.5em;
            padding-bottom: 0;;
        }
    }
    .tray{
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1em 1.25em;
        padding-top: 0.5em;
    }
    .cell{
        position: relative;
        width: 1em;
        height: 1em;
        border-radius: 100%;
        margin: 0.5em 0.25em;
        border: solid transparent 0.2em;
        transition: 0.25s;
    }
    .active{
        border: solid white 0.2em;
    }
</style>
