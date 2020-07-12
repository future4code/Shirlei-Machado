**Exercício 1**
* a) Devolve diretamente a resposta do banco.
* b) const searchActor = async (name: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = ${"name"}
    `)
    console.log(result)
    return result 
    
  } catch (error) {

    console.log(error)
  }
}
searchActor("Moacyr");
* c)