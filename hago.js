fetch('data.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data); // Imprime los datos en la consola

  // Muestra los datos en el elemento con id "output"
  const outputElement = document.getElementById('output');
  outputElement.textContent = JSON.stringify(data, null, 2);

  // También puedes manipular los datos como prefieras
  data.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = `ID: ${item.id}, Nombre: ${item.nombre}, Edad: ${item.edad}, Ciudad: ${item.ciudad}`;
    outputElement.appendChild(itemElement);
  });
})
.catch(error => {
  console.error('Hubo un problema con la solicitud fetch:', error);
});
