import { IItem } from "../models/item";

export const mockItems: IItem[] = [
  {
    id: 1,
    name: "Axe",
    description: {
      numberOfStars: 5,
      description: "Standard axe for battle"
    },
    rarity: "5 Stars",
    type: "Weapon",
    location: [
      "3-1",
      "3-2",
      "3-3",
      "Crafting",
    ],
    imageUrl: "some url",
  },
  {
    id: 2,
    name: "Sword",
    description: {
      numberOfStars: 5,
      description: "Standard sword for battle"
    },
    rarity: "5 Stars",
    type: "Weapon",
    location: [
      "2-1",
      "2-2",
      "2-3",
      "Crafting",
    ],
    imageUrl: "some url",
  },
];