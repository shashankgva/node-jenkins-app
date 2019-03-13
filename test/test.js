var request = require('supertest');
var app = require('../index');

describe('/GET', function() {
  it('Should return Hello World!', (done) => {
    request(app).get('/').expect('Hello World!', done);
  });
});
