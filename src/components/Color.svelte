<!--
    This module handles color selections
-->

<script lang="ts">
    export let color: string | null;
    export let colors: [string, string][] = [
    ["#0fbddf", "Blue"],
    ["#9fdf9f", "Green"],
    ["#8cd9c6", "Turquoise"],
    ["#af9fdf", "Purple"],
    ["#df9f9f", "Pink"],
    ["goldenrod", "Gold"],
    ["blueviolet", "Nice"],
    ];
</script>


<div class="container">
    {#each colors as [cl, name]}
        <span class="cell" on:click="{() => color = cl}" style="background-color : {cl}">{name}</span><br />
    {/each}
</div>


<style lang="scss">
    .container{
        display: flex;
        justify-content: space-evenly;
    }
    .cell{
        color: ghostwhite;
        height: 3rem;
        width: 10rem;
    }
</style>
