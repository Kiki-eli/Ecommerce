// Obtener referencias a los elementos del DOM
var searchInput = document.getElementById('search-input');
var searchButton = document.getElementById('search-button');

// Agregar evento de clic al botón de búsqueda
searchButton.addEventListener('click', function() {
  var searchTerm = searchInput.value;
  // Realizar alguna acción con el término de búsqueda, como enviar una solicitud de búsqueda al servidor
  console.log('Búsqueda:', searchTerm);
});
//BANNER
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide active';
}
//FILTRO Y CATEGORIAS
// Obtener la lista de categorías
const categoriesList = document.getElementById('categories-list');

// Agregar evento de clic a las categorías
categoriesList.addEventListener('click', function(event) {
  const selectedCategory = event.target;
  
  // Deseleccionar todas las categorías
  const categories = categoriesList.getElementsByClassName('category');
  for (let i = 0; i < categories.length; i++) {
    categories[i].classList.remove('selected');
  }
  
  // Seleccionar la categoría clicada
  selectedCategory.classList.add('selected');
});
//LISTADO DE PRODUCTOS
// Obtener los botones de agregar al carrito y ver detalles
const addToCartButtons = document.getElementsByClassName('add-to-cart');
const viewDetailsButtons = document.getElementsByClassName('view-details');

// Agregar eventos de clic a los botones
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', function() {
    // Lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito');
  });
}

for (let i = 0; i < viewDetailsButtons.length; i++) {
  viewDetailsButtons[i].addEventListener('click', function() {
    // Lógica para mostrar los detalles del producto
    console.log('Mostrando detalles del producto');
  });
}
//CARRITO DE COMPRAS
// Obtener los botones de eliminar y los campos de cantidad
const removeButtons = document.getElementsByClassName('item-remove');
const quantityInputs = document.getElementsByClassName('item-quantity');

// Agregar eventos de clic a los botones de eliminar
for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', function() {
    // Eliminar el producto del carrito
    const item = this.parentElement.parentElement;
    item.remove();
    recalculateTotals();
  });
}

// Agregar evento de cambio a los campos de cantidad
for (let i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener('change', function() {
    recalculateTotals();
  });
}

// Función para recalcular los totales del carrito
function recalculateTotals() {
  let totalItems = 0;
  let totalPrice = 0;

  const itemDetails = document.getElementsByClassName('item-details');
  for (let i = 0; i < itemDetails.length; i++) {
    const priceElement = itemDetails[i].querySelector('.item-price');
    const quantityElement = itemDetails[i].querySelector('.item-quantity');

    const price = parseFloat(priceElement.innerText.replace('$', ''));
    const quantity = parseInt(quantityElement.value);

    totalItems += quantity;
    totalPrice += price * quantity;
  }

  document.getElementById('total-items').innerText = totalItems;
  document.getElementById('total-price').innerText = '$' + totalPrice.toFixed(2);
}
//PIE DE PAGINA