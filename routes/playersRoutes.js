const express = require("express")
const { getAllPlayers, getPlayerInfo, addNewPlayer,deletePlayerData, updatePlayerData } = require("../controller/playersController.js")
const router = express.Router()

router.get("/get-all", (req, res) => {
    getAllPlayers(req, res)
}).get("/get-info/:id", (req, res) => {
    getPlayerInfo(req, res)
}).post("/add-new", (req, res) => {
    addNewPlayer(req, res)
}).delete("/delete/:id", (req, res) => {
    deletePlayerData(req, res)
}).patch("/update/:id", (req, res) => {
    updatePlayerData(req, res)
})

module.exports = router