const http = require("http");

const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>¡Hola desde Project Cloud!</h1><p>Deploy de prueba ZIP.</p>");
  })
  .listen(port, () => {
    console.log("Escuchando en el puerto " + port);
  });
