document.getElementById('btn').addEventListener('click', Exibir);

function Exibir() {
  const result = document.querySelector('#result');
  const number = parseInt(document.querySelector('#number').value.replace(",", "."), 10);
  const nfloat = parseFloat(document.querySelector('#number').value.replace(",", "."));

  if (isNaN(number) || nfloat - number) {
    alert('Valor inválido');
    return false;
  }

  switch (number) {
    case 0:
      result.textContent = 'Número inteiro escolhido: zero';
      break;
    case 1:
      result.textContent = 'Número inteiro escolhido: um';
      break;
    case 2:
      result.textContent = 'Número inteiro escolhido: dois';
      break;
    case 3:
      result.textContent = 'Número inteiro escolhido: três';
      break;
    case 4:
      result.textContent = 'Número inteiro escolhido: quatro';
      break;
    case 5:
      result.textContent = 'Número inteiro escolhido: cinco';
      break;
    case 6:
      result.textContent = 'Número inteiro escolhido: seis';
      break;
    case 7:
      result.textContent = 'Número inteiro escolhido: sete';
      break;
    case 8:
      result.textContent = 'Número inteiro escolhido: oito';
      break;
    case 9:
      result.textContent = 'Número inteiro escolhido: nove';
      break;
    case 10:
      result.textContent = 'Número inteiro escolhido: dez';
      break;
    default:
      result.textContent = 'Número inteiro escolhido inválido';
  }
}
