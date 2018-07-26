class MarvelApi {
  constructor(key) {
    this.key = key
    this.baseUrl = 'https://gateway.marvel.com:443/v1/public/'
  }
  findSeries (title){
    let url = `${this.baseUrl}series?title=${title}&apikey=${this.key}`
    if(localStorage[url]){
      console.log('leyendo');
      let datos = JSON.parse(localStorage[url])
      return Promise.resolve(datos)
    }else {
      return Promise.resolve($.get(url))
      .then((res)=>{
        let datos = res.data.results[0]
         datos = JSON.stringify(datos)
         console.log('guardado');
         localStorage[url] = datos
        return res.data.results[0]
      })
      
    }
  }

  getResourceURI(resourceURI){
    let url= `${resourceURI}?apikey=${this.key}`
    if(localStorage[url]){
      console.log('usando localStorage');
      let datos = JSON.parse(localStorage[url])
      return Promise.resolve(datos)
    }
    return Promise.resolve($.get(url))
    .then((res)=>{
      let datos = res.data.results[0]
      localStorage[url] = JSON.stringify(datos)
      return Promise.resolve(datos)
    })
  }
  
  searchCharacter(name){
    let url = `${this.baseUrl}/characters?name=${name}&apikey=${this.key}`
    return new Promise(function(done){
      $.get(url).done(function(data){
        done(data)
      })
    })
    .then(function(res){
      if (!res.data.total) {
        return Promise.reject('No se encontro el personaje')
      }
      return res.data.results[0]
    })
  }
}

window.MarvelApi = MarvelApi;