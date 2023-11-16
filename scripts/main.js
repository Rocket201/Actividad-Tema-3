import { obtenerNombreyApell, obtenerNacimiento } from "./scriptindex.js";
// Git Hub: https://github.com/Rocket201/Actividad-Tema-3.git
document.addEventListener("DOMContentLoaded", () => {
 
    // Llamo a las funciones al cargar la página
    obtenerNombreyApell();
    obtenerNacimiento();
  
    // Creo contenedores y botones con sus funciones de reiniciar y abrir ventana
    const contenedor = document.createElement("div");
    contenedor.id = "contenedor";
    document.body.appendChild(contenedor);
  

    const reiniciarBtn = document.createElement("button");
    reiniciarBtn.textContent = "Reiniciar";
    reiniciarBtn.addEventListener("click", reiniciar);
    contenedor.appendChild(reiniciarBtn);
  
    const abrirVentanaBtn = document.createElement("button");
    abrirVentanaBtn.textContent = "Abrir Ventana";
    abrirVentanaBtn.addEventListener("click", abrirVentana);
    contenedor.appendChild(abrirVentanaBtn);
  
    function reiniciar() {
      console.log("Clic en Reiniciar");
      window.location.reload();
    }
  
    function abrirVentana() {
      console.log("Clic en Abrir Ventana");
      window.location.href = "ventana.html";
    }
  });
  