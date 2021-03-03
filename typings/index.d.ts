import "egg";

declare module "egg" {
  interface Application {
    jenkins: any;
  }
}
