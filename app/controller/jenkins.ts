import { Controller } from "egg";

export default class JenkinsController extends Controller {
  public async index() {
    const { ctx, service } = this;
    const result = await service.jenkins.index();
    return (ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    });
  }
}
