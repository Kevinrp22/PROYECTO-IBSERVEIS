<script>
export let verformularionuevo;
</script>

<nav class="nav">
    <h2>Gestión usuarios</h2>
      <button type="button" class="btn" on:click|preventDefault={() => verformularionuevo(true)}>
         Añadir usuario
      </button>
</nav>
 

<style>

 h2 {
  font-weight: normal;
	text-transform: capitalize;
  color: var(--mainWhite);
  margin-bottom: 0px;
}

.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
  background: var(--primaryColor);
  box-shadow: var(--lightShadow);
}

 </style>
