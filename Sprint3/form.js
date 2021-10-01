function checkNombre(nombre) {
    if (!nombre) {
        return false;
    }
    var textoTieneNumeros = /\d/.test(nombre);
    if (textoTieneNumeros) {
        return false;
    }

    if (nombre.length < 4 || nombre.length > 30) {
        return false;
    }

    return true;
}


function checkApellido(apellido) {
    if (!apellido) {
        return false;
    }
    var textoTieneNumeros = /\d/.test(apellido);
    if (textoTieneNumeros) {
        return false;
    }

    if (apellido.length < 4 || apellido.length > 30) {
        return false;
    }

    return true;
}


function checkTelefono(telefono) {
    if (!telefono) {
        return false;
    }
    telefono = String(telefono);

    if (telefono.length !== 7) {
        return false;
    }

    var textoTieneNumeros = /^([0-9]*)$/.test(telefono);
    if (!textoTieneNumeros) {
        return false;
    }

    return true;
}


function checkCorreo(Correo) {
    if (!Correo) {
        return false;
    }

    var esUnCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo);
    if (!esUnCorreo) {
        return false;
    }

    return true;
}


function checkContrasena(Contrasena) {
    if (!Contrasena) {
        return false;
    }

    var validaContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,15})/.test(Contrasena);
    if (!validaContra) {
        return false;
    }

    return true;
}

// module.exports = {
//     checkContrasena: checkContrasena,
//     checkNombre: checkNombre,
//     checkApellido: checkApellido,
//     checkTelefono: checkTelefono,
//     checkCorreo: checkCorreo,
// };