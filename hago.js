fetch('data.json')
.then((response) => response.json())
.then((data)=> {








  
})
.catch(error => {
  console.error('Hubo un problema con la solicitud fetch:', error);
});
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function() {
    // Remover la clase 'active' de todos los botones
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    
    // Agregar la clase 'active' solo al botón que fue clicado
    this.classList.add('active');
  });
});
document.querySelectorAll('.radio-color').forEach(button => {
  button.addEventListener('click', function() {
    // Remover la clase 'active' de todos los botones
    document.querySelectorAll('.radio-color').forEach(btn => btn.classList.remove('active-color'));
    
    // Agregar la clase 'active' solo al botón que fue clicado
    this.classList.add('active-color');
  });
});
