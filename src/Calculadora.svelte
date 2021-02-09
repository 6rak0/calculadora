<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  let tot = null
  let lab = null
  let mat = null
  let hon = null
  let isr = null

  function calcular() {
    const efectivo = (tot - lab - mat - hon - isr).toFixed(2)
    const izettle = (tot - tot * 0.0406 - lab - mat - hon - isr).toFixed(2)
    const tresMeses = (tot - tot * 0.0814 - lab - mat - hon - isr).toFixed(2)
    const seisMeses = (tot - tot * 0.1162 - lab - mat - hon - isr).toFixed(2)
    const nueveMeses = (tot - tot * 0.151 - lab - mat - hon - isr).toFixed(2)
    const doceMeses = (tot - tot * 0.1914 - lab - mat - hon - isr).toFixed(2)
    const totales = {
      efectivo,
      izettle,
      tresMeses,
      seisMeses,
      nueveMeses,
      doceMeses,
    }
    dispatch('calculos', totales)
  }
</script>

<form on:submit|preventDefault={calcular}>
  <label>total</label>
  <h2>$<input type="number" bind:value={tot} /></h2>
  <label>laboratorio</label>
  <h2>$<input type="number" bind:value={lab} /></h2>
  <label>material</label>
  <h2>$<input type="number" bind:value={mat} /></h2>
  <label>honorarios</label>
  <h2>$<input type="number" bind:value={hon} /></h2>
  <label>isr</label>
  <h2>$<input type="number" bind:value={isr} /></h2>
  <button>calcular</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    margin: 2px;
    padding: 2px;
  }
  input {
    background-color: var(--background);
    border: none;
    border-bottom: 2px solid var(--button);
    font-size: 1.5rem;
    border-radius: 0;
    color: var(--paragraph);
  }
  button {
    background-color: var(--button);
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px;
    color: var(--button-text);
    font-size: 1.5rem;
  }
  label {
    width: 70%;
    text-align: right;
  }
</style>
