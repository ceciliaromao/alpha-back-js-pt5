document.getElementById('btn').addEventListener('click', Exibir);

function Exibir() {
  const inputDate = document.querySelector("#date").value;

  if (inputDate === "") {
    alert('Por favor, informe uma data.')
    return false;
  }

  date = new Date(inputDate + ' ');
  dateIni = new Date("1970-01-01 ");

  document.querySelector("#day").textContent = 'Dia: ' + date.getDate();
  document.querySelector("#month").textContent = 'Mês: ' + (date.getMonth() + 1);
  document.querySelector("#year").textContent = 'Ano: ' + date.getFullYear();

  document.querySelector("#weekday").textContent = 'Dia da Semana: ' + getWeekday(date);
  document.querySelector("#monthName").textContent = 'Mês em português: ' + getMonthName(date);
  document.querySelector("#timestamp").textContent = 'Data em ms (ref 01/01/1970): ' + (date - dateIni);
}

function getWeekday(date) {
  let d = "";
  switch (date.getDay()) {
    case 0:
      d = 'domingo';
      break;
    case 1:
      d = 'segunda';
      break;
    case 2:
      d = 'terça';
      break;
    case 3:
      d = 'quarta';
      break;
    case 4:
      d = 'quinta';
      break;
    case 5:
      d = 'sexta';
      break;
    case 6:
      d = 'sábado';
      break;
    default:
      d = 'indefinido';
  }
  return d;
}

function getMonthName(date) {
  let n = "";
  switch (date.getMonth()) {
    case 0:
      n = 'janeiro';
      break;
    case 1:
      n = 'fevereiro';
      break;
    case 2:
      n = 'março';
      break;
    case 3:
      n = 'abril';
      break;
    case 4:
      n = 'maio';
      break;
    case 5:
      n = 'junho';
      break;
    case 6:
      n = 'julho';
      break;
    case 7:
      n = 'agosto';
      break;
    case 8:
      n = 'setembro';
      break;
    case 9:
      n = 'outubro';
      break;
    case 10:
      n = 'novembro';
      break;
    case 11:
      n = 'dezembro';
      break;
    default:
      n = 'indefinido';
  }
  return n;
}