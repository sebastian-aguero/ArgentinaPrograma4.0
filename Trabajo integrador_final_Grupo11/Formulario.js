const usuarios = []

const formularioRegistro = document.querySelector(".form")
const contenedorHTML = document.querySelector("#contenedorUsuarios")

const renderizarUsuarios = () => {
  contenedorHTML.innerHTML = ""
  for (const usuario of usuarios) {
    contenedorHTML.innerHTML += `
        <div class="card-usuario">
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Email: <strong>${usuario.email}</strong></p>
            <p>Contraseña: <strong>${usuario.contrasena}</strong></p>
            <button class="btn-eliminar" id="btn-eliminar-${usuario.id}">X</button>
        </div>
        `
  }
  const btnsEliminar = document.getElementsByClassName("btn-eliminar")
  for (const btnEliminar of btnsEliminar) {
    btnEliminar.addEventListener("click", (event) => {
      const idUsuarioEliminar = event.target.id.split("-").pop()
      const posisionUsuario = usuarios.findIndex(usuario => usuario.id == idUsuarioEliminar)
      usuarios.splice(posisionUsuario, 1)
      renderizarUsuarios()
    })
  }
}
let contadorId = 0
formularioRegistro.addEventListener("submit", (event) => {
  event.preventDefault()
  usuarios.push({
    nombre: formularioRegistro.nombreCompleto.value,
    email: formularioRegistro.correoElectronico.value,
    contrasena: formularioRegistro.contrasena.value,
    id: contadorId++
  })
  formularioRegistro.reset()
  renderizarUsuarios()

})
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('usuario').value;
  if (usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }
  var clave = document.getElementById('clave').value;
  if (clave.length < 6) {
    alert('La clave no es válida');
    return;
  }
  this.submit();
}