const fs = require('fs');

fs.rename('ejemplo.txt', 'archivos/ejemplo.txt', function(err) {
  if (err) throw err;
  console.log('El archivo "ejemplo.txt" ha sido movido a la carpeta "archivos".');
});
