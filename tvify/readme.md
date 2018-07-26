# Tvify

Para iniciar el proyecto, después de clonar:

1. `npm install`
2. `npm run build`
3. `npm run serve`

## Notas del curso de Javascript y Jquery de Platzi

Browserify por defecto busca al archivo `index.js`, al momento de leer un `import` para hacer el bundle

---

Cuando se ejecuta browserify con el comando `NODE_PATH =.`, en el `package.json` hace que cuando browserify empaquete el proyecto, lea toda las rutas desde el root del proyecto, asi cuando se esten haciendo los `import` se pueden importar usando la ruta desde el root del proyecto
```javascript
// archivo en src/render/index.js
import $ from 'jquery';
import $tvShowsContainer from 'src/tv-show-container';

//para importar un archivo en src/tv-show-container/index.js
```

---

Asi se escribe el `$(document).ready` mas corto

```javascript
$(function(){
  alert('ready')
})
```

---

Para eliminar conflictos de jquery con otras librerias que usen el simbolo de $

```javascript
$.noConflict();
jQuery(document).ready(function ($) {
  $// aqui el simbolo hace referencia a jquery
})
$//aqui hace referencia cualquier otra libreria que use el $
```

---

```javascript
$('h1.title') // selecciona todos los h1 que tengan clase title
$('h1 + h2') //selecciona todos los h2 que tengan como hermano un h1
$('#app-header h1') //selecciona los h1 que esten dentro de un elemento con id app-header
$('h1, h2')// selecciona todos los h1 y todos los h2
```

---

Al selector de jquery se le puede pasar como segundo atributo el contexto en el cual
va a buscar el elemento. Aqui selecciona todos los `h1` dentro del `header[0]`.
El selector de jquery retorna un jquery object con los elementos del dom encontrados,
por eso se usa [0] para acceder al primer elemento retornado (en este caso el unico), que es como tal el elemento del dom

```javascript
var header = $('header');
var title = $('h1', header[0]);
```

---

Si se quiere acceder a todos los `li` dentro de un contenedor `#lenguajes` se puede seleccionar asi. La segunda forma es mas rapida porque con pasarle el contexto  `#lenguajes`, jquery solo busca dentro de ese elemento los `li`

```
$('#lenguajes').find('li')
$('#lenguajes li')
```

---

Al selector se le puede pasar el elemento del dom seleccionado con javascript nativo, para que jquery haga el wrap como jquery object

```javascript
var header = document.getElementById('header');
var $header= $(header);
```

---

`$(':input')` Es un pseudo selector de jquery que retorna todos los elementos del dom que reciban un input del usuario (`<input>`, `<textarea>`, `<select>`)

`$(':selected')` Retorna los elementos seleccionados en el dom

`$(':enabled')` Retorna los elementos habilitados para hacer input (checkbox, radiobuttons...)

`$(':disabled')`Retorna los elementos deshabilitados para hacer input (checkbox, radiobuttons...)

`$(':text')` Retorna los elementos de tipo texto (input type text, textarea)

`$(':file')` Retorna los elementos para subir archivos

`$(':checkbox')` Retorna los elementos type=checkbox

`$('header[dat-title="Tvify"]')` Retorna todos los elementos con etiqueta header, con
 atributo data-title="tvify"

`$('#app-header').find('h1')` Retorna los h1 que esten dentro de un elemento con id #app-header, este metodo es mas rapido porque solo busca el h1 dentro del objeto que retornó `$('#app-header')`

`$('#app-header').has('h1')` Retorna el elemento con id app-header, solo si tiene un h1 dentro

`$('#app-header').not('h1')` Retorna el elemento con id app-header, solo si no tiene un h1 dentro

`$('p').filter('.text')` Retorna los elementos p, que tengan la clase text

---

Se pueden concatenar los metodos del selector de jquery, este selecciona todos los `p` que tengan clase `text`, con un `a` adentro, y solo retorna el primero

```javascript
$('p').filter('.text').has('a').first()
```

---

Con eq se le especifica un indice para cual elemento retornar, aqui retornar el 3er elemento encontrado (0 es el primero)
```javascript
$('p').filter('.text').has('a').eq(2)
```

---

Los objetos de jquery no se actualizan si se agregan nuevos elementos al DOM
para actualizarlos se puede hacer de esta dos formas.
Volver a crear el jquery object con el selector de p, para que registre
los nuevos elementos p
```javascript
var ps = $('p');
```

---

Pasarle al jquery object el objeto del DOM que se creó
```javascript
var p = document.createElement('p');
document.body.appendChild(p);
ps=ps.add(p)
```

---

Crear un elemento html desde jquery y agregarlo al body, el segundo parametro son los atributos del elemento
```javascript
var a = $('a',{
  href: 'http://platzi.com',
  target: '_blank',
  html: 'Ir a Platzi'
})
$('#app-body').append(a)
```

---

Con attr y el nombre del atributo se obtienen los valores de cualquier atributo
```javascript
console.log(a.attr('href'));
```
Asi se modifica el valor de un atributo de un elemento html
```javascript
a.attr('href','http://google.com');
```

---

Al metodo attr tambien se le puede pasar un objeto con los nombres de los atributos y los valores que se le van a modificar
```javascript
a.attr({
  href: 'http://platzi.com',
  target: '_blank',
  html: 'Ir a Platzi'
})
```

---

Modificar el css de un elemento del dom
```javascript
$('h1').css({
  'font-size':'70px'
})
```

---

Closest busca el elemento que cumpla con la condición que se le pasa como argumento.
Busca los elementos hacia arriba, hacia los padres del elemento.
Aquí busca el elemento que tenga clase `tv-show` entre los ancestros del elemento `$this`, y alterna la clase `liked`
```javascript
$this.closest('.tv-show').toggleClass('liked');
```

---

Esta es una forma optimizada de agregar una gran cantidad de elementos al DOM. Es mas rapido hacerlo
asi que usar un ciclo `for` que vaya añadiendo cada `li`
```javascript
//#lenguajes es un <ul> al que se le van a agregar los <li>
var lenguajes =[
  "PHP",
  "C#",
  "C++",
  "Javascript",
  "Ruby",
  "Python"
]
  var myHtml = "";
  $.each(lenguajes, function (i, item) {
      myHtml +="<li class=lenguaje>"+item+"</item>"
  })
  $('#lenguajes').html(myHtml)
```

---

Ciclo `for` optimizado para hacer modificaciones a los `li`. Se guarda `listItems.length` en una variable `length`, y asi no se necesita buscar en cada ciclo el `listItems.length`, solo consultar
la variable `length`, que es mas rapido.
```javascript
var lenguajes = $('#lenguajes');
var listItems = lenguajes.find('li');
var length = listItems.length;
for (var i = 0; i < length; i++) {
  console.log(listItems[i]);
}
```

---

Para modificar un elemento sin estar renderizado el DOM en cada cambio, se le hace `detach`
que lo remueve del DOM, manteniendo todas sus propiedades, y luego se le hace `append` de nuevo
```javascript
var parent = lenguajes.parent();
lenguajes.detach();
//Hacer modificaciones a lenguajes
parent.append(lenguajes)
```

---

Si se va a modificar o agregar un regla css que afecta muchos elementos, en vez de seleccionar todos los elementos y agregarle la regla, es mas rapido añadir un script css al html
```javascript
//Asi si son pocos elementos que afecta la regla css
$('#lenguajes').find('li').css('color', 'red');

//Asi si son muchos elementos afectados por el cambio en el css
$('<style type="text/css">#lenguajes li { color: red}</style>').appendTo('head')
```
