<svelte:options immutable={true} /> 

<script>
  import FichaUsuario from "./FichaUsuario.svelte";
  import { scale, blur, fade, slide, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  export let lista_usuarios = [];
  
</script>

<section>
  <h3>Listado Usuarios</h3>
  {#each lista_usuarios as usuario, index (usuario._id)}
    <div animate:flip transition:fly={{ delay: index * 700, x: 200 }}>
      <FichaUsuario {usuario} {index} /> 
    </div>
  {:else}
    <h3>No hay usuarios en la lista</h3>
  {/each}
</section>


<style>

  h3 {
    font-style: normal;
    padding: 0.25rem 0 0 1rem ;
  }

  section {
    width:100%;
  }

</style>