<!--
    This module handles user-register
-->
<script lang="ts">
    import { onMount } from 'svelte';

    export let username: string|null;
    export let socket: any;

    //initialising local users array
    let users = [];
    
    //code to be executed when module is loaded
    onMount(() => {
        socket.on("users", function(users_){
            console.log("test");
            users = users_;
        })
        users = [username,...users];
    });
</script>


<div class="info">
    <div>
        <img class="nyan" alt="nyan" src="nyan-cat.gif">
    </div>
    <span style="color: #ff3e00; font-size: 1.5rem; font-weight: 600;">Users:</span>
    <div class="register">
        {#each users as user}
        <span style="color: {user.color};">{user.username}</span><br>
        {/each}
    </div>
</div>


<style lang="scss">
    .info {
        background-color: #202124;
        height: 35rem;
        display: flex;
        flex-direction: column;
    }
    .register{
        font-size: 1.5rem;
        font-weight: 600;
        overflow: auto;
    }
    /*.icon{
        height: 1.5rem;
        width: 1.5rem;
    }*/
</style>