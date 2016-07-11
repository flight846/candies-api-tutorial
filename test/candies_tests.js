// Global describe it
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')

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
    it('should return a 200 response', (done) => {
        api.get('/candies')
        .set('Accept', 'application/json')
        .expect(200, done)
    })
    
    before((done) => {
        api.post('/candies')
        .set('Accept', 'application/json')
        .send({
            "id": 5,
            "name": "lollipop",
            "color": "red"
        }).end(done)
    })
<<<<<<< HEAD
   
    it('it should add a candy object to the collection and return it', (done) => {
=======
    
    // it('should return a 422 response if the field color is wrong')
    
   
    it('should add a new candy to the database', (done) => {
>>>>>>> 739717f9c956a6c691f9fd838f3ae1d11ba4bbe7
        api.get('/candies')
        .set('Accept', 'application/json')
        .end((error, response) => {
            expect(error).to.be.a('null')
            // expect(response.body.length).to.be.equal(5)
            expect(response.body[response.body.length-1].name).to.equal('lollipop')
            done()
        })
    }) 
<<<<<<< HEAD
=======
})

describe('PUT /candies', () => {
    it('should return a 200 response', (done) => {
        api.get('/candies/5')
        .set('Accept', 'application/json')
        .expect(200, done)
    })
    
    it('should update a candy document', (done) => {
        api.put('/candies/5')
        .set('Accept', 'application/json')
        .end((error, response) => {
            expect(error).to.be.a('null')
            // expect(response.body.length).to.be.equal(5)
            expect(response.body.message).to.equal('candies5 updated')
            done()
        })
    }) 
})

describe('Delete /candies/:id', () => {
    it('should remove a candy document', (done) => {
        api.delete('/candies/5')
        .set('Accept', 'application/json')
        .end((error, response) => {
            expect(error).to.be.a('null')
            // expect(response.body.length).to.be.equal(5)
            expect(response.body.message).to.equal('candies5 deleted')
            done()
        })
    })
>>>>>>> 739717f9c956a6c691f9fd838f3ae1d11ba4bbe7
})