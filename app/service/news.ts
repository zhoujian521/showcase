import { Service } from "egg";

export interface NewsItem {
  id: string;
  title: string;
}
export default class NewsService extends Service {
  public async list(page?: string): Promise<NewsItem[]> {
    return [{ id: page || "0", title: "title" }];
  }
}
