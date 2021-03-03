import { Application, IBoot } from "egg";
// const jenkinsapi = require("jenkins-api");

export default class AppBootHook implements IBoot {
  readonly app: Application;
  constructor(app: Application) {
    this.app = app;
  }

  configWillLoad() {
    console.log("============configWillLoad=================");
    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // 注意：此函数只支持同步调用
  }

  configDidLoad() {
    // Config, plugin files have loaded.
    console.log("============configDidLoad=================");
  }

  async didLoad() {
    console.log("============didLoad========================");
    // 所有的配置已经加载完毕
    // 可以用来加载应用自定义的文件，启动自定义的服务
    // app/extend/application.ts ==> 无法读取配置
    // const { jenkinsConfig } = this.app.config;
    // const { username = "", password = "", yoursite = "" } = jenkinsConfig;
    // const jenkinsUrl = `http://${username}:${password}@${yoursite}`;
    // const jenkins = jenkinsapi.init(jenkinsUrl);
    // (this.app as any).jenkins = jenkins;
  }

  async willReady() {
    console.log("============willReady========================");
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
  }

  async didReady() {
    console.log("============didReady========================");
    // 应用已经启动完毕
  }

  async serverDidReady() {
    console.log("============serverDidReady===================");
    // http / https server 已启动，开始接受外部请求
    // 此时可以从 app.server 拿到 server 的实例
  }
}
