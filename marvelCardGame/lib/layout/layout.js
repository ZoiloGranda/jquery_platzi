var $ = require('jquery');
var page = require('page');
var Chat = require('../chat/chat');
var homeTemplate = require('./template.pug');

page('/', restrict, home);

function restrict(ctx, next) {
  if (!window.user) return page('/signin');
  next();
}

function home(ctx, next) {
  console.log('home');
  //pug retornar el archivo con una funcion que cuando se ejecuta, compila el html
  $('.app-container').html(homeTemplate());
  // se le pasa a Chat el selector de Layout-phases
  var chat = new Chat('.Layout-phases')
}