
page('/', home);
page('/signin', signin);

var signinTemplate =`<label>Ingresa tu nombre</label>
<input class="Signin-name-input" type="text" id="firstName" name="firstName" tabindex="1" placeholder="zoilo, matias"/>
<button class="Signin-button" tabindex="2">Ingresar</button>`

var homeTemplate = `<section class="Layout">
  <section class="Layout-antagonist">
    <div class="Card">
      <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
      <div class="Card-description">Wolverine es Hugh Jackman</div>
      <div class="Card-attack">500 puntos de ataque</div>
    </div>
    <div class="Card">
      <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
      <div class="Card-description">Wolverine es Hugh Jackman</div>
      <div class="Card-attack">500 puntos de ataque</div>
    </div>
    <div class="Card">
      <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
      <div class="Card-description">Wolverine es Hugh Jackman</div>
      <div class="Card-attack">500 puntos de ataque</div>
    </div>
    <div class="Card">
      <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
      <div class="Card-description">Wolverine es Hugh Jackman</div>
      <div class="Card-attack">500 puntos de ataque</div>
    </div>
    <div class="Card">
      <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
      <div class="Card-description">Wolverine es Hugh Jackman</div>
      <div class="Card-attack">500 puntos de ataque</div>
    </div>
  </section>
  <section class="Layout-main">
    <div class="Layout-status">
      <form class="CharacterForm" action="#">
        <input class="CharacterForm-name" type="text" placeholder="Agrega un Personaje">
        <button>Agregar</button><span class="CharacterForm-message"></span>
      </form>
    </div>
    <div class="Layout-battle">
      <div class="Battle">
        <div class="Battle-antagonist">
          <div class="Card">
            <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
            <div class="Card-description">Wolverine es Hugh Jackman</div>
            <div class="Card-attack">500 puntos de ataque</div>
          </div>
          <div class="Card">
            <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
            <div class="Card-description">Wolverine es Hugh Jackman</div>
            <div class="Card-attack">500 puntos de ataque</div>
          </div>
          <div class="Card">
            <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
            <div class="Card-description">Wolverine es Hugh Jackman</div>
            <div class="Card-attack">500 puntos de ataque</div>
          </div>
          <div class="Card">
            <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
            <div class="Card-description">Wolverine es Hugh Jackman</div>
            <div class="Card-attack">500 puntos de ataque</div>
          </div>
          <div class="Card">
            <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
            <div class="Card-description">Wolverine es Hugh Jackman</div>
            <div class="Card-attack">500 puntos de ataque</div>
          </div>
        </div>
        <div class="Battle-player"></div>
      </div>
    </div>
    <div class="Layout-phases">
      <div class="Phases">
        <p>Ese ataque fue muy fuerte</p>
      </div>
    </div>
  </section>
  <section class="Layout-player">player
    <div class="Card">
      <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
      <div class="Card-description">Wolverine es Hugh Jackman</div>
      <div class="Card-attack">500 puntos de ataque</div>
    </div>
    <div class="Card">
      <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
      <div class="Card-description">Wolverine es Hugh Jackman</div>
      <div class="Card-attack">500 puntos de ataque</div>
    </div>
    <div class="Card">
      <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
      <div class="Card-description">Wolverine es Hugh Jackman</div>
      <div class="Card-attack">500 puntos de ataque</div>
    </div>
    <div class="Card">
      <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
      <div class="Card-description">Wolverine es Hugh Jackman</div>
      <div class="Card-attack">500 puntos de ataque</div>
    </div>
    <div class="Card">
      <h3 class="Card-name">Wolverine</h3><img class="Card-image" src="./public/images/wolverine.jpeg" alt="">
      <div class="Card-description">Wolverine es Hugh Jackman</div>
      <div class="Card-attack">500 puntos de ataque</div>
    </div>
  </section>
</section>`

function home(ctx){
  console.log('home');
  $('.app-container').html(homeTemplate)
  if (!window.username) {
    page('/signin');
  }
}
function signin(ctx){
  console.log('signin');
  $('.app-container').html(signinTemplate)
  $('.Signin-button').on('click',function(event){
    event.preventDefault();
    var username = $('.Signin-name-input').val()
    console.log('username ', username);
    if (!username) {
      return alert('Ingrese un nombre valido')
    }
    window.username=username;
    page('/');
  })
}

//inicializar page
page();