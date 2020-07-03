<script>
  export let toggleSidebar;
</script>

<style>
  header {
    display: flex;
    background-color: rgb(54, 102, 192);
    padding: 20px;
    min-height: 50px;
  }
  @media screen and (min-width: 574px){
.btn-barra{
  display: none;
}
  }
</style>

<header>
  <button class="btn btn-barra" on:click={toggleSidebar}>
    <i class="fas fa-bars" />
  </button>
  <h1>IBSERVEIS</h1>
  <nav />

</header>
