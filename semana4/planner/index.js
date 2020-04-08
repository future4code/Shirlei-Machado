function adicionarTarefa(){
   function teste(){
       const meuInput= document.getElementById("novaTarefa").Value;
       const diaSemana = document.getElementById("planner").value;
        if(meuInput !==""){
                switch(diaSemana){
                    case "segunda":
                        document.getElementById("segunda").innerHTML+="<li>"+meuInput+"</li>"
                }
        }


       
    }
   