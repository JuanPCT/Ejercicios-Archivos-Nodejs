const fs = require('fs');

fs.unlink('ejemplo.txt', function(err) {
  if (err) throw err;
  console.log('El archivo "ejemplo.txt" ha sido eliminado.');
});
