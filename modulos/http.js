const {createServer} = require('http')

const port = 3000

function router(req, res) {
  console.info('Nueva petición')
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'})
  switch (req.url) {
    case '/':
      res.end('Hola mundo')
      break;
      default:
        res.write('404 ! Ingresa un url Valida ;)')
        res.end()
       
  }
}

const server = createServer(router).listen(port)
console.log('Escuchando en el puerto ' + port);