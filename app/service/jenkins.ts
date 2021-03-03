import { Service } from "egg";

export default class JenkinsService extends Service {
  public async index() {
    return "jenkins";
  }
}
