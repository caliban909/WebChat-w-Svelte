<!--
    This module handles the login screen and username choice
-->
<script lang="ts">
    import { onMount } from "svelte";
    import Color from "./Color.svelte";
    import { onDestroy } from "svelte";

    export let socket: any;
    export let username: string | null;
    export let color: string | null;
    export let colors: [string, string][] = [
        ["#0fbddf", "Blue"],
        ["#9fdf9f", "Green"],
        ["#8cd9c6", "Turquoise"],
        ["#af9fdf", "Purple"],
        ["#df9f9f", "Pink"],
        ["goldenrod", "Gold"],
        ["blueviolet", "Nice"],
    ]

    let user = "";

    //code to be executed when module is loaded
    onMount(() => {
        //picks a random color on load
        color = color ?? colors[Math.floor(Math.random() * colors.length)][0];
        //adding event listener
        window.addEventListener("keyup", submitEvent);
    })

    //code to be executed when module is unloaded
    onDestroy(() => {
        //removing event listener
        window.removeEventListener("keyup", submitEvent);
    })

    //function handles username/color selection and sends it to websocket
    function submit() {
        if (user.replace(/\s+/g,'').length < 2) return;
        user = user.trim().replace(/\s+/g, ' ');
        username = user;
        let data = {
            username: username,
            color: color,
            message: user + " joined"
        }
        socket.emit("add user", data);
    }

    //function for event listener || keybind
    function submitEvent(event){
        if(event.key === "Enter"){
            submit();
        }
    }
</script>


<div class="container">
    <span style="font-size: 2.5rem;">please enter your username and choose your preferred color</span><br/><br/>
    <input bind:value={user} maxlength="30" placeholder="Username" />
    <div><Color bind:color/></div>
    <img alt="lazor" src="lazor-dude.gif" /><br />
    <button id="confirm" on:click={submit}>confirm</button>
</div>


<style lang="scss">
    img{
        margin-top: 1rem;
    }
    .container {
        color: #ff3e00;
        font-size: 2rem;
        font-weight: 500;
        user-select: none;
    }
    #confirm {
        color: ghostwhite;
        background-color: #202124;
        padding: 1rem;       
    }
    //moin
</style>
