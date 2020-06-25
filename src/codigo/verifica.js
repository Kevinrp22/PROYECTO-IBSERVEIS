let empiezaLetra = (cadena) => /^[a-zA-Z]/.test(cadena) 
let noestaVacio = (cadena) => cadena.trim() !=0


let validar = (name, title, email, image) => {
  let resultado ="";
  if (
  noestaVacio(name) && empiezaLetra(name)   &&
  noestaVacio(title) && empiezaLetra(title) &&
  noestaVacio(email) && empiezaLetra(email) &&
  noestaVacio(image) && empiezaLetra(image)
  ) resultado = true
  else resultado = false

  return resultado
}

export {validar}

