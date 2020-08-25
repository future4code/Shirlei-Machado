import { BaseDatabase } from "./BaseDatabase";
import { createBanda } from "../model/Banda";


export class BandaDatabase extends BaseDatabase {

  private static TABLE_NAME = "LAMA_BANDAS";

  public async createBanda(
    id: string,
    name: string,
    music_genre: string,
    responsible: string

  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          music_genre,
          responsible
        })
        .into(BandaDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandaById(Id: string): Promise<createBanda> {
    const result = await this.getConnection()
      .select("*")
      .from(BandaDatabase.TABLE_NAME)
      .where({ Id });

    return createBanda.toBandaModel(result[0]);
  }

  public async getBandaByName(name: string): Promise<createBanda> {
    const result = await this.getConnection()
      .select("*")
      .from(BandaDatabase.TABLE_NAME)
      .where({ name });

    return createBanda.toBandaModel(result[0]);
  }
}

