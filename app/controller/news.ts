import { Controller } from "egg";

// 定义创建接口的请求参数规则
const createRule = {
  accesstoken: "string",
  title: "string",
  tab: { type: "enum", values: ["ask", "share", "job"], required: false },
  content: "string",
};

export default class NewsController extends Controller {
  public async getList() {
    const { ctx, service } = this;
    const result = await service.news.list();
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async create() {
    const { ctx } = this;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule, ctx.request.body);
    // 调用 service 创建一个 topic
    const result = await ctx.service.news.create();
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }
}
