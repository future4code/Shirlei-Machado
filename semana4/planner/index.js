function adcionarItem(){
    let textoTarefa = document.getElementById("input-tarefa").value;
    let diaSemana = document.getElementById("select-dia").value;
    document.getElementById(diaSemana).innerHTML += `<p> ${textoTarefa}</p> `
    document.getElementById("input-tarefa").value = ""
    document.getElementById("select-dia").value = ""
}

