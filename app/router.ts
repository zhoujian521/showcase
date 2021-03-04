import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/", controller.home.index);
  router.get("/news", controller.news.getList);

  router.get("/jenkins", controller.jenkins.index);

  router.post("/jenkins/build", controller.jenkins.build);
  router.get("/jenkins/getAllJobs", controller.jenkins.getAllJobs);
  router.get("/jenkins/getJobInfo", controller.jenkins.getJobInfo);
  router.get("/jenkins/getLastBuildInfo", controller.jenkins.getLastBuildInfo);
  router.post("/jenkins/copyJob", controller.jenkins.copyJob);
  router.post("/jenkins/deleteJob", controller.jenkins.deleteJob);
  router.get("/jenkins/computers", controller.jenkins.computers);
  router.get("/jenkins/queue", controller.jenkins.queue);
  router.post("/jenkins/getConfigXml", controller.jenkins.getConfigXml);

  router.post("/jenkins/getAllJobsInView", controller.jenkins.getAllJobsInView);

  router.post("/user/addUser", controller.user.addUser);
  router.post("/user/deleteUser", controller.user.deleteUser);
  router.post("/user/updateUser", controller.user.updateUser);
  router.post("/user/getUserList", controller.user.getUserList);
};
