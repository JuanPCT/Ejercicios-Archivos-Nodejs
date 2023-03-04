const fs = require('fs');

fs.appendFile('ejemplo.txt', '\nEste es un ejemplo', function(err) {
  if (err) throw err;
  console.log('La cadena "Este es un ejemplo" ha sido agregada al final del archivo.');
});
