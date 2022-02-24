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
        ["#00ffbf", "Turquoise"],
        ["#34FF01", "Green"],
        ["#0198FF", "Blue"],
        ["blueviolet", "Nice"],
        ["#ff1a8c", "Pink"],
        ["#FF0000", "Red"],
        ["goldenrod", "Gold"],
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
    <div class="box">
        <input bind:value={user} maxlength="30" placeholder="Username" style="--color: {color}"/>
        <button id="confirm" on:click={submit}>confirm</button>
    </div>
    <div><Color bind:color/></div>
</div>



<style lang="scss">

    input {
        background: #0f0f24;
        border: solid 5px #43B581;
        border-radius: 12.5px;
        color: var(--color);
        font-weight: bold;
        outline-style: none;
        margin-top: 1%;
        margin-right: 15%;
        
    }
    input::placeholder{
        opacity: 0.7;
        color: var(--color);
    }
    .container {
        color: #43B581;
        font-size: 2rem;
        font-weight: 500;
        user-select: none;
    }

    .box {
        display:flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
    }
    .bild {
        margin: 0;
        justify-content: left;
    }
    #confirm {
        background-color: #0f0f24;
        border: solid 5px #43B581;
        border-radius: 12.5px;       
        color: #43B581;
        font-weight: bold;
        outline-style: none;
        padding: 1rem;
        width: 28.85rem;
        margin-top: 1%;
    }

    //moin
</style>
