import $ from 'jquery';
import page from 'page';

$('#app-body').find('form').submit(function(ev){
  ev.preventDefault();
  //this es el elemento form porque es el que esta seleccionado al inicio de la funcion
  var busqueda = $(this).find('input[type="text"]').val();
  page(`/search?q=${busqueda}`);

})