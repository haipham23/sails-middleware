const request = require('supertest');
const { expect } = require('chai');

describe('ApiController', () => {
  describe('#getSampleData()', () => {
    it('should fetch sample data success', (done) => {
      request(sails.hooks.http.app)
        .get('/api/sample')
        .expect(200)
        .end((error, res) => {
          // should not have error
          expect(error).to.not.exist;

          // should get user that has userId = 1
          const user = JSON.parse(res.body);
          expect(user.userId).to.equal(1);

          // tell mocha that the async test is done
          done();
        });
    });
  });
});
