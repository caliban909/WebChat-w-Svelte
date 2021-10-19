<!--
    This module handles user-register
-->
<script lang="ts">
    import { onMount } from 'svelte';

    export let username: string|null;
    export let color: string|null;

    let users = [];
    $: usersSorted = users.sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()));
    onMount(() => {
        users = [username,...users];
    })
</script>


<div class="info">
    <div>
        <img class="nyan" alt="nyan" src="nyan-cat.gif">
    </div>
    <span style="color: #ff3e00; font-size: 1.5rem; font-weight: 600;">Users:</span>
    <div class="register">
        {#each usersSorted as user}
        <span style="{"color: " + color + ";"}">{user}</span><br>
        {/each}
    </div>
</div>


<style lang="scss">
    .info {
        background-color: #1e1e1c;
        height: 35rem;
        display: flex;
        flex-direction: column;
    }
    .register{
        font-size: 1.5rem;
        font-weight: 600;
        overflow: auto;
    }
</style>