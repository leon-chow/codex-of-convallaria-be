export interface IStory {
  id: number;
  title: string;
  description: string;
  subChapters: IChapter[];
  rewards?: IReward[];
  materials: IMaterial[];
  requirements: IRequirement[];
}

interface IRequirement {
  name: string;
  value: string;
}

interface IMaterial {
  id: number;
  name: string;
  type: string;
  description: string;
  imageUrl: string;
  rarity: string;
  amount: number;
}

interface IChapter {
  id: number;
  title: string;
  description: string;
  stageNumber: string;
  events: string;
  rewards: IReward[];
}

interface IReward {
  id: number;
  type: string;
  name: string;
  description: string;
  imageUrl: string;
  rarity: string;
  amount?: number;
}