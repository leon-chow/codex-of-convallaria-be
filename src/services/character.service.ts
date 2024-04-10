import { mockCharacters } from "../mocks/character.mock";

export class CharacterService {
  static async getAllCharacters() {
    return mockCharacters;
  }

  static async getCharacterById(characterId: number) {
    return await mockCharacters.find((character) => character.id === characterId);
  }
}