const express = require("express")
const { getAllTeams, addNewTeam, deleteTeam, updateTeam, getPlayersList} = require("../controller/teamsController.js")
const router = express.Router()

router.get("/get-all", (req, res) => {
    getAllTeams(req, res)
}).get("/get-players-list/:team",(req,res)=>{
    getPlayersList(req,res)
})
.post("/add-new", (req, res) => {
    addNewTeam(req, res)
}).delete("/delete", (req, res) => {
    deleteTeam(req, res)
}).put("/update/:team", (req, res) => {
    updateTeam(req, res)
})

module.exports = router