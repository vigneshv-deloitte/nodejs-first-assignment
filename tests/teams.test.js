const request = require("supertest");
const server= require("../server")
const {teams}= require("../utils/data")


describe("Test cases for teams routes",()=>{
    test("Get teams route works properly",async()=>{
        const response= await request(server).get("/teams/get-all");
        expect(response.body).toEqual(teams)
    })
    test("Get players list route works properly",async()=>{
        const response= await request(server).get("/teams/get-players-list/CSK");
        expect((response.body["Players List"]).length).toEqual(1)
    })
    test("Add new team route works properly", async()=>{
        const newTeam={
            "teamName":"PBK"
          }
        const response= await request(server).post("/teams/add-new").send(newTeam);
        expect(response.status).toBe(200);
        const new_response= await request(server).get("/teams/get-all");
        expect(new_response.body.length).toEqual(3)
    })
    test("Delete route works properly", async()=>{
        const team={
            "teamName":"PBK"
          }
        const response= await request(server).delete("/teams/delete").send(team);
        expect(response.status).toBe(200);
        const new_response= await request(server).get("/teams/get-all");
        expect(new_response.body.length).toEqual(2)
    })
    test("Update route works properly", async()=>{
        const team={
            "teamName":"PBK"
          }
        const response= await request(server).put("/teams/update/RCB").send(team);
        expect(response.status).toBe(200);
        expect(response.text).toEqual("Successfully updated!")
    })

})
