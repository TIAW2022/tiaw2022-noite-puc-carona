var btn = document.getElementById("clicker");
var gpsOn = document.getElementById("gpsOn");
btn.onclick = function () {
  if (btn.value === "gpsOn") {
    btn.innerHTML = "<h1>Cancelar Carona</h1>";
    btn.value = "gpsOff";
    gpsOn.src =
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15009.530029469295!2d-43.93892873078231!3d-19.866063904366985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0xa69ac3c5437e8f%3A0xaf89be1db1ea54e6!2sPUC%20Minas%20S%C3%A3o%20Gabriel%20-%20Rua%20Walter%20Ianni%2C%20255%20-%20S%C3%A3o%20Gabriel%2C%20Belo%20Horizonte%20-%20MG%2C%2031980-110!3m2!1d-19.859405499999998!2d-43.9189307!4m5!1s0xa69a62f352e7b7%3A0xea5a87b5813d4dc3!2sAvenida%20Jos%C3%A9%20Cleto%20-%20Santa%20Cruz%2C%20Belo%20Horizonte%20-%20MG%2C%2031155-290!3m2!1d-19.872337299999998!2d-43.9415925!5e0!3m2!1spt-BR!2sbr!4v1671123469879!5m2!1spt-BR!2sbr";
  } else {
    gpsOn.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.5400445289206!2d-43.9189307!3d-19.859405499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69ac3c5437e8f%3A0xaf89be1db1ea54e6!2sPUC%20Minas%20S%C3%A3o%20Gabriel!5e0!3m2!1spt-BR!2sbr!4v1671200399065!5m2!1spt-BR!2sbr";
    btn.value = "gpsOn";
    btn.innerHTML = "<h1>Buscar Carona</h1>";
  }
};
