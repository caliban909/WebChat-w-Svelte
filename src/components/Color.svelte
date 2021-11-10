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

<!--html-->
<div class="container">
    {#each colors as [cl, name]}
        {name} <button class="cell" on:click="{() => color = cl}" /><br />
    {/each}
</div>


<style lang="scss">
    .container{
        display: flex;
        justify-content: space-evenly;
    }
    .cell{
        height: 2rem;
        width: 2rem;
    }
</style>
