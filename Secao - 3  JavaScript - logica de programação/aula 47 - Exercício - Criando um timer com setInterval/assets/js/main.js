function cronometro() {
  function getSecondsHour(second) {
    const data = new Date(second * 1000);

    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }

  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  function iniciarRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getSecondsHour(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("iniciar")) {
      clearInterval(timer);
      relogio.classList.remove("pausado");
      iniciarRelogio();
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.classList.remove("pausado");
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
  });
}
cronometro();





  // Maneira memos performática de se fazer.
  // iniciar.addEventListener('click', function(e) {
  //     clearInterval(timer);
  //     relogio.classList.remove('pausado');
  //     iniciarRelogio();
  // })

  // pausar.addEventListener('click', function(e) {
  //     clearInterval(timer)
  //     relogio.classList.add('pausado');
  // })

  // zerar.addEventListener('click', function(e) {
  //     clearInterval(timer)
  //     // relogio.classList.remove('pausado');
  //     relogio.innerHTML = '00:00:00';
  //     segundos = 0;
  // })