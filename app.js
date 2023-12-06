const cronometro = document.getElementById('cronometro');
const botonIniciarPausar = document.getElementById('boton-iniciar-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
  segundos++;

  if(segundos / 60 ===1){
    segundos = 0;
    minutos++;

    if(minutos / 60 === 1){
      minutos = 0;
      horas++;
    }
  }

  const segundosFormato = asignarFormato(segundos);
  const minutosFormato = asignarFormato(minutos);
  const horasFormato = asignarFormato(horas);

  cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`;

}

function asignarFormato(unidadDeTiempo){
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}

botonIniciarPausar.addEventListener('click', function(){
  if(estadoCronometro === 'pausado'){
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonIniciarPausar.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonIniciarPausar.classList.remove('iniciar');
    botonIniciarPausar.classList.add('pausar');
    estadoCronometro = 'Activo';
  }else {
    window.clearInterval(intervaloDeTiempo);
    botonIniciarPausar.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonIniciarPausar.classList.remove('pausar');
    botonIniciarPausar.classList.add('iniciar');
    
    estadoCronometro = 'pausado';
  }
});

botonReiniciar.addEventListener('click', function(){
  window.clearInterval(intervaloDeTiempo);
  
  segundos = 0;
  minutos = 0;
  horas = 0;

  cronometro.innerText = '00:00:00';

  botonIniciarPausar.innerHTML = '<i class="bi bi-play-fill"></i>';
  botonIniciarPausar.classList.remove('pausar');
  botonIniciarPausar.classList.add('iniciar');
  
  estadoCronometro = 'pausado';
}); 