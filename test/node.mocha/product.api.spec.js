var app = require("../../app"),
  should = require('should'),
  supertest = require('supertest');
var defaultUrl = require('../../config/app.infra.config').defaultURL;

describe("product feed parser test suite", function () {
  it("should return 200", function (done) {
    supertest(app)
      .post('/api/v1/products/list')
      .send({ url: defaultUrl })
      .expect("Content-type", /json/)
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });
});