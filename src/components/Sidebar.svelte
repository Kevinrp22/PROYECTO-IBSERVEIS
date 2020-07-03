<script>
  export let verformularionuevo;
  import { setContext } from "svelte";
  import Navbar from "./Navbar.svelte";

  export let sideEstado;
</script>

<style>
  .active {
    transform: translate3d(0px, 0, 0) !important;
  }
  h2 {
    font-weight: normal;
    text-transform: capitalize;
    color: var(--mainWhite);
    margin-bottom: 0px;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    background-color: var(--colorPrimario);
    position: sticky;
    grid-area: sidebar;
    height: 100vh;
    bottom: 0;
    top: 0;
    transition: width 0.5s ease;
    width: 200px;
    z-index: 11111111111;
  }
  .sidebar__logo {
    padding: 30px 10px;
    color: white;
  }

  .sidebar__blocks {
    display: flex;
    flex-direction: column;
  }
  .sidebar__blocks__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    color: rgb(243, 243, 243);
  }
  .sidebar__blocks__item:hover {
    background-color: #3b4855;
  }
  .sidebar__blocks__item--text {
    margin-left: 10px;
    font-size: 0.9em;
    font-weight: 500;
    width: max-content;
  }

  .sidebar__blocks__item--icon {
    font-size: 15px;
    margin-left: 5px;
    color: white;
  }

  @media screen and (max-width: 574px) {
    .sidebar {
      position: fixed;
      transform: translate3d(-256px, 0, 0);
      transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
    }
    .sidebar.active {
      width: 256px;
    }
    .sidebar.active .sidebar__blocks__item--text {
      opacity: 1;
    }
  }
  @media screen and (max-width: 920px) {
    .sidebar {
      width: 68px;
    }
    .sidebar__blocks__item--text {
      opacity: 0;
    }
  }
</style>

<div class="sidebar" class:active={sideEstado}>
  <div class="sidebar__logo">
    <h2 class="k-title">G.U</h2>
  </div>
  <ul class="sidebar__blocks">
    <li
      class="sidebar__blocks__item"
      on:click|preventDefault={() => verformularionuevo(true)}>

      <span class="sidebar__blocks__item--icon">
        <i class="fas fa-user-plus" />
      </span>
      <span class="sidebar__blocks__item--text">Añadir usuario</span>

    </li>
    <li
      class="sidebar__blocks__item"
      on:click|preventDefault={() => verformularionuevo(true)}>

      <span class="sidebar__blocks__item--icon">
        <i class="fas fa-user-plus" />
      </span>
      <span class="sidebar__blocks__item--text">Añadir usuario</span>

    </li>
    

  </ul>
</div>
