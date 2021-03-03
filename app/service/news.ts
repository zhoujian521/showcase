import { Service } from "egg";

export interface NewsItem {
  id: string;
  title: string;
}
export default class NewsService extends Service {
  public async list(page?: string): Promise<NewsItem[]> {
    // (this.app as any).jenkins.all_jobs(function (error, data) {
    //   if (error) {
    //     console.log(error);
    //   }
    //   console.log(data);
    // });

    return [{ id: page || "0", title: "title" }];
  }
}
