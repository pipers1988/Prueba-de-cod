


var abriraside = false;
var numberOfProducts = 0;
$('body').on('click', '.js-toggle-aside', toggleAside);
$('body').on('click', '.js-add-product', addProducto);
$('body').on('click', '.js-remove-product', removeProducto);


function toggleAside(e) {
  e.preventDefault();
  if(abriraside) {
    closeCart();
    return;
  }
  openCart();
}

function openCart() {
  abriraside = true;
  $('body').addClass('open');
}

function closeCart() {
  abriraside = false;
  $('body').removeClass('open');
}

function addProducto(e) {
  e.preventDefault();
  $('.js-txt').addClass('hide');
  var product = $('.contenedor-plantilla').html();
  $('.js-cart-productos').prepend(product);
  numberOfProducts++;
  $('#count_elemnt').text(numberOfProducts);
}

function removeProducto(e) {
  e.preventDefault();
  numberOfProducts--;
  $(this).closest('.js-create-element').remove();
  $('#count_elemnt').text(numberOfProducts);
}