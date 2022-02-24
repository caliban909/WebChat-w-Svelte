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
        //updates users array to server users array
        socket.on("users", function(users_){
            users = users_;
        })
        users = [username,...users];
    });
</script>


<div class="info">
    <div>
        <img class="inthe" alt="inthe" src="inthe.gif">
    </div>
    <span style="color: #ff3e00; font-size: 1.5rem; font-weight: 600; border-bottom: 4px solid #404EED;">Users:</span>
    <div class="register">
        {#each users as user}
        <span style="color: {user.color};">{user.username}</span><br>
        {/each}
    </div>
</div>


<style lang="scss">
    .info {
        background-color: #0f0f24;
        height: 43.9rem;
        width: 22.5rem;
        margin-right: 1em;
        display: flex;
        border: solid 10px #404EED;
        border-radius: 5px;
        flex-direction: column;
            .inthe {
            border-bottom: solid 5px #404EED;
            width: 22.5rem;
            }
    }
    .register{
        font-size: 1.5rem;
        font-weight: 600;
        overflow: auto;
    }


    //Scrollbar

    ::-webkit-scrollbar {
        width: 7px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: white; 
        border-radius: 50px;
    }

    ///* Handle on hover */
    //::-webkit-scrollbar-thumb:hover {
    //    background: var(--color); 
    //}
    
    //Scrollbar end
    /*.icon{
        height: 1.5rem;
        width: 1.5rem;
    }*/
</style>