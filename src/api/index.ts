import axios from 'axios'
import { IKanji } from '../models/kanji';

abstract class Api {
  
  static readonly path = "https://nyars.org";

  static async getKanji(kanji: string) {
    return await axios.get<IKanji>(`${this.path}/api/dictionary/kanji/entries/${kanji}`)
  }
}

export default Api