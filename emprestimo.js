function solucao(ganhos, serasaScore, mesesParaPagar) {
    let n1 = ganhos;
    let n2 = serasaScore;
    let n3 = mesesParaPagar;
    let soma = 0;
    
    if(n2 < 300){
        soma = (n1*3+(n1*(3/100)))/n3;
        
       
       }else if(n2 < 700){
           soma = (n1*3+(n1*(9/100)))/n3;
           
       }else{
           soma = (n1*3+(n1*(15/100)))/n3;
           
       }
    console.log(soma);
  
}