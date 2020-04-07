function teste(){
    console.log("Hello word")
    const nomeDaTarefa = document.getElementById("novaTarefa").value
    document.getElementById("espacotexto").innerHTML="<p>"+nomeDaTarefa+"</p>"

}
teste()