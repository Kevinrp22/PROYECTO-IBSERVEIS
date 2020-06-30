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
  export let estaEditando;
  export let modificarUsuario;

  export let agregarUsuario;
  export let verformularionuevo;

  let alertSucces = false;

  //context
  //const agregar = getContext('agregar')
  //se ha optado por pasarlo por props ( agregarusuario solo 1 nivel)

  function previo() {
    validacion = comprueba.validar(namefirst, namelast, useremail, userpicture);
    if (validacion) {
      mensaje.innerHTML = " Datos validos     ";
      if (estaEditando) {
        modificarUsuario({ namefirst, namelast, useremail, userpicture });
      } else {
        agregarUsuario({ namefirst, namelast, useremail, userpicture });
      }
    } else {
      mensaje.innerHTML = "Introduce datos validos    ";
      txt_firstname.focus();
    }
  }
</script>

<style>
  /*     box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1); */
  .btn {
    padding: 5px 10px;
    border-radius: 0;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  .btn-sucessful {
    margin-bottom: 5px;
  }

  .c-page-user {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    box-sizing: border-box;
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color: rgb(153, 86, 86);
    padding: 20px;
  }
  .user-page__option {
    background-color: white;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .user-option--item {
    cursor: pointer;
    display: flex;
    padding: 15px;
    transition: var(--transition);
  }
  .user-option--item:hover {
    background-color: rgb(62, 73, 99);
  }
  .user-page__content {
    background-color: white;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
  }
  .user-self {
    display: flex;
    align-items: center;
  }
  .user__picture img {
    width: 80px;
    border-radius: 15px;
    margin-right: 15px;
  }
  .user__changepicture {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .user__bottom {
    display: flex;
    flex-direction: column;
  }
  form input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    color: rgb(119, 119, 119);
    font-size: 1em;
    background-color: rgb(255, 255, 255);
  }
  .grupo {
    margin: 10px 0;
  }
  .grupo label {
    color: rgb(58, 58, 58);
    display: block;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 1.1em;
    margin-bottom: 5px;
  }

  .modal-succes {
    position: absolute;
    right: 30px;
    top: 30px;
    background-color: rgba(83, 173, 83, 0.747);
    padding: 20px;
    color: white;
    border-radius: 5px;
  }
  .modal-error {
    position: absolute;
    right: 30px;
    top: 30px;
    background-color: rgba(226, 27, 27, 0.801);
    padding: 20px;
    color:white;
    border-radius: 5px;
  }

  @media screen and (min-width: 768px) {
    .c-page-user {
      grid-template-columns: 1fr 2fr;
      align-items: flex-start;
    }
  }
  @media screen and (min-width: 574px) {
    .user__changepicture {
      flex-direction: row;
    }
    .user__bottom {
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
    .btn-sucessful {
      margin-bottom: 0px;
      margin-right: 5px;
    }
  }
</style>

<div class="c-page-user">
  <div class="user-page__option">
    <div class="user-option--item">
      <span>
        <i class="fas fa-industry" />
      </span>
      <span>General</span>
    </div>
    <div class="user-option--item">
      <span>Opción</span>
    </div>
    <div class="user-option--item">
      <span>Opción</span>
    </div>
    <div class="user-option--item">
      <span>Opción</span>
    </div>
  </div>

  <div class="user-page__content">
    <form>
      <div class="user-self">
        <div class="user__picture">
          <img src={userpicture} alt="" />
        </div>
        <div class="user__changepicture">
          <button class="btn">Subir nueva foto</button>
          <button class="btn">Restablecer foto</button>
        </div>
      </div>
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
          <label for="txt_image">Imagen</label>
          <input
            id="txt_image"
            bind:value={userpicture}
            type="text"
            size="15" />
        </div>
        <div class="grupo">
          <label for="txt_email">E-mail</label>
          <input id="txt_email" type="text" bind:value={useremail} />
        </div>
      </div>
      <!-- fin row -->

      <div class="user__bottom">
        <button class="btn-sucessful" on:click|preventDefault={previo}>
          Guardar Cambios
        </button>
        <button
          class="btn-cancel"
          on:click|preventDefault={() => verformularionuevo(false)}>
          Cancelar
        </button>
      </div>

    </form>
  </div>

  <div id="mensaje" />

  {#if alertSucces}
    <div class="modal-succes">
      <i class="fas fa-check" />
      Datos actualizados con éxito!
    </div>
  {:else}
    <div class="modal-error">
      <i class="fas fa-exclamation-circle" />
      Ocurrió un error
    </div>
  {/if}

</div>
