function solucao(stringCorrompida) {
    let x = stringCorrompida
    let y = [];
    let a = 0;
    let conv = "";
    
    for(let i =0; i <= x.length; i++){
        
        if(x[i] != '!' && x[i] != '@' && x[i] != '#' && x[i] != '$' && x[i] != '%' && x[i] != '&' && x[i] != '*' && x[i] != '(' && x[i] != ")"){
            
            x[i] = ' '
            y[a] = x[i];
            a = a+1;
            
            conv = y.join("");
           
           }
    }
    
    console.log(conv);
}