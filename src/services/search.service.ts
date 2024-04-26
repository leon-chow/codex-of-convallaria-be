/* character searches 
  - search by name
  - search by class
  - search by faction
  - popular suggestions  
  - dropdown
*/

import { ParsedUrlQuery } from "querystring";
import { mockCharacters } from "../mocks/character.mock";
import { ICharacter } from "../models/character";
import { popularSearches } from "../mocks/popularSearches.mock";
import { compareDates } from "../utils/string";
import { mockItems } from "../mocks/items.mock";
import { mockAbilities } from "../mocks/abilities.mock";
import { mockChapters } from "../mocks/stories.mock";

export class SearchService {
  // characters
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
        const occurrence = urlQuery.releaseDateOccurence;
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

  // story
  // TODO: Come back later
  /*static async searchStoryByFilters(urlQuery?: ParsedUrlQuery) {
  
  }

  export interface IStory {
    id: number;
    title: string;
    description: string;
    subChapters: IChapter[];
    rewards?: IReward[];
    materials: IMaterial[];
    requirements: IRequirement[];
  }*/

  // abilities
  static async searchAbilitiesByFilters(urlQuery?: ParsedUrlQuery) {
    let abilities = mockAbilities;
    for (const param in urlQuery) {
      if (param === "energy" || param === "cooldown") {
        abilities = abilities.filter((ability) => {
          return ability[param] === Number(urlQuery[param]);
        });
      } else if (param === "range" || param === "height" || param === "target") {
        abilities = abilities.filter((ability) => {
          return ability[param].toLowerCase() === urlQuery[param];
        });
      }
    }
    return abilities;
  }

  // items
  static async searchItemsByFilters(urlQuery?: ParsedUrlQuery) {
    let items = mockItems;
    for (const param in urlQuery) {
      if (param === "rarity" || param === "type") {
        items = items.filter((item) => {
          return item[param]?.toLowerCase() === urlQuery[param];
        });
      } else if (param === "location") {
        items = items.filter((item) => {
          return item[param].some(location => urlQuery[param]?.includes(location));
        });
      }
    }
    return items;
  }

  // misc
  static async getPopularSearches() {
    return popularSearches;
  }
}