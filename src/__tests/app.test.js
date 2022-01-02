const request = require('supertest');
const app = require('../server/');
import "babel-polyfill"

describe('test server is running', () => {
    test('should output 200', async() => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    })
})

describe('test "/test" should be running successfully', () => {
    test('should output 200', async() => {
        const response = await request(app).get('/test')
        expect(response.statusCode).toBe(200)
    })
})


describe('test "/sentiment" API should be running successfully', () => {
    test('should output 200', async() => {
        const response = await request(app).post('/sentiment')
            .expect("Content-Type", /json/)
            .send('send any text')
        expect(response.statusCode).toBe(200)
    })
})