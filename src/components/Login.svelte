<!--
    This module handles the login screen and username choice
-->
<script lang="ts">
import { onMount } from "svelte";

    import Color from "./Color.svelte";

    export let username: string | null;
    export let color: string | null;
    export let colors: [string, string][] = [
        ["#0fbddf", "Blue"],
        ["#9fdf9f", "Green"],
        ["#8cd9c6", "Turquoise"],
        ["#af9fdf", "Purple"],
        ["#df9f9f", "Pink"],
        ["goldenrod", "Gold"],
        ["blueviolet", "Nice"]
    ]
    
    let user = "";

    onMount(() => {
        color = color ?? colors[Math.floor(Math.random() * colors.length)][0];
    })

    function submit() {
        username = user;
    }

    window.addEventListener("keyup", function(event) {
        if(event.key === "Enter"){
            submit();
        }
    })
</script>


<div class="container">
    <span style="font-size: 2.5rem;">please enter your username and choose your preferred color</span><br/><br/>
    <input bind:value={user} maxlength="30" placeholder="Username" />
    <div><Color bind:color/></div>
    <button id="confirm" on:click={submit}>confirm</button><br/>
    <img alt="lazor" src="lazor-dude.gif" />
</div>


<style lang="scss">
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
        margin-top: 1rem;
    }
</style>
