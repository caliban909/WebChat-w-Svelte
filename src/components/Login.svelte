<!--
    This module handles the login screen and username choice
-->
<script lang="ts">
    import { onMount } from "svelte";
    import Color from "./Color.svelte";
    import io from "./socket.io";
    import { onDestroy } from "svelte";

    export let socket: any;
    export let username: string | null;
    export let color: string | null;
    export let colors: [string, string][] = [
        ["#6832FF", "Lila"],
        ["#0198FF", "Blau"],
        ["#34FF01", "Grün"],
        ["#FF0000", "Rot"],
        ["#FF9901", "Orange"],
        ["#FFFF00", "Gelb"]
    ]

    let user = "";

    onMount(() => {
        color = color ?? colors[Math.floor(Math.random() * colors.length)][0];
        window.addEventListener("keyup", submitEvent);
    })

    onDestroy(() => {
        window.removeEventListener("keyup", submitEvent);
    })

    function submit() {
        if (user.replaceAll(/\s+/g,'').length < 2) return;
        user = user.trim().replaceAll(/\s+/g, ' ');
        username = user;
        let data = {
            username: username,
            color: color,
            message: user + " joined"
        }
        socket.emit("add user", data);
    }

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
</style>
