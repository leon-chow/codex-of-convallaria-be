export interface IItem {
  id: number;
  name: string;
  description: IRankingDescription;
  rarity: string;
  type: string;
  location: string[];
  imageUrl: string;
}

interface IRankingDescription {
  numberOfStars: number;
  description: string;
}