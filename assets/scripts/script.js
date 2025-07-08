document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos del DOM
  const filterButtons = document.querySelectorAll('.destination-filter');
  const allDestinations = document.querySelectorAll('.destination-detail');
  
  allDestinations.forEach(dest => dest.style.display = 'none');
  
  
  // Añadir event listeners a los botones de filtro
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const destinationToShow = this.getAttribute('data-destination');
      
      // Ocultar todos los destinos
      allDestinations.forEach(dest => {
        dest.style.display = 'none';
      });
      
      // Mostrar solo el destino seleccionado
      const selectedDestination = document.getElementById(destinationToShow);
      if(selectedDestination) {
        selectedDestination.style.display = 'block';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash.substring(1); 
  
  if(hash) {
    document.querySelectorAll('.destination-detail').forEach(dest => {
      dest.style.display = 'none';
      });
    const targetDest = document.getElementById(hash);
    if(targetDest) {
      targetDest.style.display = 'block';
      }
    }
    //Configurar botones de filtro
    document.querySelectorAll('.destination-filter').forEach(button => {
        button.addEventListener('click', function() {
            const dest = this.getAttribute('data-destination');
            window.location.hash = dest; 
        });
    });
});