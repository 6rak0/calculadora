const form = document.querySelector('[name="datos"]');
const res = document.querySelector('.res');

function calcular(e) {
  res.removeChild(document.querySelector('table'));
  const d = e.currentTarget;
  const tot = d.tot.value;
  const lab = d.lab.value;
  const mat = d.mat.value;
  const hon = d.hon.value;
  const isr = d.isr.value;
  const html = `
    <table>
        <tr>
            <td>efectivo</td>
            <td>${(tot - lab - mat - hon - isr).toFixed(2)}</td>
        </tr>
        <tr>
            <td>terminal</td>
            <td>${(tot - tot * 0.0336 - lab - mat - hon - isr).toFixed(2)}</td>
        </tr>
        <tr>
            <td>3 meses</td>
            <td>${(tot - tot * 0.087 - lab - mat - hon - isr).toFixed(2)}</td>
        </tr>
        <tr>
            <td>6 meses</td>
            <td>${(tot - tot * 0.1218 - lab - mat - hon - isr).toFixed(2)}</td>
        </tr>
        <tr>
            <td>9 meses</td>
            <td>${(tot - tot * 0.145 - lab - mat - hon - isr).toFixed(2)}</td>
        </tr>
        <tr>
            <td>12 meses</td>
            <td>${(tot - tot * 0.1798 - lab - mat - hon - isr).toFixed(2)}</td>
        </tr>
    </table>
  `;
  res.insertAdjacentHTML('afterbegin', html);
  e.preventDefault();
}

form.addEventListener('submit', calcular);
