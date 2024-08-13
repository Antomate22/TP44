fetch('./data.json')
.then(response => {
  return response.json();
})
.catch(error => {
  console.error('Hubo un problema con la solicitud fetch:', error);
});
