import { Controller } from "egg";

export default class GithubController extends Controller {
  public async index() {
    const { ctx } = this;
    const result = await ctx.service.github.index();
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }
}
