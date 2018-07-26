import $ from 'jquery';
import page from 'page';
import {getShows, searchShows} from 'src/tvmaze-api-client';
import renderShows from 'src/render';
import $tvShowsContainer from 'src/tv-show-container';
//se importa asi porque ese modulo no tiene un export definido
import 'src/search-form';
import qs from 'qs';

page('/', function(ctx, next){
  $tvShowsContainer.find('.tv-show').remove();
  getShows(function(shows){  })
  if (!localStorage.shows) {
    getShows(function (shows){
      $tvShowsContainer.find('.loader').remove();
      localStorage.shows = JSON.stringify(shows)
      renderShows(shows)
    })
  } else{
    renderShows(JSON.parse(localStorage.shows))
  }
})

page('/search', function (ctx, next) {
  $tvShowsContainer.find('.tv-show').remove();
  var $loader = $('<div class="loader">');
  $loader.appendTo($tvShowsContainer);
  const busqueda = qs.parse(ctx.querystring)
  searchShows(busqueda, function (res) {
    $loader.remove()
    console.log(res);
    var shows = res.map(function(el){
      return el.show;
    })
    renderShows(shows)
  })
})

page()