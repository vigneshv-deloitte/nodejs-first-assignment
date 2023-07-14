const request = require("supertest");
const server= require("../server")
const {playersList}= require("../utils/data")


describe("Test cases for teams routes",()=>{
    const player={
        "playerDetails": {
          "id": 88,
          "name": "Virat Kohli cc",
          "total_matches": 110,
          "highest_score": 250,
          "avg_score": 60,
          "total_overs": 10,
          "total_wickets_taken":900,
          "avg_wickets_taken": 1,
          "team": "RCB",
          "playerUniqueId": 66
        }
      }
    test("Get players route works properly",async()=>{
        const response= await request(server).get("/players/get-all");
        expect(response.body).toEqual(playersList)
    })
    test("Get info of a player by id works properly", async()=>{
        const response= await request(server).get("/players/get-info/1");
        expect(response.body["message"]).toEqual("Player Found")
    })
    test("Get top-performers works properly", async()=>{
        const response= await request(server).get("/players/top-performers/CSK");
        expect(response.status).toBe(200)
    })
    test("Add new player works properly", async()=>{
        const response= await request(server).post("/players/add-new").send(player);
        expect(response.status).toBe(200)
        const new_response= await request(server).get("/players/get-all");
        expect((new_response.body).length).toEqual(4)
    })
    test("Delete player from list works properly", async()=>{
        const response= await request(server).delete("/players/delete/1");
        expect(response.status).toBe(200)
        const new_response= await request(server).get("/players/get-all");
        expect((new_response.body).length).toEqual(3)
    })
    test("Update player works properly", async()=>{
        const response= await request(server).patch("/players/update/88").send({data:{name:"Dinesh Karthik"}});
        expect(response.status).toBe(200)
        const new_response=  await request(server).get("/players/get-info/88");
        expect(new_response.body["Player Details"][0].name).toEqual("Dinesh Karthik")
    })
})