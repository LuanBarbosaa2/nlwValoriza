import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";



class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Incorrect name!");
    }

  }

}

export { CreateTagService };