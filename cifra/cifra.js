const mensagemSecreta = 'minhamensagemsecreta';

console.log(mensagemSecreta);

function cifraMensagem(mensagem, movimentos) {
  mensagem = mensagem.split('').map(caractere => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + movimentos);
  }); 

  return mensagem.join('');
}

const mensagemCifrada = cifraMensagem(mensagemSecreta, 3);

console.log(mensagemCifrada);

function decifraMensagem(mensagem, movimentos) {
  mensagem = mensagem.split('').map(caractere => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere - movimentos);
  }); 

  return mensagem.join('');
}

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3);

console.log(mensagemDecifrada);

console.log(cifraMensagem('alura', 3))