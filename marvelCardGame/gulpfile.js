var gulp = require('gulp')
var browserify = require('browserify')
var pugify = require('pugify')
var babelify = require('babelify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')
var stylus = require('gulp-stylus');
var concat = require('gulp-concat-css');
var nib = require('nib');
var minify = require('gulp-minify-css');
var uglify= require('gulp-uglify');
var watchify = require('watchify');
var assign = require('lodash.assign');
var livereload = require('gulp-livereload');

var opts={
  entries:'./lib/app.js',
  transform:[babelify, pugify]
}
//unir las opciones de watchify con las opciones de browserify, usando lodash assign
opts = assign({}, watchify.args, opts)

gulp.task('build',['styl','js-pug'])

gulp.task('js-pug',function (){
  return generateBundle(browserify(opts))
})

gulp.task('styl', function(){
  return styl()
})

gulp.task('js:watch', function(){
  var w = watchify(browserify(opts))
  w.on('update',function (file  ) {
    console.log('file modified, rebuilding, ', file);
    //aqui no se le pone start:true porque este es un callback, se instancia mas abajo
    var bundle = generateBundle(w).pipe(livereload());
    console.log('rebuild finished');
    return bundle;
  })
  return generateBundle(w).pipe(livereload({start:true}))
})

gulp.task('styl:livereload',function () {
  return styl().pipe(livereload({start:true}))
})

gulp.task('styl:watch', function () {
  // watch vigila los archivos que se le pasan como primer parametros
  // y ejecuta el task que se le pasa como segundo parametro
  return gulp.watch(['./lib/app.styl', './lib/**/*.styl'], ['styl:livereload'])
})

gulp.task('watch',['styl:watch', 'js:watch']);

function styl() {
  return gulp.src('./lib/app.styl')
  .pipe(stylus({use:nib()}))
  .pipe(concat('app.css'))
  .pipe(minify())
  .pipe(gulp.dest('./public/css/'))
}

function generateBundle(b) {
  // b es browserify con todas las configuraciones
  //o watchify con todas las configuraciones, dependiendo si se llama desde el watch o no
  return b
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  // .pipe(uglify())
  .pipe(gulp.dest('./public/'))
}