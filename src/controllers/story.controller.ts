
import { StoryService } from "../services/story.service";

export class StoryController {
  static async getAllChapters(req: any, res: any) {
    try {
      const chapters = await StoryService.getAllChapters();
      res.json(chapters);
    } catch (err: any ) {
      res.status(500).json({
        error: err.message
      });
    }
  }

  static async getChapterById(req: any, res: any) {
    try {
      const chapterId = +req.params.id;
      const chapter = await StoryService.getChapterById(chapterId);
      if (!chapter) {
        res.status(400).json({ error: `Chapter with ID ${chapterId} does not exist!` })
      }
      res.json(chapter);
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  }

  static async getChapterByName(req: any, res: any) {
    try {
      const chapterName = req.params.chapterName;
      const chapter = await StoryService.getChapterByName(chapterName);
      if (!chapter) {
        res.status(400).json({ error: `No chapter with name ${chapterName} was found!` })
      } else {
        res.json(chapter);
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  }
}