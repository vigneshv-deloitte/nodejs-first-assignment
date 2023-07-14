const express = require("express")
const { getLeaderBoard} = require("../controller/leaderboardController.js")
const router = express.Router()

router.get("/", (req, res) => {
    getLeaderBoard(req,res);
})

module.exports = router