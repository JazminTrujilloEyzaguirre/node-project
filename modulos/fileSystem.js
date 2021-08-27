const fs = require('fs');

// Lee un archivo ya creado
function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

// Crea un archivo nuevo
function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }

    });
}

// Borra un archivo existente
function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

escribir(__dirname + '/file.txt', 'Soy un archivo nuevo', console.log);
leer(__dirname + '/file.txt', console.log)
borrar(__dirname + '/file.txt', console.log);