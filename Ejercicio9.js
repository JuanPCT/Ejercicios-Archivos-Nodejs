const fs = require('fs');

fs.rmdir('archivos', { recursive: true }, function(err) {
  if (err) throw err;
  console.log('La carpeta "archivos" y todos sus contenidos han sido eliminados.');
});
