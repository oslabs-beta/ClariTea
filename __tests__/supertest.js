const request = require('supertest');
const fs = require('fs');
const path = require('path');


const devJsonFile = path.resolve(__dirname, '../server/db/cluster.test.json');
const server = 'http://localhost:3000';

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });
});
describe('Connection Sync', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => request(server)
        .post('/api/fileUpload')
        .expect('Content-Type', /application\/json/)
        .end((err, res) => { done(); }));

      it('responds to invalid request with 400 status and error message in body', (done) => request(server)
        .put('*')
        .expect(400)
        // eslint-disable-next-line no-unused-vars
        .end((err, res) => { done(); }));
    })
});
