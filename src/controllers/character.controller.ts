
import { CharacterService } from "../services/character.service";

export class CharacterController {
  static async getCharacters(req: any, res: any) {
    try {
      const characters = await CharacterService.getAllCharacters();
      res.status(200).json(characters);
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
      if (!character) {
        res.status(400).json({ error: `Character with ID ${characterId} does not exist!` })
      }
      res.status(200).json(character);
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  }

  static async getCharacterByName(req: any, res: any) {
    try {
      const characterName = req.params.name;
      const character = await CharacterService.getCharacterByName(characterName);
      if (!character) {
        res.status(400).json({ error: `Character with name ${characterName} does not exist!` })
      }
      res.status(200).json(character);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}