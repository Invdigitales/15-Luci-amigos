
let diaEvento = new Date('March 30, 2024 21:30:00').getTime();
let boton = document.querySelector("#btn")



// diaEvento = new Date().getTime() + 1_000 * 20;

let relojE = document.getElementById('reloj');

const diaM = 86_400_000;
const horaM = 3_600_000;
const minutoM = 60_000;
const segundoM = 1_000;
const ejecutarReloj = setInterval(
    () => {

        let hoy = new Date().getTime();
        let distancia = diaEvento - hoy;

        let diaR = Math.trunc(distancia / diaM);

        let horaR = Math.trunc((distancia % diaM) / horaM);

        let minutoR = Math.trunc((distancia % horaM) / minutoM);

        let segundoR = Math.trunc((distancia % minutoM) / segundoM);

        if (distancia  < 1) {
            clearInterval(ejecutarReloj);
            diaEventoAhora();
        }

        pintarElementos(diaR, horaR, minutoR, segundoR);

    }
, 1000);

let creDia = document.getElementById('cre-dia');
let creHora = document.getElementById('cre-hora');
let creMinuto = document.getElementById('cre-minuto');
let creSegundo = document.getElementById('cre-segundo');
function pintarElementos(dia, hora, minuto, segundo) {

    segundo = (segundo < 10) ? '0' + segundo : segundo;

    minuto = (minuto < 10) ? '0' + minuto : minuto;

    hora = (hora < 10) ? '0' + hora : hora;

    creDia.innerHTML = dia;
    creHora.innerHTML = hora;
    creMinuto.innerHTML = minuto;
    creSegundo.innerHTML = segundo;
}

function diaEventoAhora () {
    alert('Dia del Evento!!!');
    // Todo el codigo cuando el evento llegue
}




boton.addEventListener("click", () => {

    Swal.fire({
      title: '<strong>VER LA UBICACION<u></u></strong>',
      icon: 'success',
      html:
        'INGRESÁ' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.2807526158613!2d-62.61609061114502!3d-33.206735199999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c93af4642528a5%3A0xe02735a38a3322cf!2sHotel%20Tolentino!5e0!3m2!1ses!2sar!4v1711062632344!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
        'Podes ampliar el mapa',
        
        
    })
  });

