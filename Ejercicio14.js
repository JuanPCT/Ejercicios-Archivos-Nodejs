const fs = require('fs');

fs.readFile('personas.txt', 'utf-8', (error, data) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  }

  const personas = data.split('\n').map(linea => {
    const [nombre, edad, email] = linea.trim().split(',');
    return { nombre, edad, email };
  });

  const tablaHTML = `
    <html>
    <head>
      <title>Lista de Personas</title>
    </head>
    <body>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          ${personas.map(persona => `
            <tr>
              <td>${persona.nombre}</td>
              <td>${persona.edad}</td>
              <td>${persona.email}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </body>
    </html>
  `;

  fs.writeFile('personas.html', tablaHTML, error => {
    if (error) {
      console.error('Error al escribir el archivo:', error);
      return;
    }
    console.log('Archivo HTML generado exitosamente');
  });
});
