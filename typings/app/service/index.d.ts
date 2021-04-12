// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportGithub from '../../../app/service/github';
import ExportJenkins from '../../../app/service/jenkins';
import ExportNews from '../../../app/service/news';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    github: AutoInstanceType<typeof ExportGithub>;
    jenkins: AutoInstanceType<typeof ExportJenkins>;
    news: AutoInstanceType<typeof ExportNews>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
