// Global describe it
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('https://node-flight846.c9users.io')

describe('GET /candies', () => {
    it('should return a 200 response', (done) => {
        api.get('/candies')
        .set('Accept', 'application/json')
        .expect(200, done)
    })
    
    it('should return an array', (done) => {
        api.get('/candies')
        .set('Accept', 'application/json')
        .end((error, response) => {
            expect(error).to.be.a('null')
            expect(response.body).to.be.an('array')
            done()
        })
    })
    
    it('should return an object that has a field called "name', (done) => {
        api.get('/candies')
        .set('Accept', 'application/json')
        .end((error, response) => {
            expect(error).to.be.a('null')
            expect(response.body[0]).to.have.property('name')
            done()
        })
    })
})

describe('POST /candies', () => {
    before((done) => {
        api.post('/candies')
        .set('Accept', 'application/json')   
        .send({
            "id": 5,
            "name": "lollipop",
            "color": "red"
        }).end(done)
    })
    
    it('it should add a candy object to the collection and return it'), (done) => {
        api.get('/candies')
        .set('Accept', 'application/json')
        .end((error, response) => {
            expect(error).to.be.a('null')
            // expect(response.body.length).to.be.equal(5)
            expect(response.body[response.body.length-1].name).to.equal('lollipop')
            done()
        })
    }
})