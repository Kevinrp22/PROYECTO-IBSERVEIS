<script>
  import { getContext} from 'svelte'
  import { scale, blur, fade, slide, fly } from "svelte/transition";
  import * as comprueba from '../codigo/verifica.js'
  
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

  //context
  //const agregar = getContext('agregar')  
  //se ha optado por pasarlo por props ( agregarusuario solo 1 nivel)

  function previo() {
    validacion = comprueba.validar(namefirst, namelast, useremail, userpicture)
    if (validacion) {
        mensaje.innerHTML=" Datos validos     "
        if (estaEditando){
          modificarUsuario({namefirst, namelast, useremail, userpicture}) 
        } else {
          agregarUsuario({namefirst, namelast, useremail, userpicture}) 
        }
    } else {
      mensaje.innerHTML = "Introduce datos validos    " 
      txt_firstname.focus()
    }
  }

</script>

<div class="card fluid"  transition:slide>
  <form>
  <div class="row">
    <div class="col-sm-11  col-md-9">
      <div class="usuario-data">
        <label for="txt_firstname">Nombre</label>
        <input id="txt_firstname" type="text" bind:value={namefirst} />
        <label for="txt_lastname">Apellido</label>
        <input id="txt_lastname" type="text" bind:value={namelast} />
        <label for="txt_image">link imagen</label>
        <input id="txt_image" bind:value={userpicture} type="text" size="15" />
      </div>
    </div>
    </div> <!-- fin row -->

    <div class="row">
    <div class="col-sm-12  col-md-12">
      <div class="description">
        <!-- si se ponen marcas abajo, slide a golpes -->
        <label for="txt_email">email </label>
        <input id="txt_email" 
          type="text" bind:value={useremail}/>
      </div>
      <div id="mensaje"></div>
      <div class="botones-ficha">
        <button class="btn" 
          on:click|preventDefault={previo}>   
          {#if estaEditando} Editar {:else} Añadir {/if}
        </button>
        <button class="btn" on:click|preventDefault={() => verformularionuevo(false)}>Cancelar</button>
      </div>
    </div>
    </div>
  </form>
</div>

<style>

  input {
    width: 90%;
    border: none;
    border-bottom: 2px solid #d6d6d6;
    margin-bottom: 1.25rem;
    padding: 0.5rem;
    font-size: 1.2rem;
}
 
 input:focus {
    width: 90%;
    border: none;
    border-bottom: 2px solid #5598D0;
    margin-bottom: 1.25rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    outline-color:#5598D0;
  }



  .botones-ficha {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
  }

  .btn {
    letter-spacing: var(--mainSpacing);
    color: #5598D0;
    border: 2px solid var(--mainGrey);
    padding: 0.2rem .5rem;
    display: block;
    transition: var(--mainTransition);
    cursor: pointer;
    font-size: 1rem;
    border-radius: var(--mainBorderRadius);
    background-color: transparent;
  }

  .btn:hover {
    background: #5598D0;
    color: var(--mainWhite);
  }

  /* Card component CSS variable definitions */
  :root {
    --card-back-color: #f0f0f0;
    --card-fore-color: #111;
    --card-border-color: #ddd;
    --card-section-back-color: #d6d6d6;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    position: relative;
    width: 100%;
    background: var(--card-back-color);
    color: var(--card-fore-color);
    border: 0.0625rem solid var(--card-border-color);
    border-radius: var(--universal-border-radius);
    margin: 1rem;
    padding: 1rem;
    overflow: hidden;
  }

  @media screen and (min-width: 320px) {
    .card {
      max-width: 320px;
    }
  }

  .card.fluid {
    max-width: 100%;
    /* width: auto; */
  }

  .usuario-data {
    /* width: 67%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
  }

  .description {
    border-top: 1px solid #ccc;
    margin: 1rem;
    padding-top: 1rem;
  }
</style>