import { mockItems } from "../mocks/items.mock";
import { IItem } from "../models/item";

export class ItemService {
  static async getAllItems() {
    return mockItems;
  }

  static async getItemById(itemId: number) {
    return await mockItems.find((item: IItem) => item.id === itemId);
  }

  static async getItemsByCategory(category: string) {
    return await mockItems.filter((item: IItem) => item.type.toLowerCase() === category.toLowerCase());
  }
}