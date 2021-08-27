// Usamos try catch para manejar errores y evitar que se detenga node

function otraFuncion() {
    serompe();
}

function serompe() {
   return 3+z;
}

function serompeASYNC(cb) {

   setTimeout(function () {
       try {
           return z+3;
       } catch (error) {
           console.log('error funcion asincrona');
           cb(error);
       }
   },1000);
}

try {
   // otraFuncion();
   serompeASYNC(function (error) {
       console.log(error.message);
   
   });
} catch (error) {
   console.error("No fu posible entregar respuesta")
   console.error(error.message);
   console.error(error);
}