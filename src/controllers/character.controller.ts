
import { CharacterService } from "../services/character.service";

export class CharacterController {
  static async getCharacters(req: any, res: any) {
    try {
      const characters = await CharacterService.getAllCharacters();
      res.json(characters);
    } catch (err: any ) {
      res.status(500).json({
        error: err.message
      });
    }
  }

  static async getCharacterById(req: any, res: any) {
    try {
      const characterId = +req.params.id;
      const character = await CharacterService.getCharacterById(characterId);
      res.json(character);
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  }
}