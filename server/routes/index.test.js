const app = require("../app");
const supertest = require("supertest");

it("returns a 200", async () => {
  await supertest(app)
    .get("/")
    .expect(200);
});
