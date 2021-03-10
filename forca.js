function solucao(palpite, palavra) {
	const des = palpite;
    const pala = palavra;
    let cont = 0;
    
    for(let i=0; i< palavra.length; i++){
        if(des == palavra[i]){
            cont = cont+1;
        }
    }
    
    console.log(cont)
    
}