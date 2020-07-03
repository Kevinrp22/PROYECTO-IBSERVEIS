<script>
  import { onMount } from "svelte";
  import { setContext } from "svelte";
  import { scale, blur, fade, slide, fly } from "svelte/transition";
  import Sidebar from "./components/Sidebar.svelte";
  import ListadoUsuarios from "./components/ListaUsuarios.svelte";
  import FormuNuevoUsuario from "./components/FichaNueva.svelte";
  import PaginaUser from "./components/PaginaUser.svelte";
  import Navbar from "./components/Navbar.svelte";

  onMount(() => {
    // Una vez el componente está montado entonces...
    window.addEventListener("click", (e) => {
      console.log(e.target);
      let sidebar = document.querySelector(".sidebar");
      let barra = document.querySelector(".btn-barra");
      if (e.target != barra && e.target != sidebar) {
        cerrarSidebar();
      }
    });
  });

  // datos
  import usersData from "./others/list";

  // variables
  let lista_usuarios = [...usersData];
  let estaNuevo = false;
  let sideEstado = false;
  let estadoPerfil = false;

  //variables para editar usuario
  let set_id = null;
  let setnamefirst = "Nombre";
  let setnamelast = "Apellido";
  let setuseremail = "email@gmail.es";
  let setuserpicture = "https://randomuser.me/api/portraits/med/women/2.jpg";

  //context
  setContext("borrar", eliminarUsuario); // con Context por estar a 2 niveles (app->lista->ficha)
  setContext("verperfil", verPerfil);
  setContext("cerrarperfil", cerrarPerfil);
  // setContext('agregar',agregarUsuario)  // se ha optado por hacerlo con props

  //reactive
  $: estaEditando = set_id ? true : false; //si exite set_id es q se esta editando

  //functions
  function eliminarUsuario(id) {
    lista_usuarios = lista_usuarios.filter((dato) => dato._id !== id);
    //crea nuevo array con todo los id que NO son el que elimina
  }

  function setModificarUsuario(id) {
    let modifusuario = lista_usuarios.find((item) => item._id === id);
    verformularionuevo(true);
    set_id = modifusuario._id;
    setnamefirst = modifusuario.name.first;
    setnamelast = modifusuario.name.last;
    setuseremail = modifusuario.email;
    setuserpicture = modifusuario.picture.medium;
  }

  function modificarUsuario({ namefirst, namelast, useremail, userpicture }) {
    lista_usuarios = lista_usuarios.map((item) => {
      return item._id === set_id
        ? {
            ...item, // ... devuelve propiedades ,=sobrescribe
            name: { first: namefirst, last: namelast },
            email: useremail,
            picture: { medium: userpicture },
          }
        : { ...item }; //sino , develve el mismo sin tocarlo
    });

    asignarVacios();
  }

  function agregarUsuario({ namefirst, namelast, useremail, userpicture }) {
    let nuevousuario = {
      _id: new Date().toISOString(),
      name: {
        first: namefirst,
        last: namelast,
      },
      email: useremail,
      picture: {
        medium: userpicture,
      },
    };

    lista_usuarios = [nuevousuario, ...lista_usuarios];

    //console.log(lista_usuarios)
    namefirst = "-"; //etc title, image..
    estaNuevo = false;
    set_id = null;
  }

  function verformularionuevo(ver) {
    ver ? (estaNuevo = true) : asignarVacios();
  }

  function asignarVacios() {
    estaNuevo = false;
    set_id = null;
    setnamefirst = "name1";
    setnamelast = "name2";
    setuseremail = "email@prueba.es";
    setuserpicture = "https://randomuser.me/api/portraits/med/women/7.jpg";
  }

  function toggleSidebar() {
    sideEstado = !sideEstado;
    console.log("HOLAAA");
  }

  function verPerfil(id) {
    estadoPerfil = !estadoPerfil;
    let modifusuario = lista_usuarios.find((item) => item._id === id);
    set_id = modifusuario._id;
    setnamefirst = modifusuario.name.first;
    setnamelast = modifusuario.name.last;
    setuseremail = modifusuario.email;
    setuserpicture = modifusuario.picture.medium;
  }
  function cerrarPerfil() {
    estadoPerfil = false;
  }
  function cerrarSidebar() {
    sideEstado = false;
  }
</script>

<style>
  .contenido-app {
    display: grid;
    grid-template-areas: "sidebar page";
    grid-template-columns: 1fr;
  }

  .page {
    position: relative;
    min-height: 500px;
    grid-area: page;
  }
  .c-usuarios {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .form-user {
    position: absolute;
    z-index: 1000;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    height: 87.57vh;
    min-height: 100%;
    background-color: white;
    box-sizing: border-box;
    padding: 20px;
  }

  @media screen and (min-width: 575px) {
    .contenido-app {
      grid-template-columns: min-content 1fr;
    }
  }
  @media screen and (min-width: 768px) {
    .c-usuarios {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 1200px) {
    .c-usuarios {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1500px) {
    .c-usuarios {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<svelte:options immutable={true} />
<!-- al eliminar 1 usuario, no parece que actue "immutable" ??? -->
<div class="contenido-app">

  <Sidebar {verformularionuevo} {sideEstado} />

  <main>
    <Navbar {toggleSidebar} />

    <div class="page k-grid">
      {#if estaNuevo}
        <div class="form-user" transition:fly={{ x: -200, duration: 1000 }}>
          <FormuNuevoUsuario
            {lista_usuarios}
            {agregarUsuario}
            {verformularionuevo}
            namefirst={setnamefirst}
            namelast={setnamelast}
            useremail={setuseremail}
            userpicture={setuserpicture}
            {estaEditando} />
        </div>
      {/if}

      <h3 class="k-title k-padding">Listado Usuarios</h3>
      <div class="c-usuarios k-grid">
        <ListadoUsuarios {lista_usuarios} />
      </div>
      <PaginaUser
        usuariodata={lista_usuarios}
        {agregarUsuario}
        {verformularionuevo}
        namefirst={setnamefirst}
        namelast={setnamelast}
        useremail={setuseremail}
        userpicture={setuserpicture}
        {estaEditando}
        {modificarUsuario}
        {estadoPerfil} />
    </div>

  </main>
</div>
