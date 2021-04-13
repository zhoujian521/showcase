/*
 * @Author: your name
 * @Date: 2021-03-02 16:10:43
 * @LastEditTime: 2021-03-05 09:30:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /showcase/config/config.default.ts
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1614669013264_7289";

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // 安全设置(忽略 csrf)
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 加载 errorHandler 中间件
  config.middleware = [ "errorHandler" ];
  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: "/api",
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
