
import { IdGenerator } from "../services/IdGenerator";
import { BandaInputDTO } from "../model/Banda";
import { BandaDatabase } from "../data/BandaDataBase";


export class BandaBusiness {

    async createBand(band: BandaInputDTO) {

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const bandaDatabase = new BandaDatabase()
        await bandaDatabase.createBanda(id, banda.name, banda.musicGenre, banda.responsible)
    }

    async getBandaById(id: string) {

        const bandaDatabase = new BandaDatabase()
        return await bandaDatabase.getBandaById(id)
    }

    async getBandaByName(name: string) {

        const bandaDatabase = new BandaDatabase()
        return await bandaDatabase.getBandaByName(name)
    }
}