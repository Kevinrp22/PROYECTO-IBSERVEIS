<script>
import { getContext } from "svelte";

const funcionSidebar = getContext("estadoSidebar-nav")
console.log(funcionSidebar)


</script>

<style>
  header {
    background-color: rgb(54, 102, 192);
    padding: 20px;
  }
</style>

<header>
  <button class="btn" on:click={funcionSidebar}>
    <i class="fas fa-bars" />
  </button>
  <nav />

</header>
