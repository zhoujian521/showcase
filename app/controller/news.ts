import { Controller } from "egg";

export default class NewsController extends Controller {
  public async getList() {
    const { ctx, service } = this;
    const { id: newsId } = ctx.query;
    const result = await service.news.list(newsId);
    return (ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    });
  }
}
