import knex from 'knex';
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";


dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});
/*************************************************************************/

// const getActorById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//     `)
//   console.log(result[0])  
// 	return result[0][0]
// };

// getActorById("004")

/************************************************************************************/

// const searchActor = async (name: string): Promise<any> => {
//   try {
//     const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name LIKE "%${name}%"
//     `)
    
//     return result [0]
    
//   } catch (error) {

//     console.log(error)
//   }
   
// }

// const Actor = searchActor("Moacyr");
// Actor.then( (result) =>{
//  console.log(result)
// } 
//   )

/************************************************************************************/
  
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


/***************************************************************************************/


const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});