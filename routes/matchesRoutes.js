const express = require("express")
const { getAllMatches , getMatchInfo, addMatch, updateMatch, deleteMatch} = require("../controller/matchesController.js")
const router = express.Router()

router.get("/get-all", (req, res) => {
    getAllMatches(req, res)
}).get("/get-match", (req, res) => {
    getMatchInfo(req, res)
}).post("/add-match", (req,res)=>{
    addMatch(req,res)
}).patch("/update/:id",(req,res)=>{
    updateMatch(req,res)
}).delete("/delete/:id",(req,res)=>{
    deleteMatch(req,res)
})

module.exports = router