<script>
  import {getContext} from 'svelte'
  import {afterUpdate} from 'svelte';
  import flash from '../codigo/flash.js';
  import {slide} from "svelte/transition";

  export let usuario;
  export let index;

  //context
  // el boton elimina enlaza con function en archivo padre
  const eliminaraqui = getContext('borrar')
  const modificaraqui = getContext('modificar')

  let varDestello;

  afterUpdate(() => {
    flash(varDestello);
  });

  let vermasdatos = false;
  let masomenos = "+"

  function verMas() {
    vermasdatos = !vermasdatos;
    masomenos == "+" ? masomenos = "-" : masomenos = "+"
  }
</script>

<div class="card fluid">
  <div class="row">
  <div class="col-sm-4  col-md-3">
    <div class="thumb" class:thumb-placeholder="{!usuario.picture.medium}">
      {index}
      {#if usuario.picture.medium}
          <img src={usuario.picture.medium} alt="imagen" />
          <p>{usuario._id}</p>
        {:else}
          <p>No imagen  {usuario._id}</p> 
        {/if}
      </div>
  </div>

  <elemDestello bind:this={varDestello}>
  <div class="col-sm-8  col-md-9">
    <div class="usuario-data">
      <h3>{usuario.name.first}</h3>
      <h4>{usuario.name.last}</h4>
    </div>
  </div>
  </elemDestello>
    </div>  <!-- fin row -->

   <div class="row">
   <div class="col-sm-12  col-md-12">
    <button class="btn" on:click={verMas}> <i class="fas fa-caret-down" />{masomenos}</button>
    
    {#if vermasdatos}
      <div class="description" transition:slide >  <!-- si se ponen marcas abajo, slide a golpes -->
        {usuario.email}<br>
        {usuario.name.last}
      </div>
      <div class="botones-ficha" transition:slide>
        <button class="btn" on:click={modificaraqui(usuario._id)}>
          <i class="fas fa-pen"/>editar</button>
        <button class="btn" on:click={eliminaraqui(usuario._id)}>
          <i class="fas fa-trash"/>borrar</button>
      </div>
    {/if}

  </div>
  </div>
</div>

<style>
.botones-ficha{
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
  padding:  1rem;  
  overflow: hidden; 
}

@media screen and (min-width: 320px) {
  .card {
    max-width: 320px;
  }
}

.card.fluid {
  max-width: 100%;
  width: auto;
}

  .thumb {
     background: #ddd
  }

  .thumb-placeholder {
    background: #eee0cd;
    padding: 0rem 1rem 1rem 1rem 
  }

  img {
    /* width: 100%;
    height: 100%; 
    */
    object-fit: cover;
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
    /* padding: 1rem; */
  }
</style>