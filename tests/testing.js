import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";
import jwt from 'jsonwebtoken';

chai.should();

chai.use(chaiHttp);

describe('BLOG Routes TEST', () => {
    // Testing Blog post route
    
describe("GET all blogs", () =>{
    it("it should get all blogs", (done) =>{
        chai.request(app)
        .get("/blogs")
        .end((err, response) => {
           
        done();

        });
    });
});
    // Testing getting one blog post route
     describe("GET one blog:id", () =>{
        it("it should get blogs by ID", (done) =>{
            chai.request(app)
            .get("/blogs:id")
            .end((err, response) => {
            done();
    
            });
        });
    });
    // Testing Blog post route
     
     describe("POST a blog", () =>{
        it("it should post blog", (done) =>{
            chai.request(app)
            .post("/blogs")
            .end((err, response) => { 
            done();
    
            });
        });
    });

    // Testing Blog patch route
     describe("To update a blogs:id", () =>{
        it("it should UPDATE blogs by ID", (done) =>{
            chai.request(app)
            .patch("/blogs:id")
            .end((err, response) => {
            done();
    
            });
        });
    });
// Testing Blog delete route
     describe("DELETE a specific blogs:id", () =>{
        it("it should DELETE blogs by ID", (done) =>{
            chai.request(app)
            .delete("/blogs:id")
            .end((err, response) => {
            done();
    
            });
        });
    });
})
describe('Login Routes TEST', () => {
// should put a valid email
    describe("It should create a new user with valide email", () =>{
        it("it register a user with a password with atleast 6 characters", (done) =>{
            const CreateInfo = {
                Names: "Your names",
                Email: "wrongemailgmail.com",
                Password: "Wrong"
            };
            chai.request(app)
            .post("/login/register")
            .send(CreateInfo)
            .end((err, response) => {
                response.should.have.status(400);
                response.text.should.be.eq('"Email" must be a valid email');
            done();
    
            });
        });
    });

    // should put a valid email
    describe("It should create a new user with atleast 6 characters password", () =>{
        it("it register a user with a password with atleast 6 characters", (done) =>{
            const CreateInfo = {
                Names: "Your names",
                Email: "wrongemail@gmail.com",
                Password: "Wrong"
            };
            chai.request(app)
            .post("/login/register")
            .send(CreateInfo)
            .end((err, response) => {
                response.should.have.status(400);
                response.text.should.be.eq('"Password" length must be at least 6 characters long');
            done();
    
            });
        });
    });
// Testing create account
     describe("It should create a new user", () =>{
        it("it register a user", (done) =>{
            chai.request(app)
            .post("/login/register")
            .end((err, response) => {
            done();
    
            });
        });
    });
    // login to your account
    describe("It should login to your account", () =>{
        it("it login a user", (done) =>{
            chai.request(app)
            .post("/login")
            .end((err, response) => {
            done();
    
            });
        });
    });
    // After unsuccessfull login
    describe("wrong credentials should return 400 status", () =>{
        it("after login with wrong user", (done) =>{
            const LoginInfo = {
                Email: "wrongemail@gmail.com",
                Password: "Wrong-password"
            };
            chai.request(app)
            .post("/login")
            .send(LoginInfo)
            .end((err, response) => {
                response.should.have.status(400);
            done();
    
            });
        });
    });

        // After a successfull login
        describe("successfully login", () =>{
            it("after login successfully you get the token", (done) =>{
                const LoginInfo = {
                    Email: "realemail@gmail.com",
                    Password: "right-password"
                };
                chai.request(app)
                .post("/login")
                .send(LoginInfo)
                .end((err, response) => {
                done();
                });
            });
        });
})