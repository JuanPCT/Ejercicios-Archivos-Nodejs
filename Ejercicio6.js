const fs = require('fs');

fs.copyFile('ejemplo.txt', 'archivos/ejemplo_copia.txt', function(err) {
  if (err) throw err;
  console.log('El archivo "ejemplo.txt" ha sido copiado como "ejemplo_copia.txt" en la carpeta "archivos".');
});
