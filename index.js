const form = document.getElementById('formulario-contacto');
form.addEventListener('submit', validarDatos);

function validarDatos(e){
    e.preventDefault();

    var nombre = document.getElementById('nombreapellido').value;
    if(nombre.length > 50) {
      alert('El nombre debe tener menos de 50 caracteres');
      return;
    }
    var asunto = document.getElementById('asunto').value;
    if(asunto.length > 50) {
        alert('El asunto debe tener menos de 50 caracteres');
        return;
      }
    var mensaje= document.getElementById('mensaje').value;
      if(mensaje.length > 300) {
          alert('El mensaje debe tener menos de 300 caracteres');
          return;
        }

    form.submit();
}


