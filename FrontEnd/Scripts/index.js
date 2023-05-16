document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var files = params.getAll('inputFiles[]');
  
    var imageContainer = document.getElementById('imageContainer');
    console.log(files);
    
    files.forEach(function(file) {
      var imgElement = document.createElement('img');
      imgElement.src = file;
      imageContainer.appendChild(imgElement);
    });
  });