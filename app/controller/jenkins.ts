import { Controller } from "egg";

export default class JenkinsController extends Controller {
  public async index() {
    const { ctx, service } = this;
    const result = await service.jenkins.index();
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async build() {
    const { ctx, service } = this;
    const { job = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.build(job);
      ctx.body = {
        code: 0,
        msg: "build 执行成功",
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      };
    }
  }

  public async getAllJobs() {
    const { ctx, service } = this;
    try {
      const result = await service.jenkins.getAllJobs();
      ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      };
    }
  }

  public async getJobInfo() {
    const { ctx, service } = this;
    const { job = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.getJobInfo(job);
      ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      };
    }
  }

  public async getLastBuildInfo() {
    const { ctx, service } = this;
    const { job = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.getLastBuildInfo(job);
      ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      };
    }
  }

  public async copyJob() {
    const { ctx, service } = this;
    const { source = "", target = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.copyJob(source, target);
      ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      };
    }
  }

  public async deleteJob() {
    const { ctx, service } = this;
    const { job = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.deleteJob(job);
      ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      };
    }
  }

  public async computers() {
    const { ctx, service } = this;
    try {
      const result = await service.jenkins.computers();
      ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      };
    }
  }

  public async queue() {
    const { ctx, service } = this;
    try {
      const result = await service.jenkins.queue();
      ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      };
    }
  }

  public async getConfigXml() {
    const { ctx, service } = this;
    const { job = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.getConfigXml(job);
      ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      };
    }
  }

  public async getAllJobsInView() {
    const { ctx, service } = this;
    const { viewName = "" } = ctx.request.body;
    // TODO 参数校验
    try {
      const result = await service.jenkins.getAllJobsInView(viewName);
      ctx.body = {
        code: 0,
        msg: "success",
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error,
        data: undefined,
      };
    }
  }
}
