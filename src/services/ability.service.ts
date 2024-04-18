import { mockAbilities } from "../mocks/abilities.mock";
import { IAbility } from "../models/ability";

export class AbilityService {
  static async getAllAbilities() {
    return mockAbilities;
  }

  static async getAbilityById(abilityId: number) {
    return await mockAbilities.find((ability: IAbility) => ability.id === abilityId);
  }
}