<script>
  import { setContext } from "svelte";
  import Navbar from "./components/Navbar.svelte";
  import ListadoUsuarios from "./components/ListaUsuarios.svelte";
  import FormuNuevoUsuario from "./components/FichaNueva.svelte";
  // datos
  import usersData from "./others/list";

  // variables
  let lista_usuarios = [...usersData];
  let estaNuevo = false;

  //variables para editar usuario
  let set_id = null;
  let setnamefirst = "name1";
  let setnamelast = "name2";
  let setuseremail = "email@prueba.es";
  let setuserpicture = "https://randomuser.me/api/portraits/med/women/7.jpg";

  //context
  setContext("borrar", eliminarUsuario); // con Context por estar a 2 niveles (app->lista->ficha)
  setContext("modificar", setModificarUsuario);
  // setContext('agregar',agregarUsuario)  // se ha optado por hacerlo con props

  //reactive
  $: estaEditando = set_id ? true : false; //si exite set_id es q se esta editando

  //functions
  function eliminarUsuario(id) {
    lista_usuarios = lista_usuarios.filter(dato => dato._id !== id);
    //crea nuevo array con todo los id que NO son el que elimina
  }

  function setModificarUsuario(id) {
    let modifusuario = lista_usuarios.find(item => item._id === id);
    verformularionuevo(true);
    set_id = modifusuario._id;
    setnamefirst = modifusuario.name.first;
    setnamelast = modifusuario.name.last;
    setuseremail = modifusuario.email;
    setuserpicture = modifusuario.picture.medium;
  }

  function modificarUsuario({ namefirst, namelast, useremail, userpicture }) {
    lista_usuarios = lista_usuarios.map(item => {
      return item._id === set_id
        ? {
            ...item, // ... devuelve propiedades ,=sobrescribe
            name: { first: namefirst, last: namelast },
            email: useremail,
            picture: { medium: userpicture }
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
        last: namelast
      },
      email: useremail,
      picture: {
        medium: userpicture
      }
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
</script>

<style>
  header {
    background-color: var(--colorPrimario);
  }
  .page {
    background-color: rgb(128, 166, 236);
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
    height: 100%;
    background-color: white;
    box-sizing: border-box;
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
</style>

<svelte:options immutable={true} />
<!-- al eliminar 1 usuario, no parece que actue "immutable" ??? -->
<header>
  <Navbar {verformularionuevo} />
</header>
<main>
  {#if estaNuevo}
    <div class="form-user">
      <FormuNuevoUsuario
        {agregarUsuario}
        {verformularionuevo}
        namefirst={setnamefirst}
        namelast={setnamelast}
        useremail={setuseremail}
        userpicture={setuserpicture}
        {estaEditando}
        {modificarUsuario} />
    </div>
  {/if}

  <div class="page">
    <h3 class="k-title k-padding">Listado Usuarios</h3>
    <div class="c-usuarios k-grid">
      <ListadoUsuarios {lista_usuarios} />
    </div>
  </div>

</main>
