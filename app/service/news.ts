import { Service } from "egg";
export default class NewsService extends Service {
  public async list(): Promise<any> {
    return "success";
  }

  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    const { ctx } = this;
    if (result.status !== 200) {
      const errorMsg =
        result.data && result.data.error_msg
          ? result.data.error_msg
          : "unknown error";
      ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      ctx.throw(500, "remote response error", { data: result.data });
    }
  }

  async create() {
    const { ctx } = this;
    // 调用 CNode V1 版本 API
    const result = await ctx.curl("https://cnodejs.org/api/v1/topics");
    // 检查调用是否成功，如果调用失败会抛出异常
    this.checkSuccess(result);
    // 返回创建的 topic 的 id
    // return result.data.topic_id;
    return result;
  }
}
