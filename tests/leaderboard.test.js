const request = require("supertest");
const server= require("../server")
const {teams}= require("../utils/data")


describe("Test cases for leaderboard routes",()=>{
    test("Get leaderboard route works properly",async()=>{
        const response= await request(server).get("/leaderboard/");
        expect(Object.keys(response.body)).toEqual(teams)
    })
})