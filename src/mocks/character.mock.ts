import { ICharacter } from "../models/character"

export const mockCharacters: ICharacter[] = [
  {
    name: "Gloria",
    rarity: "Legendary",
    identity: "Paladin of Truth",
    class: "Watcher",
    weapons: ["Sword", "Lance"],
    faction: ["Union"],
    japaneseVA: "Saber JVA",
    releaseDate: "9/15/2023",
    pixelImageUrl: "some image link",
    profileImageUrl: "some other image link",
    bio: "Sone paladin of truth or something like that",
    abilities: [{
      name: "Spear of Longus",
      energy: 5,
      cooldown: 3,
      description: "Hurls a banner on the battlefield",
      range: "3-5",
      height: "1-3",
      target: "Multi",
    }],
    recommendations: [
      {
        weapons: [
          {
            item: "Spear",
            description: "Best Weapon for Gloria",
          }
        ],
        equipment: [
          {
            item: "Chest",
            description: "Best chest piece for Gloria",
          }
        ],
        tarot: [
          {
            item: "The Moon",
            description: "The moon tarot card provides extra HP and Def, which are great stats for Gloria",
          }
        ],
        abilities: [
          {
            item: "Spear of Longus",
            description: "Best in slot skill, gives bonus stats to everyone on the team and also provides an AoE effect for those in the range",
          }
        ]
      }
    ],
    baseStats: {
      hp: 318,
      atk: 203,
      def: 71,
      magAtk: 142,
      magDef: 58,
      speed: 215,
    },
  }
]

interface IBaseStats {
  hp?: number,
  atk?: number,
  def?: number,
  magAtk?: number,
  magDef?: number,
  speed?: number,
}

interface IRecommendedGroup {
  weapons?: IRecommendation[],
  equipment?: IRecommendation[],
  tarot?: IRecommendation[],
  abilities?: IRecommendation[]
}

interface IRecommendation {
  item: string,
  description: string
}