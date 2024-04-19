
import { ItemService } from "../services/item.service";

export class ItemController {
  static async getItems(req: any, res: any) {
    try {
      const items = await ItemService.getAllItems();
      res.json(items);
    } catch (err: any ) {
      res.status(500).json({
        error: err.message
      });
    }
  }

  static async getItemById(req: any, res: any) {
    try {
      const itemId = +req.params.id;
      const item = await ItemService.getItemById(itemId);
      if (!item) {
        res.status(400).json({ error: `Item with ID ${itemId} does not exist!` })
      }
      res.json(item);
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  }

  static async getItemsByCategory(req: any, res: any) {
    try {
      const itemCategory = req.params.category;
      const item = await ItemService.getItemsByCategory(itemCategory);
      if (item.length === 0) {
        res.status(400).json({ error: `No items with category ${itemCategory} were found!` })
      } else {
        res.json(item);
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  }
}