/* eslint-disable @typescript-eslint/no-var-requires */
const jenkinsapi = require("jenkins-api");
const JENKINS = Symbol("Application#jenkins");

module.exports = {
  get jenkins() {
    if (!this[JENKINS]) {
      const username = "feadmin";
      const password = "Aa123456";
      const yoursite = "10.0.204.163:8080";
      const jenkinsUrl = `http://${username}:${password}@${yoursite}`;
      const jenkins = jenkinsapi.init(jenkinsUrl);
      this[JENKINS] = jenkins;
    }
    return this[JENKINS];
  },
};
