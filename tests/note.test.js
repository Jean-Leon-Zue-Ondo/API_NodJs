const request = require('supertest');
const http = require('http');
const app = require('../app');
const mongoose = require('mongoose');

describe('Notes API', () => {
  let server;
  beforeAll((done) => {
    server = http.createServer(app);
    server.listen(done);
  });

  afterAll((done) => {
    mongoose.disconnect();
    server.close(done);
  });

  it('should create a new note', async () => {
    const res = await request(server)
      .post('/api/notes')
      .send({
        title: 'Test Note',
        content: 'This is a test note',
        category: 'Test' // Assurez-vous que cette catégorie existe dans votre modèle
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('note');
  });
});
