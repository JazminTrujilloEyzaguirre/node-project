# node-project
Repasando conceptos de nodejs

Para probar y entender el funcionamiento de cada tema correr cada archivo .js por separado usando nodemon para más comodidad. 
Hay comentarios en cada archivo a modo de explicaciones sencillas.

### algunos conceptos generales:
## Asincrinía de node

Event Queue: Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

Event Loop: Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

Thread Pool: Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.

## Promesas

Una Promesa se encuentra en uno de los siguientes estados:

pendiente (pending): estado inicial, no cumplida o rechazada.
cumplida (fulfilled): significa que la operación se completó satisfactoriamente.
rechazada (rejected): significa que la operación falló.

## async/await

Async y Await nos permite definir una función de forma explícita como asíncrona y esperar a que la función termine. 
No estará bloqueando el hilo principal, pues estará esperando a que se resuelva con el event loop.
El Await es la manera en que le indicaremos a nuestro código que ha de “esperar” a que el evento al cual le indiquemos Await es importante para el proceso del código, por ende, para poder seguir ejecutando el proceso espere a que el evento se resuelva y retorne un valor.