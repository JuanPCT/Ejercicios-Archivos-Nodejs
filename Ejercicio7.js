const fs = require('fs');

fs.readdir('archivos', function(err, files) {
  if (err) throw err;
  console.log('Los archivos en la carpeta "archivos" son:');
  files.forEach(function(file) {
    console.log(file);
  });
});
