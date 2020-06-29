<script>
  import { getContext } from "svelte";
  import { afterUpdate } from "svelte";
  import flash from "../codigo/flash.js";
  import { slide } from "svelte/transition";

  export let usuario;
  export let index;

  //context
  // el boton elimina enlaza con function en archivo padre
  const eliminaraqui = getContext("borrar");
  const modificaraqui = getContext("modificar");

  let varDestello;

  afterUpdate(() => {
    flash(varDestello);
  });

  let vermasdatos = false;
  let masomenos = "+";

  function verMas() {
    vermasdatos = !vermasdatos;
    masomenos == "+" ? (masomenos = "-") : (masomenos = "+");
  }
</script>

<style>
  .card__img img {
    width: 90px;
    border-radius: 100%;
    padding: 0 20px;
  }
  .card__content{
    padding: 0 55px 0px 0px;
  }
  .card__content--name {
    margin-top: 14px;
    font-size: 1.1em;
  }
  .card__userid {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(37, 98, 155);
    color: white;
    font-weight: 700;
    padding: 2px 6px;
  }
  .card__buttons {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
  }
  .card__buttons > button:hover {
    background-color: rgb(116, 116, 116);
  }
  .card__buttons--btnEditar {
    cursor: pointer;
    background: none;
    border: none;
    padding: 5px;
    background-color: rgb(216, 216, 216);
    border-radius: 30px;
    color: rgb(17, 165, 17);
    margin-right: 3px;
  }
  .card__buttons--btnEliminar {
    cursor: pointer;
    background: none;
    border: none;
    padding: 6px;
    background-color: rgb(216, 216, 216);
    border-radius: 30px;
    color: rgb(184, 61, 61);
  }
</style>

<div class="card__img">
  {#if usuario.picture.medium}
    <img src={usuario.picture.medium} alt="imagen" />
  {:else}
    <img src="/assets/foto-perfil-unknown.svg" alt="imagen" />
  {/if}
</div>

<div class="card__content" bind:this={varDestello}>
  <h1 contenteditable="true" class="card__content--name">{usuario.name.first} {usuario.name.last}</h1>
</div>
<div class="card__buttons">
  <button
    class="card__buttons--btnEditar"
    on:click={modificaraqui(usuario._id)}>
    <i class="fas fa-pen" />
  </button>
  <button
    class="card__buttons--btnEliminar"
    on:click={eliminaraqui(usuario._id)}>
    <i class="fas fa-trash" />
  </button>
</div>
<div class="card__userid">{index}</div>
<!-- fin row -->

<!--  <div class="row">
  <div class="col-sm-12 col-md-12">
    <button class="btn" on:click={verMas}>
      <i class="fas fa-caret-down" />
      {masomenos}
    </button>

    {#if vermasdatos}
      <div class="description" transition:slide>
        {usuario.email}
        <br />
        {usuario.name.last}
      </div>
      <div class="botones-ficha" transition:slide>
        <button class="btn" on:click={modificaraqui(usuario._id)}>
          <i class="fas fa-pen" />
          editar
        </button>
        <button class="btn" on:click={eliminaraqui(usuario._id)}>
          <i class="fas fa-trash" />
          borrar
        </button>
      </div>
    {/if}

  </div>
</div>  -->
