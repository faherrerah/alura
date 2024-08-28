const textArea = document.querySelector(".textArea__1"); // Variable almacena información introducida
const mensaje = document.querySelector(".textArea__2"); // Variable almacena información encriptada 
    const imagenMuñeco = document.querySelector(".imagen__muñeco");
    const tituloArticulo2 = document.querySelector(".titulo__articulo__2");
    const parrafoArticulo2 = document.querySelector(".parrafo__articulo__2");
    const articulo2 = document.querySelector(".articulo__2");
    const copiarContainer = document.querySelector(".copiar__button");

function botonEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  
  imagenMuñeco.style.display = "none";
  tituloArticulo2.style.display = "none";
  parrafoArticulo2.style.display = "none";

  mensaje.style.display = "block";
  copiarContainer.style.display = "block";
}

function encriptar(stringEncriptado) {
  let matrisCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],  ["o", "ober"], ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for(let i = 0; i < matrisCodigo.length; i++) {
    if(stringEncriptado.includes(matrisCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrisCodigo[i][0], matrisCodigo[i][1])
    }
  }
  return stringEncriptado;

}

function botonDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";

  imagenMuñeco.style.display = "none";
  tituloArticulo2.style.display = "none";
  parrafoArticulo2.style.display = "none";

  mensaje.style.display = "block";
  copiarContainer.style.display = "block";

}

function desencriptar(stringDesencriptar) {
  let matrisCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptar = stringDesencriptar.toLowerCase();

  for(let i = 0; i < matrisCodigo.length; i++) {
    if(stringDesencriptar.includes(matrisCodigo[i][1])) {
      stringDesencriptar = stringDesencriptar.replaceAll(matrisCodigo[i][1], matrisCodigo[i][0])
    }
  }
return stringDesencriptar;

}


function copiarTexto() {
  const mensaje = document.querySelector(".textArea__2");
  mensaje.select();
  document.execCommand("copy");
  mensaje.value = "";
  mostrarImagenYTexto();
}

function mostrarImagenYTexto() {
  if (window.innerWidth > 1200) {
    imagenMuñeco.style.display = "block";
} else {
    imagenMuñeco.style.display = "none";
}
  tituloArticulo2.style.display = "block";
  parrafoArticulo2.style.display = "block";
  mensaje.style.display = "none";
  copiarContainer.style.display = "none";
}


mensaje.addEventListener("input", function() {
  if (mensaje.value === "") {
      mostrarImagenYTexto();
  }
});