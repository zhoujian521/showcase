import { Controller } from "egg";

export default class JenkinsController extends Controller {
  public async index() {
    const { ctx, service } = this;
    const result = await service.jenkins.index();
    return (ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    });
  }

  public async build() {
    const { ctx, service } = this;
    const { job = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.build(job);
      return (ctx.body = {
        code: 0,
        msg: "build 执行成功",
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      });
    }
  }

  public async getAllJobs() {
    const { ctx, service } = this;
    try {
      const result = await service.jenkins.getAllJobs();
      return (ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      });
    }
  }

  public async getJobInfo() {
    const { ctx, service } = this;
    const { job = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.getJobInfo(job);
      return (ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      });
    }
  }

  public async getLastBuildInfo() {
    const { ctx, service } = this;
    const { job = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.getLastBuildInfo(job);
      return (ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      });
    }
  }

  public async copyJob() {
    const { ctx, service } = this;
    const { source = "", target = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.copyJob(source, target);
      return (ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      });
    }
  }

  public async deleteJob() {
    const { ctx, service } = this;
    const { job = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.deleteJob(job);
      return (ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      });
    }
  }

  public async computers() {
    const { ctx, service } = this;
    try {
      const result = await service.jenkins.computers();
      return (ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      });
    }
  }

  public async queue() {
    const { ctx, service } = this;
    try {
      const result = await service.jenkins.queue();
      return (ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      });
    }
  }

  public async getConfigXml() {
    const { ctx, service } = this;
    const { job = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.getConfigXml(job);
      return (ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      });
    }
  }

  public async getAllJobsInView() {
    const { ctx, service } = this;
    const { viewName = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.getAllJobsInView(viewName);
      return (ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      });
    }
  }
}
