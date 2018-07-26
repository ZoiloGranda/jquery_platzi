var $ = require('jquery');
var page = require('page');

var template = require('./template.pug')

page('/signin', signin);

function signin(ctx) {
  console.log('signin');
  $('.app-container').html(template());
  $('.Signin-button').on('click', function (event) {
    event.preventDefault();
    var user = $('.Signin-name-input').val();
    console.log('user ', user);
    if (!user) {
      return alert('Ingrese un nombre valido');
    }
    window.user = user;
    page('/');
  });
}
