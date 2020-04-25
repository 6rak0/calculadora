<script>
    import Calculadora from './Calculadora.svelte'

    let data = [];

    function desplegarResultados(e){
        const totales = e.detail;
        data = [totales];        
	}
</script>

<style>
    p{
        text-align: center;
        font-size: 20px;
    }
    div{
        max-width: 80%;
        margin: 10px auto;
    }
    table{
        font-size: 1.3em;
        color: var(--headline);
        padding-top: 20px;
        width: 100%;
        text-align: center;
    }
</style>

<Calculadora on:calculos={desplegarResultados}/>
{#each data as totales}
<div>
    <table>
        <tr>
            <td>efectivo</td>
            <td>${totales.efectivo}</td>
        </tr>
        <tr>
            <td>terminal</td>
            <td>${totales.terminal}</td>
        </tr>
        <tr>
            <td>3 meses</td>
            <td>${totales.tresMeses}</td>
        </tr>
        <tr>
            <td>6 meses</td>
            <td>${totales.seisMeses}</td>
        </tr>
        <tr>
            <td>9 meses</td>
            <td>${totales.nueveMeses}</td>
        </tr>
        <tr>
            <td>12 meses</td>
            <td>${totales.doceMeses}</td>
        </tr>
    </table>
</div>
{:else}
    <p>ingresa los datos</p>
{/each}