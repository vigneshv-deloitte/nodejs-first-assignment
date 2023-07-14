const request = require("supertest");
const server= require("../server")
const {teams}= require("../utils/data")

describe("Test cases for teams routes",()=>{
    test("Teams route works properly",async()=>{
        const response= await request(server).get("/teams/get-all");
        expect(response.body).toEqual(teams)
    })
})
