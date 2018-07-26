var key = 'e8e0b11770cdcf7392dfa429b569ddcb'
// var api = new window.MarvelApi(key)
var $ = require('jquery')
var page = require('page')

require('./layout/layout.js')
require('./signin/signin.js')

//inicializar page
page();
// api.findSeries('avengers')
// .then((serie)=>{
//   let serieImage = `url(${serie.thumbnail.path}.${serie.thumbnail.extension})`
//   $('.Layout').css('background-image', serieImage)
//   var characters = serie.characters.items
//   var promises =[]
//   for (let character of characters) {
//     var promise = api.getResourceURI(character.resourceURI)
//     promises.push(Promise.resolve(promise))
//   }
//   return Promise.all(promises)
// })
// .then((characters)=>{
//   return characters.filter((character)=>{
//     //retornar solo personajes que tienen imagen
//     return character.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
//   })
// })
// .then((characters)=>{
//   characters= shuffle(characters);
//   for (var i = 0; i < 5; i++) {
//     let character = characters[i]
//     drawCharacter(character)
//   }
// })
// .catch((err)=> {
//   console.error(err)
// })
// 
// $('.CharacterForm').on('submit',function( event ) {
//   event.preventDefault();
//   var name = $(this).find('.CharacterForm-name').val()
//   api.searchCharacter(name)
//   .then(function(character){
//     drawCharacter(character)
//   })
//   .catch(function(reason){
//     if (reason==='No se encontro el personaje') {
//       $('.CharacterForm-message').text(reason)
//     }
//   })
// });
// 
// function renderCharacter(character) {
//   let attackPoints = Math.ceil(Math.random()*500)+500;
//   return `
//   <div class="Card">
//   <div class="Card-container">
//   <h3 class="Card-name">${character.name}</h3><img class="Card-image" src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="">
//   <div class="Card-description">${character.description}</div>
//   <div class="Card-attack" data-attack="${attackPoints}">${attackPoints} Puntos de ataque</div>
//   </div>
//   <div class="Card-backface"></div>
//   </div>`
// }
// 
// function shuffle(arr){
//   for (var i = 0; i < arr.length; i++) {
//     let temp = arr[i];
//     let index = Math.floor(Math.random()* (arr.length - 1))
//     arr[i]= arr[index]
//     arr[index] = temp;
//   }
//   return arr;
// }
// 
// function drawCharacter(character) {
//   let template = renderCharacter(character);
//   let $card = $(template)
//   $('.Card').on('click',function (event){
//     let $this = $(this);
//     let attack =$this.find('.Card-attack')
//     console.log(attack.data('attack'));
//   })
//   $('.Battle-player').append($card)
// }
















