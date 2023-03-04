const fs = require('fs');

fs.readFile('nombres.txt', 'utf8', function(err, data) {
  if (err) throw err;

  const nombres = data.trim().split('\n');

  nombres.sort();

  const nombresOrdenados = nombres.join('\n');

  fs.writeFile('nombres_ordenados.txt', nombresOrdenados, function(err) {
    if (err) throw err;
    console.log('Los nombres han sido ordenados y guardados en el archivo "nombres_ordenados.txt".');
  });
});
