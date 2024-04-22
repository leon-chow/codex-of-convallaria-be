import { mockChapters } from "../mocks/stories.mock";
import { IStory } from "../models/story";
import { desluggifyText } from "../utils/string";

export class StoryService {
  static async getAllChapters() {
    return mockChapters;
  }

  static async getChapterById(storyId: number) {
    return await mockChapters.find((story: IStory) => story.id === storyId);
  }

  static async getChapterByName(chapterName: string) {
    console.log(chapterName);
    console.log(desluggifyText(chapterName));
    return await mockChapters.find((chapter: IStory) => chapter.title.toLowerCase().includes(desluggifyText(chapterName.toLowerCase())));
  }
}