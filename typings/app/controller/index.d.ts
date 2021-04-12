// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGithub from '../../../app/controller/github';
import ExportHome from '../../../app/controller/home';
import ExportJenkins from '../../../app/controller/jenkins';
import ExportNews from '../../../app/controller/news';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    github: ExportGithub;
    home: ExportHome;
    jenkins: ExportJenkins;
    news: ExportNews;
    user: ExportUser;
  }
}
