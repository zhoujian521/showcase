import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  const jenkinsConfig = {
    username: "feadmin",
    password: "Aa123456",
    yoursite: "10.0.204.163:8080",
  };

  return { ...config, jenkinsConfig };
};
