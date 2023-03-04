const fs = require('fs');

fs.mkdir('archivos', function(err) {
  if (err) throw err;
  console.log('La carpeta "archivos" ha sido creada.');
});
