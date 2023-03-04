const fs = require('fs');

fs.readFile('productos.json', 'utf8', function(err, data) {
  if (err) throw err;

  const productos = JSON.parse(data);

  let precioTotal = 0;
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    precioTotal += producto.precio * producto.cantidad;
  }

  const resultado = { productos: productos, precioTotal: precioTotal };

  const json = JSON.stringify(resultado);
  fs.writeFile('productos_con_precio_total.json', json, function(err) {
    if (err) throw err;
    console.log('El archivo "productos_con_precio_total.json" ha sido creado correctamente.');
  });
});
