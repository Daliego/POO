function saudacao(nome, tratamento) {
    if (tratamento === void 0) { tratamento = 'Sr'; }
    //tratamento = tratamento || 'Sr';
    console.log(tratamento + '.' + ' ' + nome);
}
saudacao('nome', 'tratamento');
