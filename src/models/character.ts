import { IAbility } from "./ability"

export interface ICharacter {
  name: string;
  id: number;
  gender: string; 
  rarity: string;
  identity: string;
  class: string;
  weapons: string[];
  faction: string[];
  japaneseVA: string;
  releaseDate: string;
  pixelImageUrl: string;
  profileImageUrl: string;
  bio: string;
  abilities: IAbility[];
  recommendations: IRecommendedGroup[];
  baseStats: IBaseStats;
  bannerType?: string;
}

export interface ICharacterFilters {
  rarity?: string;
  gender?: string;
  class?: string;
  faction?: string;
  releaseDate?: string;
}

interface IBaseStats {
  hp?: number;
  atk?: number;
  def?: number;
  magAtk?: number;
  magDef?: number;
  speed?: number;
}

interface IRecommendedGroup {
  weapons?: IRecommendation[];
  equipment?: IRecommendation[];
  tarot?: IRecommendation[];
  abilities?: IRecommendation[];
}

interface IRecommendation {
  item: string;
  description: string;
}