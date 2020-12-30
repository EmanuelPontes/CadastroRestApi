var supertest = require('supertest');
var app = require('./appTest');
var request = supertest(app);


test("Testing login auth route and controller", async done => {
    var response = await request.post("/auth").send({ user: "admin", password: "12345" });
    done();  
});
