function encriptar(texto) {
    const llaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return texto.replace(/[eioua]/g, match => llaves[match]);
}

function desencriptar(texto) {
    const llaves = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return texto.replace(/enter|imes|ai|ober|ufat/g, match => llaves[match]);
}

function encriptarTexto() {
    const textoEntrada = document.querySelector('#ingreso_texto').value;
    const textoEncriptado = encriptar(textoEntrada);
    document.querySelector('#mensaje_encriptado').textContent = `Mensaje encriptado: ${textoEncriptado}`;
    document.querySelector('#div_no_mensaje').style.display = 'none';
    document.querySelector('#div_mensaje_encriptado').style.display = 'block';
    document.querySelector('#ingreso_texto').value = '';
}

function desencriptarTexto() {
    const textoEntrada = document.querySelector('#ingreso_texto').value;
    const textoDesencriptado = desencriptar(textoEntrada);
    document.querySelector('#mensaje_encriptado').textContent = `Mensaje desencriptado: ${textoDesencriptado}`;
    document.querySelector('#div_no_mensaje').style.display = 'none';
    document.querySelector('#div_mensaje_encriptado').style.display = 'block';
    document.querySelector('#ingreso_texto').value = '';
}

function copiarTexto() {
    const mensajeEncriptado = document.querySelector('#mensaje_encriptado').textContent;
    const textoACopiar = mensajeEncriptado.replace('Mensaje encriptado: ', '').replace('Mensaje desencriptado: ', '');
    navigator.clipboard.writeText(textoACopiar).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

