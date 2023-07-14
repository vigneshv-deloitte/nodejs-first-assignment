const request = require("supertest");
const server= require("../server")
const {matches}= require("../utils/data")


describe("Test cases for matches routes",()=>{
    test("Get all matches route works properly",async()=>{
        const response= await request(server).get("/matches/get-all");
        expect(response.body).toEqual(matches)
    })
    test("Get match by date route works properly",async()=>{
        const response= await request(server).get("/matches/get-match").send({
            "date": "01-02-2024"
          });
        expect(response.body["message"]).toEqual("Match found on 01-02-2024")
    })
    test("Add new match route works properly", async()=>{
        const newMatch={
            "matchDetails": {
              "id":3,
              "date": "01-29-2024",
              "teamOne": "RCB",
              "teamTwo": "CSK"
            }
          }
        const response= await request(server).post("/matches/add-match").send(newMatch);
        expect(response.status).toBe(200);
        const new_response= await request(server).get("/matches/get-all");
        expect(new_response.body.length).toEqual(3)
    })
    test("Update  match route works properly", async()=>{
        const latestData={
            "matchDetails": {
              "teamTwo": "CSK"
            }
          }
        const response= await request(server).patch("/matches/update/3").send(latestData);
        expect(response.status).toBe(200);
        expect(response.text).toEqual("Successfully Updated!")
    })
    test("Delete match route works properly", async()=>{
        const response= await request(server).delete("/matches/delete/3");
        expect(response.status).toBe(200);
        const new_response= await request(server).get("/matches/get-all");
        expect(new_response.body.length).toEqual(2)
    })

})
