document.addEventListener('DOMContentLoaded', function() {
  let contenedor = document.querySelector('#main');
  
  let images = JSON.parse(localStorage.getItem('images'));
  
  if (images && images.length > 0) {
    images.forEach(function(image) {
      let imgElement = document.createElement('img');
      imgElement.src =  "../FrontEnd/imgs/" + image;// Reemplaza 'ruta-de-las-imagenes/' con la ruta real de las imágenes
      contenedor.appendChild(imgElement);
    });
  }
});