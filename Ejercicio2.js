const fs = require('fs');

fs.readFile('ejemplo.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log('El contenido del archivo es:');
  console.log(data);
});
