import { Controller } from "egg";

export default class UserController extends Controller {
  public async addUser() {
    const { ctx, service } = this;
    const { name = "", age = 0 } = ctx.request.body;
    const result = await service.user.addUser(name, age);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async deleteUser() {
    const { ctx, service } = this;
    const { id = "", name = "" } = ctx.request.body;
    const result = await service.user.deleteUser(id, name);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async updateUser() {
    const { ctx, service } = this;
    const { id = "", name = "" } = ctx.request.body;
    const result = await service.user.updateUser(id, name);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async getUserList() {
    const { ctx, service } = this;
    const { limit = "", offset = "" } = ctx.request.body;
    const result = await service.user.getUserList(limit, offset);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }
}
