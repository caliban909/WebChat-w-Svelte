<!--
    This module handles the login screen and username choice
-->
<script lang="ts">
    import Color from "./Color.svelte";
    export let username: string | null;
    export let color: string | null;
    let user = "";
    let clr = "";

    function submit() {
        username = user;
        if (clr == "") {
            color = "#d5005d";
        } else {
            color = clr;
        }
    }
</script>

<div class="container">
    <span style="font-size: 2.5rem;">please enter your username and preferred color</span><br/><br/>
    <input bind:value={user} maxlength="30" placeholder="Username" />
    <Color {color}/>
    <button on:click={submit}>confirm</button><br/>
    <img alt="lazor" src="lazor-dude.gif" />
</div>

<style lang="scss">
    .container {
        color: #ff3e00;
        font-size: 2rem;
        font-weight: 500;
        user-select: none;
    }
</style>
