import { IStory } from "../models/story";

export const mockChapters: IStory[] = [
  {
    id: 1,
    title: "Chapter 1: Rebellion",
    description: "You find yourself in jail...",
    subChapters: [
      {
        id: 1,
        title: "Fight on!",
        description: "Those who fight on!",
        stageNumber: "1-1",
        events: "X happens",
        rewards: [
          {
            id: 1,
            name: "EXP",
            type: "EXP",
            description: "Experience Points",
            imageUrl: "some url",
            rarity: "1 Star",
            amount: 500,
          },
          {
            id: 2,
            name: "Gold",
            type: "Gold",
            description: "Currency to buy items or level up characters, abilities or items",
            imageUrl: "test",
            rarity: "1 Star",
            amount: 300,
          }
        ]
      }
    ],
    rewards: [
      {
        id: 1,
        name: "EXP",
        type: "EXP",
        description: "Experience Points",
        imageUrl: "some url",
        rarity: "1 Star",
      },
      {
        id: 2,
        name: "Gold",
        type: "Gold",
        description: "Currency to buy items or level up characters, abilities or items",
        imageUrl: "test",
        rarity: "1 Star",
      }
    ],
    materials: [
      {
        id: 5,
        name: "Stone",
        type: "Item",
        description: "Large stone",
        imageUrl: "test",
        rarity: "1 Star",
        amount: 1,
      }
    ],
    requirements: [
      {
        name: "Combat Power",
        value: "10k+"
      },
      {
        name: "Account level",
        value: "Lv. 5+"
      }
    ],
  },
];