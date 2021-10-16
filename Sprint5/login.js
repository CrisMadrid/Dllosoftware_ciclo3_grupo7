let registros = [/*{correo:"jm20@hotmail.com", contrasena:"12345"},
                {correo:"jmvallejo20@hotmail.com", contrasena:"123"},
                {correo:"vallejo20@hotmail.com", contrasena:"12345"},
                {correo:"jmvallejo@hotmail.com", contrasena:"12345"}
                */{correo: "juan@gmail.com", contrasena: "SecurePassword123"}];

function login(){
    var correoBda = document.getElementById("correo").value;
    var contrasenaBda = document.getElementById("contrasena").value;
    var buscadoraCorr = registros.find(o => o.correo === correoBda);
    var buscadoraCont = registros.find(o => o.contrasena === contrasenaBda);
    if(buscadoraCorr && buscadoraCont) {
        // console.log("Pase el filtro");
        validarCAPTCHA();
        return true;
    }
    else{
        console.log("Correo o Contrasena incorrectos");
        return false;
    }

}

function agregarRegistro() {
  
    function crearObjetoRegistro(n, a, t, c, co) {
      return { nombre: n, apellido: a, telefono: t, correo: c, contrasena: co };
    }
  
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
  
    var miRegistro = new crearObjetoRegistro(nombre,apellido,telefono,correo,contrasena);
  
    registros.push(miRegistro);
  
    // console.log("agregarRegistro");
    console.log(registros);
  
    // ordenarArreglo(registros);
    // filtrarCorreo(registros);
  }
function validarCAPTCHA(valor){
    valorRequerido = 1000;
    if (valor == valorRequerido){
        return true;
    }
    else{
        return false;
    }
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;