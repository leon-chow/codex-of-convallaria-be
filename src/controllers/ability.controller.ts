
import { AbilityService } from "../services/ability.service";

export class AbilityController {
  static async getAbilities(req: any, res: any) {
    try {
      const abilities = await AbilityService.getAllAbilities();
      res.status(200).json(abilities);
    } catch (err: any ) {
      res.status(500).json({
        error: err.message
      });
    }
  }

  static async getAbilityById(req: any, res: any) {
    try {
      const abilityId = +req.params.id;
      const ability = await AbilityService.getAbilityById(abilityId);
      if (!ability) {
        res.status(400).json({ error: `Ability with ID ${abilityId} does not exist!` })
      }
      res.status(200).json(ability);
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  }
}