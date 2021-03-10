function solucao(velocidade, aceleracao, distanciaObjeto) {
    let n1 = velocidade;
    let n2 = aceleracao;
    let n3 = distanciaObjeto;
    let den = n1 * n1;
    let num = 2 * n2;
    let soma = den/num * (-1)
    
    if(soma > n3){
        console.log("COLISAO A FRENTE");
    }else if(soma == n3){
        console.log("NAO ACELERE");
    }else{
        console.log("CAMINHO SEGURO");
    }
}