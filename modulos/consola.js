// recibe cualquier tipo y lo muestra en el consola.
  console.log("this is a message");
  
// es equivalente a log pero es usado para informar.
  console.info("this is a mesagge (pero con .info)...");
  
// imprime una advertencia en consola;
  console.warn("Este sitio utiliza cookies" + " Este es un console.warn");

// imprime un error en consola
  const num = 5;
  console.error("Hubo otro error", num);

// muestra una tabla a partir de un objeto.
  const root = {
    name: "Jazmin Trujillo",
    edad: 23,
    ciudad: "viña del mar",
    developer: true,
  }
  console.table(root);


// Agrupa una cantidad de datos en consola
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves",
      "Viernes", "Sábado", "Domingo"];

  console.group("diasSemana")

  for (let i = 0; i < dias.length; i++) {
  console.log(dias[i]);
  };
  console.groupEnd("diasSemana")

// Límpia la consola
  function limpiarConsola () {
      setTimeout(() => {
          console.clear("Limpiando cada 5 segs");
      }, 10000)
  }
  limpiarConsola();

// Cuenta la cantidad de veces que se ejecuta algo
  console.count("Veces");
  console.count("Veces");
  console.countReset("Veces");
  console.count("Veces");
  console.count("Veces");

// determina el tiempo que demora un proceso en ocurrir
  console.time("100-elementos")
  for (let i = 0; i < 100; i++){
  };
  console.timeEnd("100-elementos")