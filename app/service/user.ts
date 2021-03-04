import { Service } from "egg";

function toInt(str) {
  if (typeof str === "number") return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

export interface UserItem {
  id: number;
  name: string;
  age: number;
  created_at: string;
  updated_at: string;
}
export default class UserService extends Service {
  public async list(page?: string): Promise<UserItem[] | any> {
    // (this.app as any).jenkins.all_jobs(function (error, data) {
    //   if (error) {
    //     console.log(error);
    //   }
    //   console.log(data);
    // });
    return page + "success";
  }

  public async addUser(name: string, age: number): Promise<UserItem> {
    const { ctx } = this;
    const user = await ctx.model.User.create({ name, age });
    return user;
  }

  public async deleteUser(id: string, name?: string): Promise<any> {
    const { ctx } = this;
    try {
      let where = {};
      if (id) {
        where = { ...where, id };
      }
      if (name) {
        where = { ...where, name };
      }
      const user = await ctx.model.User.findOne({ where });
      await user.destroy();
      return "success";
    } catch (error) {
      return error.message;
    }
  }

  public async updateUser(id: string, name: string) {
    const { ctx } = this;
    try {
      const user = await ctx.model.User.findOne({ where: { id } });
      await user.update({ name });
      return "success";
    } catch (error) {
      return error.message;
    }
  }

  public async getUserList(limit: string, offset: string) {
    const { ctx } = this;
    try {
      const query = { limit: toInt(limit), offset: toInt(offset) };
      const list = await ctx.model.User.findAll(query);
      return list;
    } catch (error) {
      return error.message;
    }
  }
}
