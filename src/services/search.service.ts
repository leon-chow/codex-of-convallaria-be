/* character searches 
  - search by name
  - search by class
  - search by faction
  - popular suggestions  
  - dropdown
*/

import { ParsedUrlQuery } from "querystring";
import { mockCharacters } from "../mocks/character.mock";
import { ICharacter, ICharacterFilters } from "../models/character";
import { CharacterService } from "./character.service";
import { popularSearches } from "../mocks/popularSearches.mock";
import { compareDates } from "../utils/string";

export class SearchService {
  static async searchCharactersByFilters(urlQuery?: ParsedUrlQuery) {
    let characters = mockCharacters;
    for (const param in urlQuery) {
      if (param === "gender" || param === "class" || param ==="rarity" || param === "bannerType") {
        characters = characters.filter((character) => {
          return character[param]?.toLowerCase() === urlQuery[param];
        });
      } else if (param === "faction") {
        characters = characters.filter((character) => {
          return character[param].some(faction => urlQuery[param]?.includes(faction));
        });
      } else if (param === "releaseDate") {
        const occurrence = urlQuery.occurrence;
        const releaseDate = urlQuery.releaseDate as string || "";
        const filteredCharacters: ICharacter[] = [];
        for (const character of characters) {
          if (compareDates(character.releaseDate, releaseDate) === occurrence) {
            filteredCharacters.push(character);
          } 
        };
        characters = filteredCharacters;
      }
    }
    return characters;
  }

  static async getPopularSearches() {
    return popularSearches;
  }
}