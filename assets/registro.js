function registro() {

    let name = document.getElementById('name').value
    let lastname = document.getElementById('lastname').value
    let identificaction = document.getElementById('identification').value
    let bloodType = document.getElementById('bloodType').value
    let gender = document.getElementById('bloodType').value
    let age = document.getElementById('age').value
    let mobile = document.getElementById('mobile').value
    let emergencyMobile = document.getElementById('emergencyMobile').value
    let hoy = new Date

    if (!name) {
        return `falta nombre`
    } else if (!lastname) {
        return `falta apellido`
    } else if (!identificaction) {
        return `falta identificación`
    } else if (!bloodType) {
        return `Seleccione tipo sanguineo`
    } else if (!gender) {
        return `Seleccione genero`
    } else if (!age) {
        return `falta edad`
    } else if (!mobile) {
        return `falta celular`
    } else if (!emergencyMobile) {
        return `falta celular de emergencia`
    }

    if (age < 18) {
        return `es menor de 18 años`
    }
    let today = new Date
    if (today.getDay() == 4 && gender !== "femenino") {
        return `acceso denegado, Hoy solo pueden entrar mujeres`
    }
    if (today.getDate() == 5 && gender !== "Masculino") {
        return `acceso denegado, Hoy solo pueden entrar hombres`
    }

    return `!!! PUEDE INGRESAR ¡¡¡`
}