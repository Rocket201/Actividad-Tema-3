export const obtenerNombreyApell = () => {

  document.write("<h1> PRÁTICA 3-DWEC </h1>");
  let nombre;
  let apellidos;

  do {
    nombre = prompt("Hola, introduce tu nombre");

    // Validar si el nombre está vacío o es null
    if (!nombre) {
      alert("Por favor, introduce un nombre válido.");
    }
  } while (!nombre);

  console.log("Nombre", nombre);

  do {
    apellidos = prompt("Introduce tus apellidos");

    // Validar si los apellidos están vacíos o son null
    if (!apellidos) {
      alert("Por favor, introduce apellidos válidos.");
    }
  } while (!apellidos);

  console.log("Apellidos", apellidos);

  const nombreCompleto = `${nombre} ${apellidos}`;
  const saludoElement = document.createElement("p");
  saludoElement.textContent = `Buenos días, ${nombreCompleto}`;
  document.body.appendChild(saludoElement);

  const contadorCaracteres = `Tu nombre completo ${nombreCompleto} tiene ${nombreCompleto.length} caracteres incluyendo los espacios`;
  document.write(`<p>${contadorCaracteres}</p>`);

  
  const posicionA = nombreCompleto.indexOf("A") + 1;
  const posicionAMensaje = `La letra 'A' se encuentra en la posición ${posicionA} en tu nombre y apellidos`;
  document.write(`<p>${posicionAMensaje}</p>`);

  const nombreRestao = nombreCompleto.slice(3);
  const restaMensaje = `Tu nombre sin los 3 primeros caracteres es: ${nombreRestao}`;
  document.write(`<p>${restaMensaje}</p>`);

  const nombreMayus = nombreCompleto.toUpperCase();
  const nombreMayusmensa = `Tu nombre en mayúsculas es: ${nombreMayus}`;
  document.write(`<p>${nombreMayusmensa}</p>`);
};

export const obtenerNacimiento = () => {
  let dia;
  let mes;
  let ano;

  do {
    dia = prompt("Introduce tu día de nacimiento");

    // Validar si el día no es un número o está fuera del rango
    if (isNaN(dia) || dia < 1 || dia > 31) {
      alert("Por favor, introduce un día de nacimiento válido.");
    }
  } while (isNaN(dia) || dia < 1 || dia > 31);

  do {
    mes = prompt("Introduce tu mes de nacimiento");

    // Validar si el mes no es un número o está fuera del rango
    if (isNaN(mes) || mes < 1 || mes > 12) {
      alert("Por favor, introduce un mes de nacimiento válido.");
    }
  } while (isNaN(mes) || mes < 1 || mes > 12);

  do {
    ano = prompt("Introduce tu año de nacimiento");

    // Validar si el año no es un número o está fuera del rango
    if (isNaN(ano) || ano < 1900 || ano > new Date().getFullYear()) {
      alert("Por favor, introduce un año de nacimiento válido.");
    }
  } while (isNaN(ano) || ano < 1900 || ano > new Date().getFullYear());

  console.log("Fecha de Nacimiento:", dia, mes, ano);

  const fechaActual = new Date();
  const anoActual = fechaActual.getFullYear();
  const mesActual = fechaActual.getMonth() + 1;

  const anoNacimiento = ano;
  const mesNacimiento = mes;

  let edad = anoActual - anoNacimiento;

  if (mesActual < mesNacimiento) {
    edad--;
  }

  const mensajeEdad = `Tu edad es: ${edad}`;
  document.write(`<p>${mensajeEdad}</p>`);

  let epocaDelAnio = "";

  switch (mesNacimiento) {
    case "1":
    case "2":
    case "12":
      epocaDelAnio = "Invierno";
      break;
    case "3":
    case "4":
    case "5":
      epocaDelAnio = "Primavera";
      break;
    case "6":
    case "7":
    case "8":
      epocaDelAnio = "Verano";
      break;
    case "9":
    case "10":
    case "11":
      epocaDelAnio = "Otoño";
      break;
    default:
      epocaDelAnio = "Mes no válido";
  }

  const mensajeEpoca = `Naciste un feliz día de ${epocaDelAnio} del año ${ano}`;
  document.write(`<p>${mensajeEpoca}</p>`);

  const coseno180 = Math.cos(180 * (Math.PI / 180));
  const cosenoMensa = `El coseno de 180 es: ${coseno180.toFixed(2)}`;
  document.write(`<p>${cosenoMensa}</p>`);

  const numeros = [34, 67, 23, 75, 35, 19];
  const numeroMayor = Math.max(...numeros);
  const numeroMayorMensaje = `El número mayor de ${numeros.join(', ')} es ${numeroMayor}`;
  document.write(`<p>${numeroMayorMensaje}</p>`);

  const numeroAlAzar = Math.floor(Math.random() * 101);
  const numeroAlAzarMensaje = `Ejemplo de número al azar entre 0 y 100: ${numeroAlAzar}`;
  document.write(`<p>${numeroAlAzarMensaje}</p>`);
};
