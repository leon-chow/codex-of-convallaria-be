import { IAbility } from "../models/ability";

export const mockAbilities: IAbility[] = [
  {
    id: 2,
    name: "Dark Slash",
    energy: 2,
    cooldown: 3,
    description: "Cleaves in the direction he is facing",
    range: "1",
    height: "1-3",
    target: "Multi",
  },
  {
    id: 1,
    name: "Spear of Longus",
    energy: 3,
    cooldown: 3,
    description: "Hurls a banner on the battlefield",
    range: "3-5",
    height: "1-3",
    target: "Multi",
  }
];