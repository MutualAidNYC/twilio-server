// const request = require("supertest");
const transformSchedule = require("../routes/api/schedule");
const expect = require("chai").expect;
// const app = require("../app");

const sampleInput = `{"records":[{"id":"reci45bsbMo3x7yEJ","fields":{"Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z","Day":"Monday","Last Modified":"2020-05-02T23:04:16.000Z","Created Time":"2020-05-01T00:35:45.000Z"},"createdTime":"2020-05-01T00:35:45.000Z"},{"id":"rec8LgQYpRk9vQesO","fields":{"Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z","Day":"Tuesday","Last Modified":"2020-05-02T23:04:18.000Z","Created Time":"2020-05-01T00:35:53.000Z"},"createdTime":"2020-05-01T00:35:53.000Z"},{"id":"recql2OSnciW3ex0p","fields":{"Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z","Day":"Wednesday","Last Modified":"2020-05-02T23:04:20.000Z","Created Time":"2020-05-01T00:35:59.000Z"},"createdTime":"2020-05-01T00:35:59.000Z"},{"id":"recaHZ9ISKphtTJSH","fields":{"Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z","Day":"Thursday","Last Modified":"2020-05-02T23:04:22.000Z","Created Time":"2020-05-01T00:35:59.000Z"},"createdTime":"2020-05-01T00:35:59.000Z"},{"id":"rec8qruV96EOMbbPj","fields":{"Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z","Day":"Friday","Last Modified":"2020-05-02T23:04:24.000Z","Created Time":"2020-05-01T00:36:06.000Z"},"createdTime":"2020-05-01T00:36:06.000Z"},{"id":"recvkQ5AKCL1WwiyQ","fields":{"Open":"2020-05-02T19:25:00.000Z","Spanish Open":"2020-05-02T19:40:00.000Z","Urdu Close":"2020-05-02T20:30:00.000Z","French Open":"2020-05-02T20:10:00.000Z","Mandarin Open":"2020-05-02T19:50:00.000Z","Urdu Open":"2020-05-02T20:20:00.000Z","Close":"2020-05-02T20:35:00.000Z","English Close":"2020-05-02T19:40:00.000Z","Spanish Close":"2020-05-02T19:50:00.000Z","Russian Close":"2020-05-02T20:10:00.000Z","Russian Open":"2020-05-02T20:00:00.000Z","Mandarin Close":"2020-05-02T20:00:00.000Z","French Close":"2020-05-02T20:20:00.000Z","English Open":"2020-05-02T19:30:00.000Z","Day":"Saturday","Last Modified":"2020-05-02T23:03:58.000Z","Created Time":"2020-05-01T00:36:06.000Z"},"createdTime":"2020-05-01T00:36:06.000Z"},{"id":"recviG67qSnDyxo09","fields":{"Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z","Day":"Sunday","Last Modified":"2020-05-02T23:04:28.000Z","Created Time":"2020-05-01T00:36:12.000Z"},"createdTime":"2020-05-01T00:36:12.000Z"}]}`;

const sampleOutput = `[{"Day":"Monday","Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z"},{"Day":"Tuesday","Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z"},{"Day":"Wednesday","Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z"},{"Day":"Thursday","Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z"},{"Day":"Friday","Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z"},{"Day":"Saturday","Open":"2020-05-02T19:25:00.000Z","Close":"2020-05-02T20:35:00.000Z","Urdu Open":"2020-05-02T20:20:00.000Z","Urdu Close":"2020-05-02T20:30:00.000Z","French Open":"2020-05-02T20:10:00.000Z","English Open":"2020-05-02T19:30:00.000Z","French Close":"2020-05-02T20:20:00.000Z","Russian Open":"2020-05-02T20:00:00.000Z","Spanish Open":"2020-05-02T19:40:00.000Z","English Close":"2020-05-02T19:40:00.000Z","Mandarin Open":"2020-05-02T19:50:00.000Z","Russian Close":"2020-05-02T20:10:00.000Z","Spanish Close":"2020-05-02T19:50:00.000Z","Mandarin Close":"2020-05-02T20:00:00.000Z"},{"Day":"Sunday","Open":"2020-05-02T17:00:00.000Z","Close":"2020-05-02T22:00:00.000Z"}]`;

describe("api/schdule", () => {});
describe("transformSchedule", () => {
  it("Should transform the json into the right format", () => {
    expect(transformSchedule(sampleInput)).to.equal(sampleOutput);
  });
});
/*

describe("api/users", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe("GET /", () => {
    it("should return all users", async () => {
      const users = [
        { name: "test", email: "test@gmail.com", gender: "male" },
        { name: "test1", email: "test1@gmail.com", gender: "female" },
      ];
      await User.insertMany(users);
      console.log(users);
      const res = await request(app).get("/api/users");
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(2);
    });
  });

  describe("GET/:id", () => {
    it("should return a user if valid id is passed", async () => {
      const user = new User({
        name: "test",
        email: "test@gmail.com",
        gender: "male",
      });
      await user.save();
      const res = await request(app).get("/api/users/" + user._id);
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("name", user.name);
    });

    it("should return 400 error when invalid object id is passed", async () => {
      const res = await request(app).get("/api/users/1");
      expect(res.status).to.equal(400);
    });

    it("should return 404 error when valid object id is passed but does not exist", async () => {
      const res = await request(app).get("/api/users/111111111111");
      expect(res.status).to.equal(404);
    });
  });

  describe("POST /", () => {
    it("should return user when the all request body is valid", async () => {
      const res = await request(app).post("/api/users").send({
        name: "test",
        email: "test@gmail.com",
        gender: "male",
      });
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("_id");
      expect(res.body).to.have.property("name", "test");
    });

    // add more tests to validate request body accordingly eg, make sure name is more than 3 characters etc
  });

  describe("PUT /:id", () => {
    it("should update the existing order and return 200", async () => {
      const user = new User({
        name: "test",
        email: "test@gmail.com",
        gender: "male",
      });
      await user.save();

      const res = await request(app)
        .put("/api/users/" + user._id)
        .send({
          name: "newTest",
          email: "newemail@gmail.com",
          gender: "male",
        });

      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("name", "newTest");
    });
  });

  describe("DELETE /:id", () => {
    it("should delete requested id and return response 200", async () => {
      const user = new User({
        name: "test",
        email: "test@gmail.com",
        gender: "male",
      });
      await user.save();

      const res = await request(app).delete("/api/users/" + user._id);
      expect(res.status).to.be.equal(200);
    });

    it("should return 404 when deleted user is requested", async () => {
      const user = new User({
        name: "test",
        email: "test@gmail.com",
        gender: "male",
      });
      await user.save();

      let res = await request(app).delete("/api/users/" + user._id);
      expect(res.status).to.be.equal(200);

      res = await request(app).get("/api/users/" + user._id);
      expect(res.status).to.be.equal(404);
    });
  });
});
*/
