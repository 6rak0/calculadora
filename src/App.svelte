<script>
	import Header from './Header.svelte'
	import Display from './Display.svelte'
</script>

<Header />
<main>
	<Display />
</main>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>