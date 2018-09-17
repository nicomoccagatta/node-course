const requestsModule = require("./01.requests"), 
  expect = require("chai").expect,
  nock = require("nock");

describe("tests for requests", () => {

  describe("unit-tests", () => {

    const host = "https://api.github.com",
      url = "/orgs/nodejs/repos";
    
    after(() => {
      nock.cleanAll();
    });

    it("should resolve the repos data", () => {
      const reply = [{
          _id: "123ABC",
          _rev: "946B7D1C",
          name: "alto_repo",
          url: "github.com/alto_repo.git"
        }],
        nockUrl = nock(host)
          .get(url)
          .reply(200, reply);

      return requestsModule.getNodeRepos()
        .then((result) => {
          expect(nockUrl.pendingMocks()).to.have.length(0);
          expect(result).to.eql(reply);
        });
    });

    it("should reject if 404", () => {
      const nockUrl = nock(host)
        .get(url)
        .reply(404);

      return requestsModule.getNodeRepos()
        .then(() => {
          throw new Error("This promise should be rejected!");
        })
        .catch((err) => {
          expect(nockUrl.pendingMocks()).to.have.length(0);
          expect(err.message).to.eql("Couldn't get node repos!");
        });
    });

  });

  // eslint-disable-next-line
  describe("integration-tests", function() {

    this.timeout(5000);

    it("should resolve the repos data", () => {
      return requestsModule.getNodeRepos()
        .then((result) => {
          expect(result).to.instanceOf(Array);
          expect(result.length).to.gt(0);
        });
    });

  });

});