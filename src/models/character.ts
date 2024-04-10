import { Ability } from "./ability"

export interface ICharacter {
  name: string,
  id: number,
  rarity: string,
  identity: string,
  class: string,
  weapons: string[],
  faction: string[],
  japaneseVA: string,
  releaseDate: string,
  pixelImageUrl: string,
  profileImageUrl: string,
  bio: string,
  abilities: Ability[],
  recommendations: IRecommendedGroup[],
  baseStats: IBaseStats,
}

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