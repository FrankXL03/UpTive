let valiNom = document.getElementById('username');
let valiPass = document.getElementById('password');

let msgError = document.getElementById('error');

function enviarFormulario(){    


var msgErrortrue = [];

if (valiNom.value === '' || valiNom.value === null){

    msgErrortrue.push('Ingresa tu nombre');
}

if (valiPass.value === '' || valiPass.value === null){

    msgErrortrue.push('Ingresa tu password');
}

  msgError.innerHTML = msgErrortrue.join(', ');

return false;
}