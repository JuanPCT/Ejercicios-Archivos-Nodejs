const fs = require('fs');
const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;

fs.readFile('usuarios.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  const usuarios = data.split('\n');
  const usuariosSeguros = usuarios.filter(usuario => {
    const [, , contraseña] = usuario.split(',');
    let result = regex.test(contraseña);
    return regex.test(contraseña);
  });
  console.log(usuariosSeguros);
  fs.writeFile('usuariosSeguros.txt', usuariosSeguros.join('\n'), 'utf-8', err => {
    if (err) throw err;
    console.log('Se han escrito los usuarios seguros en el archivo "usuariosSeguros.txt"');
  });
});
