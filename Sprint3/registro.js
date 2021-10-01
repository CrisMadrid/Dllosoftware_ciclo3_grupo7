let registros = [];

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

function ordenarArreglo(arreglo) {
  //Implementar la función ordenarArreglo(arreglo), donde se ordenará el arreglo de registros a partir del campo Apellido.
  //La función debe retornar el arreglo ordenado e imprimir por consola el contenido del mismo.

  var registrosOrdenados = arreglo.slice().sort(function(a, b){
    let x = a.apellido.toLowerCase();
    let y = b.apellido.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  // console.log("ordenarArreglo");
  console.log(registrosOrdenados);
  return registrosOrdenados;
}

function filtrarCorreo(arreglo) {
  //Filtrar aquellos registros que contengan en el campo Correo, correos con direcciones de gmail.com
  // La función debe de retornar el listado de los registros que cumplen las características del filtro e imprimir en consola dicho listado.

  var listadoFiltrado = arreglo.filter((miRegistro) =>
    miRegistro.correo.includes("gmail.com")
  );

  // console.log("filtrarCorreo");
  console.log(listadoFiltrado);

  return listadoFiltrado;
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.filtrarCorreo = filtrarCorreo;

