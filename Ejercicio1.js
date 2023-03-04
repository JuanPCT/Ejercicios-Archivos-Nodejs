const fs = require('fs');

fs.writeFile('ejemplo.txt', 'Hola, mundo!', function(err) {
  if (err) throw err;
  console.log('El archivo ha sido creado y se ha escrito "Hola, mundo!" en él.');
});
