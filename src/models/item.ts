export interface IItem {
  name: string,
  description: RankingDescription[],
  rarity: string,
  classification: string,
  location: string,
  imageUrl: string,
}

interface RankingDescription {
  numberOfStars: number,
  description: string,
}