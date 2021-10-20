<!--
    This module handles the login screen and username choice
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import Color from './Color.svelte';

  export let username: string | null;
  export let color: string|null;
	export let colors: [string, string][] = [
    ["#0fbddf", "Blue"],
    ["#9fdf9f", "Green"],
    ["#8cd9c6", "Turquoise"],
    ["#af9fdf", "Purple"],
    ["#df9f9f", "Pink"],
    ["goldenrod", "Gold"],
		// ["blueviolet", "Nice"],
	];

  let user = "";

	onMount(() => {
		color = color ?? colors[Math.floor(Math.random() * colors.length)][0];
	});
</script>

<div class="container">
  <div class="login-container">
		<span style="font-size: 2.5rem;">
			please enter your username and preferred color
		</span>
		<input bind:value={user} minlength="4" maxlength="30" placeholder="Username" />
		<div><Color bind:colors="{colors}" bind:color="{color}"/></div>
		<button on:click={() => username = user.trim().length > 3 ? user : null}>confirm</button>
	</div>
  <img alt="lazor" src="lazor-dude.gif" />
</div>
	

<!-- <form>
    <select id="custom-select" style="color: {color};" bind:value="{color}">
			{#each colors as [cl, name]}		
				<option style="color: {cl};" value="{cl}">{name}</option>
			{/each}
    </select>
  </form> -->


<style lang="scss">
  .container {
    color: #ff3e00;
    font-size: 2rem;
    font-weight: 500;
    user-select: none;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
  }
	.login-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;& > * {
			margin-bottom: 1em;
		}
	}
  #custom-select {
    font-size: 1.5rem;
    padding: 1em 5em 1em 1.5em;
    background: #1e1e2f;
    color: #fff7d6;
    border: 0;
  }
</style>
