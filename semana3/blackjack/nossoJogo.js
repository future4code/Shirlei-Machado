/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

      console.log("Bem vindo ao jogo de cartas BlackJack!")
         let cartasPc= "computador - cartas:", cartasUsuario= "usuario - cartas:", pontosPc=0, pontosUsuario=0;

            if(confirm("Vamos iniciar uma nova rodada?")){
                  for(let i=0; i<2; i++){
                     let carta= comprarCarta();
                        cartasPc+=carta.texto+'';
                        pontosPc+=carta.valor;
                        carta=comprarCarta();
                        cartasUsuario+=carta.texto+'';
                        pontosUsuario+=carta.valor;                  
                  }
            
      console.log(cartasUsuario+ '- pontuação' +pontosUsuario);
      console.log(cartasPc+ '-pontuação' +pontosPc);
            
            if((pontosUsuario>pontosPc) && pontosUsuario<= 21 || (pontosPc>21 && pontosUsuario<=21)){
      console.log("O usuário ganhou! :)")         
            
            }  else if((pontosPc>pontosUsuario) && pontosPc<=21 || (pontosUsuario>21 && pontosPc<=21)){
      console.log("Computador ganhou! :(")     

            }else{
       console.log("Empate")        
            }

            }else{
      console.log("It's over!")         
            }

   
     