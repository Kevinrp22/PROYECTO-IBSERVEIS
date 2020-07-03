<script>
  import { getContext } from "svelte";
  import { scale, blur, fade, slide, fly } from "svelte/transition";
  import * as comprueba from "../codigo/verifica.js";

  //export let _id = "";
  export let namefirst;
  export let namelast;
  export let useremail;
  export let userpicture;
  export let validacion = false;

  export let agregarUsuario;
  export let verformularionuevo;

  const cerrarPerfil = getContext("cerrarperfil");

  //context
  //const agregar = getContext('agregar')
  //se ha optado por pasarlo por props ( agregarusuario solo 1 nivel)

  function previo() {
    validacion = comprueba.validar(namefirst, namelast, useremail, userpicture);
    if (validacion) {
      mensaje.innerHTML = " Datos validos     ";
      agregarUsuario({ namefirst, namelast, useremail, userpicture });
      cerrarPerfil()
    } else {
      mensaje.innerHTML = "Introduce datos validos    ";
      txt_firstname.focus();
    }
  }
</script>

<style>
  .c-form-user {
  }
  form input {
    width: 100%;
    padding: 15px;
    color: rgb(71, 71, 71);
    font-size: 1em;
    background-color: rgb(247, 247, 247);
  }
  .grupo {
    margin: 10px 0;
  }
  .grupo label {
    display: block;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 10px;
  }
  .botones-ficha {
    display: flex;
  }
</style>

<div class="c-form-user">
  <form>
    <div class="usuario-data">
      <div class="grupo">
        <label for="txt_firstname">Nombre</label>
        <input id="txt_firstname" type="text" bind:value={namefirst} />
      </div>
      <div class="grupo">
        <label for="txt_lastname">Apellido</label>
        <input id="txt_lastname" type="text" bind:value={namelast} />
      </div>
      <div class="grupo">
        <label for="txt_image">link imagen</label>
        <input id="txt_image" bind:value={userpicture} type="text" size="15" />
      </div>
      <div class="grupo">
        <label for="txt_email">email</label>
        <input id="txt_email" type="text" bind:value={useremail} />
      </div>
    </div>
    <!-- fin row -->

    <div class="botones-ficha">
      <button class="btn" on:click|preventDefault={previo}>Añadir</button>
      <button
        class="btn"
        on:click|preventDefault={() => verformularionuevo(false)}>
        Cancelar
      </button>
    </div>

    <div id="mensaje" />

  </form>
</div>
