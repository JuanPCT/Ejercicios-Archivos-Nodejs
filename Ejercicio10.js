const fs = require('fs');

const data = {
  nombre: 'Juan',
  apellido: 'Pérez',
  edad: 35
};

fs.writeFile('datos.json', JSON.stringify(data), function(err) {
  if (err) throw err;
  console.log('El archivo "datos.json" ha sido creado con éxito.');
});
