import { ICharacter } from "../models/character"

export const mockCharacters: ICharacter[] = [
  {
    name: "Gloria",
    id: 15,
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
      id: 1,
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
            item: "Judgement",
            description: "The Judgement tarot card provides extra HP and Def, which are great stats for Gloria",
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
  },
  {
    name: "Auguste",
    id: 25,
    rarity: "Legendary",
    identity: "Dark Executioner",
    class: "Breaker",
    weapons: ["Sword", "Katana", "Greatsword"],
    faction: ["Union"],
    japaneseVA: "Tokiome JVA",
    releaseDate: "9/15/2023",
    pixelImageUrl: "some image link",
    profileImageUrl: "some other image link",
    bio: "Sone corrupt executioner of the union or something like that",
    abilities: [{
      id: 2,
      name: "Dark Slash",
      energy: 5,
      cooldown: 3,
      description: "Cleaves in the direction he is facing",
      range: "1",
      height: "1-3",
      target: "Multi",
    }],
    recommendations: [
      {
        weapons: [
          {
            item: "Sword",
            description: "Best Weapon for Auguste",
          }
        ],
        equipment: [
          {
            item: "Chest",
            description: "Best chest piece for Auguste",
          }
        ],
        tarot: [
          {
            item: "Death",
            description: "The moon tarot card provides extra HP and Def, which are great stats for Gloria",
          }
        ],
        abilities: [
          {
            item: "Dark Slash",
            description: "Best in slot skill, deals a huge amount of AoE damage to whoever is in front of him",
          }
        ]
      }
    ],
    baseStats: {
      hp: 400,
      atk: 225,
      def: 89,
      magAtk: 159,
      magDef: 62,
      speed: 209,
    },
  },
]