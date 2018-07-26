# Iniciar el proyecto

1. `npm install`
2. `gulp build`
3. `node index.js`

## Notas

Compilar archivo
```
stylus app.styl
```

Observar cambios
```
stylus app.styl -w
```

Comprimir archivo
```
stylus app.styl -c
```

Compilar, observar cambios y cambiar la direccion del archivo de salida
```
stylus -w -c -o ./public/css/ ./lib/app.styl

```

Flex box o flex, coloca los elementos de html uno al lado de otro, en vez de ponerlos uno debajo del otro como es por defecto. El flex solo se hereda hacia los hijos directos del elemento donde se coloca.
```css
.layout {
  display: flex;
}
```
Asi se crea un mixin en stylus, el color es un parametro que si viene vacio, se coloca en red
```
test(color = red)
  border 1px solid color
  box-sizing border-box
```
Para usarlo solamente se llama y se le pasa el parametro

```
test(brown)
```

Cuando el elemento tiene display flex pero se quiere hacer que acomode los elementos uno debajo del otro.
```css
.layout {
  display: flex;
  flex-direction: column;
}
```
El justify-content de flex acomoda el contenido mas facil
```css
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

nib es una libreria de Stylus que sirve para añadir los prefijos de los navegadores, entre otras cosas. `-u` es la opcion de stylus para usar plugins
```
stylus -u ./node_modules/nib/lib/nib.js -w -o ./public/css/ ./lib/app.styl"
```

pug -w = watch, -P pretty, -o output, la direccion del archivo de salida
```
pug -w ./lib/index.pug -P -o ./"
```
-t indica que es una transformacion, y lo que viene despues es el nombre del plugin
```
"build": "browserify -t babelify -t pugify lib/app.js > public/app.js"
```
