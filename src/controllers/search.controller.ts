
import { CharacterService } from "../services/character.service";
import { SearchService } from "../services/search.service";
import url from "url";

export class SearchController {
  static async getFilteredCharacters(req: any, res: any) {
    const urlParams = url.parse(req.url, true).query;

    try {
      const characters = await SearchService.searchCharactersByFilters(urlParams);
      if (characters) {
        res.status(200).json(characters);
      }
    } catch (err: any ) {
      res.status(500).json({
        error: err.message
      });
    }
  }
  static async getPopularSearches(req: any, res: any) {
    try {
      const popularSearches = await SearchService.getPopularSearches();
      res.status(200).json(popularSearches);
    } catch (err: any) {
      res.status(500).json({
        error: err.message
      })
    }
  }
}