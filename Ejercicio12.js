const fs = require('fs');

fs.readFile('numeros.txt', 'utf8', function(err, data) {
  if (err) throw err;

  const numeros = data.trim().split(',').map(Number);
  numeros.sort((a, b) => a - b);

  const media = numeros.reduce((suma, numero) => suma + numero, 0) / numeros.length;

  const resultado = `Números ordenados: ${numeros.join(', ')}\nMedia aritmética: ${media.toFixed(2)}`;
  fs.writeFile('numeros_ordenados.txt', resultado, function(err) {
    if (err) throw err;
    console.log('Los números han sido ordenados y la media aritmética ha sido calculada y guardados en el archivo "numeros_ordenados.txt".');
  });
});
