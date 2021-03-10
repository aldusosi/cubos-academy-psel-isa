function solucao(jogadas) {
    const jog = jogadas
    let quant = jogadas.length / 2;
    let quant0 = 0;
      for(let i = 0; i < jogadas.length; i++){
          if(jogadas[i] == 0){
              quant0 = quant0+1;
              
          }
      }
      
      if(quant0 == quant){
                  console.log("true")
              }else{
                  console.log("false")
              }
      
  }