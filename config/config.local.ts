import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  const jenkinsConfig = {
    username: "feadmin",
    password: "Aa123456",
    yoursite: "10.0.204.163:8080",
  };

  const mysql = {
    // host
    host: "127.0.0.1",
    // 端口号
    port: "3306",
    // 用户名
    user: "root",
    // 密码
    password: "11111111",
    // 数据库名
    database: "test",
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      ...mysql,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return {
    jenkinsConfig,
    ...config,
  };
};
