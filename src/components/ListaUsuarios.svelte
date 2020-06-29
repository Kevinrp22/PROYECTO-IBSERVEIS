<script>
  import FichaUsuario from "./FichaUsuario.svelte";
  import { scale, blur, fade, slide, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  export let lista_usuarios = [];
</script>

<style>
  .card-user {
    cursor: pointer;
    position: relative;
    display: flex;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .card-user:hover {
    box-shadow: 0 0px 11px 0px rgba(0, 0, 0, 0.25),
      0px 0px 0px 0px rgba(0, 0, 0, 0.22);
  }
</style>

<!-- <svelte:options immutable={true} /> -->

{#each lista_usuarios as usuario, index (usuario._id)}
  <div
    class="card-user"
    transition:fly={{ delay:250, x: 200 }}>
    <FichaUsuario {usuario} {index} />
  </div>
{:else}
  <h3>No hay usuarios en la lista</h3>
{/each}
