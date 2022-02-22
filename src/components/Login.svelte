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
    <div class="balken">&nbsp;</div>
    <div class="box">
        <input bind:value={user} maxlength="30" placeholder="Username" style="--color: {color}"/>
        <button id="confirm" on:click={submit}>confirm</button>
    </div>
    <div><Color bind:color/></div>
</div>
<footer>
    <div class="tabelle">
        <ul>
            <li>

            </li>
        </ul>
    </div>
        <div class="bild">
            <img alt="lazor" src="lazor-dude.gif" /><br />
        </div>
</footer>


<style lang="scss">
    img{
        border: solid 5px #43B581;
        border-radius: 50px;
        margin-bottom: 25px;
    }
    input {
        background: #0D0D1E;
        border: solid 5px #43B581;
        border-radius: 30px;
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
    .balken {
        background: #404EED;
        height: 5px;
        padding: 0;
        margin-bottom: 3%;
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
        background-color: #0D0D1E;
        border: solid 5px #43B581;
        border-radius: 30px;       
        color: #43B581;
        font-weight: bold;
        outline-style: none;
        padding: 1rem;
        width: 28.85rem;
        margin-top: 1%;
    }
    footer{
        background: #404EED;
        padding: 0;
        margin-top: 79px;
    }
    .tabelle {
        font-size: 20px;
        color: ghostwhite;
        font-weight: bold;
    }

    //moin
</style>
