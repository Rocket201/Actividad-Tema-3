document.addEventListener("DOMContentLoaded", () => {
    const cerrarVentanaBtn = document.getElementById("cerrarVentana");
    cerrarVentanaBtn.addEventListener("click", cerrarVentana);

    function cerrarVentana() {
        // Cierra la ventana utilizando window.opener
        window.opener = null;
        window.open("", "_self");
        window.close();
    }
});
