let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    };

    contrasena.value = password;

    verificarSeguridad(password);
};

function limpiar() {
    
    cantidad.value = "";
    contrasena.value = "";
};

function verificarSeguridad(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#$%^&*()]/.test(password);

    if (!tieneMayuscula || !tieneNumero || !tieneEspecial) {
        alert("La contraseña es débil. Debe contener al menos una mayúscula, un número y un carácter especial.");
    } else {
        alert("La contraseña es fuerte.");
    };
};
