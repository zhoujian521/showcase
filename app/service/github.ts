import { Service } from "egg";

export default class GitbubService extends Service {
  checkSuccess(result) {
    const { ctx } = this;
    const { status, data } = result;
    if (status !== 200) {
      const errorMsg =
        data && data.error_msg ? data.error_msg : "unknown error";
      ctx.throw(status, errorMsg);
    }
    // if (!result.data.success) {
    //   // 远程调用返回格式错误
    //   ctx.throw(500, "remote response error", { data: result.data });
    // }
  }

  checkUrl(url) {
    const { ctx } = this;
    if (!url) {
      ctx.throw(400, "缺少请求Api路径", { code: 400201 });
    }
  }

  // method	  请求方法，默认为GET。可以是GET，POST，DELETE或PUT
  // data	    要发送的数据。将自动进行字符串化
  // dataType	字符串-响应数据的类型。可能是text或json
  // headers	  请求标头
  // timeout	  请求超时
  // auth	    username:password在HTTP基本授权中使用
  // gzip	    让您在请求连接时获取res对象，默认为false
  // nestedQuerystring  	urllib默认使用querystring对不支持嵌套对象的表单数据进行字符串化，通过将此选项设置为true，将使用qs而不是querystring支持嵌套对象

  public async index() {
    const Git = require("nodegit");
    try {
      // Clone a given repository into the `./tmp` folder.
      Git.Clone(
        "https://github.com/zhoujian521/showcase.git",
        "/Users/zhoujian/Desktop/PlayGround/test"
      )
        // Look up this known commit.
        .then(function (repo) {
          // Use a known commit sha from this repository.
          return repo.getCommit("59b20b8d5c6ff8d09518454d4dd8b7b30f095ab5");
        })
        // Look up a specific file within that commit.
        .then(function (commit) {
          return commit.getEntry("README.md");
        })
        // Get the blob contents from the file.
        .then(function (entry) {
          // Patch the blob to contain a reference to the entry.
          return entry.getBlob().then(function (blob) {
            blob.entry = entry;
            return blob;
          });
        })
        // Display information about the blob.
        .then(function (blob) {
          // Show the path, sha, and filesize in bytes.
          console.log(
            blob.entry.path() + blob.entry.sha() + blob.rawsize() + "b"
          );

          // Show a spacer.
          console.log(Array(72).join("=") + "\n\n");

          // Show the entire file.
          console.log(String(blob));
        })
        .catch(function (err) {
          console.log(err);
        });
    } catch (error) {
      console.log("============Clone========================");
      console.log(error);
      console.log("============Clone========================");
    }
    // try {
    //   // Open the repository directory.
    //   Git.Repository.open("/Users/zhoujian/Desktop/PlayGround/showcase/")
    //     // Open the master branch.
    //     .then(function (repo) {
    //       return repo.getMasterCommit();
    //     })
    //     // Display information about commits on master.
    //     .then(function (firstCommitOnMaster) {
    //       // Create a new history event emitter.
    //       var history = firstCommitOnMaster.history();

    //       // Create a counter to only show up to 9 entries.
    //       var count = 0;

    //       // Listen for commit events from the history.
    //       history.on("commit", function (commit) {
    //         // Disregard commits past 9.
    //         if (++count >= 9) {
    //           return;
    //         }

    //         // Show the commit sha.
    //         console.log("commit " + commit.sha());

    //         // Store the author object.
    //         var author = commit.author();

    //         // Display author information.
    //         console.log(
    //           "Author:\t" + author.name() + " <" + author.email() + ">"
    //         );

    //         // Show the commit date.
    //         console.log("Date:\t" + commit.date());

    //         // Give some space and show the message.
    //         console.log("\n    " + commit.message());
    //       });

    //       // Start emitting events.
    //       history.start();
    //     });

    //   console.log("========Git============================");
    //   console.log(Git.version);
    //   console.log("========Git============================");
    //   // Git.Clone("https://github.com/christkv/node-git.git", "nodegit").then(
    //   //   function (repository) {
    //   //     console.log("===========repository=========================");
    //   //     console.log(repository);
    //   //     console.log("===========repository=========================");
    //   //   }
    //   // );
    // } catch (error) {
    //   console.log("============error========================");
    //   console.log(error);
    //   console.log("============error========================");
    // }

    // const { ctx } = this;
    // // 更多配置，查看 https://www.npmjs.com/package/urllib
    // const result = await ctx.curl(
    //   "https://api.github.com/repos/zhoujian521/showcase/contents/test.ts",
    //   {
    //     method: "PUT",
    //     // auth: "zhoujian521:xingchen52571413",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //       Authorization: "token e5a7e1f2152992dc3856a97d1b1234806b08d9d9",
    //     },
    //     contentType: "json",
    //     data: {
    //       message: "commit from INSOMNIA",
    //       // bXkgbmV3IGZpbGUgY29udGVudHM=
    //       content: "",
    //     },
    //     dataType: "json",
    //   }
    // );
    // console.log("========result============================");
    // console.log(result);
    // console.log("========result============================");
    // // 检查调用是否成功，如果调用失败会抛出异常
    // // this.checkSuccess(result);
    // const { data } = result;
    // return data;
    return "data";
  }

  async tarsServerHttp(url: string = "", options?: any) {
    this.checkUrl(url);
    const { ctx } = this;
    const {
      host = "", // 配置请求地址域名
      method = "GET",
      data = {},
      dataType = "json",
      headers = {},
      timeout = 10 * 1000,
      nestedQuerystring = false,
    } = options || {};

    const result = await ctx.curl(`${host}${url}`, {
      method,
      data,
      dataType,
      headers,
      timeout,
      nestedQuerystring,
    });
    this.checkSuccess(result);
    return result;
  }
}
