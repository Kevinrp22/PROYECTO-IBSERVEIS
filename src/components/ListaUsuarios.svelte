<script>
  import FichaUsuario from "./FichaUsuario.svelte";
  import { scale, blur, fade, slide, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  export let lista_usuarios = [];
</script>

<style>
  .card-user {
    position: relative;
    display: flex;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }
</style>

<!-- <svelte:options immutable={true} /> -->

{#each lista_usuarios as usuario, index (usuario._id)}
  <div class="card-user" animate:flip transition:fly={{ delay: index * 700, x: 200 }}>
    <FichaUsuario {usuario} {index} />
  </div>
{:else}
  <h3>No hay usuarios en la lista</h3>
{/each}
