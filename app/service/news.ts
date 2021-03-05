import { Service } from "egg";
export default class NewsService extends Service {
  public async list(): Promise<any> {
    return "success";
  }

  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    const { ctx } = this;
    const { status, data } = result;
    if (status !== 200) {
      const errorMsg =
        data && data.error_msg ? data.error_msg : "unknown error";
      ctx.throw(status, errorMsg);
    }
    // if (!result.data.success) {
    //   // 远程调用返回格式错误
    //   ctx.throw(500, "remote response error", { data: result.data });
    // }
  }

  // method	  请求方法，默认为GET。可以是GET，POST，DELETE或PUT
  // data	    要发送的数据。将自动进行字符串化
  // dataType	字符串-响应数据的类型。可能是text或json
  // headers	  请求标头
  // timeout	  请求超时
  // auth	    username:password在HTTP基本授权中使用
  // gzip	    让您在请求连接时获取res对象，默认为false
  // nestedQuerystring  	urllib默认使用querystring对不支持嵌套对象的表单数据进行字符串化，通过将此选项设置为true，将使用qs而不是querystring支持嵌套对象

  async create() {
    const { ctx } = this;
    const result = await ctx.curl("https://api.github.com/users/blobaugh", {
      method: "GET",
      dataType: "json",
      contentType: "json",
    });
    // 检查调用是否成功，如果调用失败会抛出异常
    this.checkSuccess(result);
    const { data } = result;
    return data;
  }
}
