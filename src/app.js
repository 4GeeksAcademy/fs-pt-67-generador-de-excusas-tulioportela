function generarYMostrarExcusa() {
  let quien = ["Mi hermana", "Mi amigo", "Mi primo", "El fontanero"];
  let accion = ["perdió", "olvidó", "confundió", "manchó"];
  let que = ["mis llaves", "mi pasaporte", "la documentación", "mi dinero"];
  let cuando = [
    "mientras bailaba",
    "durante el partido de fútbol",
    "mientras estaba de viaje",
    "en medio de una llamada importante",
    "cuando estaba ocupado con el trabajo"
  ];

  let indiceQuien = Math.floor(Math.random() * quien.length);
  let indiceAccion = Math.floor(Math.random() * accion.length);
  let indiceQue = Math.floor(Math.random() * que.length);
  let indiceCuando = Math.floor(Math.random() * cuando.length);

  let excusa =
    quien[indiceQuien] +
    " " +
    accion[indiceAccion] +
    " " +
    que[indiceQue] +
    " " +
    cuando[indiceCuando] +
    ".";
  document.getElementById("excuse").innerHTML = excusa;
}
generarYMostrarExcusa();
