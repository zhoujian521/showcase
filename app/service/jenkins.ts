import { Service } from "egg";

export default class JenkinsService extends Service {
  public async index() {
    return "jenkins";
  }

  public async build(job: string) {
    const { app } = this;
    return new Promise((resolve, reject) => {
      app.jenkins.build(job, (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  public async getAllJobs() {
    const { app } = this;
    return new Promise((resolve, reject) => {
      app.jenkins.all_jobs((error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  public async getJobInfo(job: string) {
    const { app } = this;
    return new Promise((resolve, reject) => {
      app.jenkins.job_info(job, (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  public async getLastBuildInfo(job: string) {
    const { app } = this;
    return new Promise((resolve, reject) => {
      app.jenkins.last_build_info(job, function (error, data) {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  public async copyJob(source: string, target: string) {
    const { app } = this;
    return new Promise((resolve, reject) => {
      app.jenkins.copy_job(
        source,
        target,
        (data) => {
          return data;
          // return data.replace("development", "feature-branch");
        },
        (error, data) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(data);
        }
      );
    });
  }

  public async deleteJob(job: string) {
    const { app } = this;
    return new Promise((resolve, reject) => {
      app.jenkins.delete_job(job, (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  public async computers() {
    const { app } = this;
    return new Promise((resolve, reject) => {
      app.jenkins.computers((error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  public async queue() {
    const { app } = this;
    return new Promise((resolve, reject) => {
      app.jenkins.queue((error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  public async getConfigXml(job: string) {
    const { app } = this;
    return new Promise((resolve, reject) => {
      app.jenkins.get_config_xml(job, (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        app.jenkins.create_job(job + "-copy", data, (err, res) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(res);
        });
      });
    });
  }

  public async getAllJobsInView(viewName: string) {
    const { app } = this;
    return new Promise((resolve, reject) => {
      app.jenkins.all_jobs_in_view(viewName, function (error, data) {
        if (error) {
          console.log(error);
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }
}
