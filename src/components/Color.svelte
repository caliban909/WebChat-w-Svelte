<script lang="ts">
import { each } from "svelte/internal";

  export let color: string | null;
  export let colors: [string, string][] = [
    ["#0fbddf", "Blue"],
    ["#9fdf9f", "Green"],
    ["#8cd9c6", "Turquoise"],
    ["#af9fdf", "Purple"],
    ["#df9f9f", "Pink"],
    ["goldenrod", "Gold"],
    // ["blueviolet", "Nice"],
  ];

	$: pair = colors.find((cl) => cl[0] === color);
</script>

<div class="selector-box">
	{#if pair != null && pair.length == 2}
		<span style="color: {pair[0]};">{pair[1]}</span>
	{/if}
	<div class="tray">
		{#each colors as [cl, name]}
			<div class="cell {color === cl ? 'active' : ''}" on:click="{() => color = cl}" style="background: {cl};"></div>
		{/each}
	</div>
</div>

<style lang="scss">
.selector-box {
	font-size: 20px;
	display: inline-flex;
	flex-direction: column;
	background: #1e1e2f;
	border: solid 1px rgb(138, 138, 138);
	border-radius: 4px;
	
	& > span {
		padding: 0.5em;
		padding-bottom: 0;
	}
}

.tray {
	display: inline-flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 1em 1.25em;
	padding-top: 0.5em;
}

.cell {
	position: relative;
	width: 1em;
	height: 1em;
	border-radius: 100%;
	margin: 0.5em 0.25em;
	border: solid transparent 0.2em;
	transition: 0.25s;
}

.active {
	border: solid white 0.2em;
}

</style>
