<!--

  // immutable arrays
  //https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#removal-and-inserting-of-items

  //store svelte immutable: https://svelte.dev/repl/879e3c36fb4844fc88ba37b962f206d5?version=3.14.0
  //svelte + pouch: https://neighbourhood.ie/blog/2019/05/10/an-offline-first-todo-list-with-svelte-pouchdb-and-couchdb/
  //svelte immutable: https://svelte.dev/tutorial/updating-arrays-and-objects
  // Svelte immutable flash: https://svelte.dev/repl/4301a81c2ead4d85af7673bf9f1a16e8?version=3.16.4

  //DELETE= NO? eliminar, solo marcar como que no se ve
  //Al listar listaContactos, solo ver los marcados si se ven


1) Añadir UPDATE curso Smilga (form)
2) Echar vistazo curso Maximilian como enfoca Firebase (actualiza todo el array o doc a doc)
3) Neighbourhood: Adoptamos su solución  solo cargando 100 primeros resultados (mango queries)



db.changes({
  since: 'now',
  live: true
}).on('change', ActualizaLista);

function eliminausuario{
  elimina en array
  elimina en Pouch
  (al eliminar en Pouch, ActualizaLista llena de nuevo array con lectura local de la base de datos)
  (lo que hay en Pouch son los '100' primeros docs que cumplen condición de busqueda inicial)
  (las condciones de busqueda actualizan los 100 docs que hay en Pouch (sync con Couch))
}

ActualizaLista    https://neighbourhood.ie/blog/2019/05/10/an-offline-first-todo-list-with-svelte-pouchdb-and-couchdb
  async function updateTodos() {
    const allDocs = await db.allDocs({
      include_docs: true
    })
    todos = allDocs.rows.map(row => row.doc)    //CAMBIAR a 100 primeros ordenados por fecha
    // MANGO QUERIES: https://pouchdb.com/guides/mango-queries.html
  }

ALternativa: Firebase + LocalStore  (curso Maximilian)
ALternativas a Firebase: https://dev.to/areknawo/top-3-open-source-firebase-alternatives-for-2020-38kh
Subir imagenes a Drive del usuario?= APIs de Google + Mobile Ionic


-->