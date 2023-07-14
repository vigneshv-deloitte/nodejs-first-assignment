const {getLeaderBoardData}= require("../service/leaderboardService.js")

const getLeaderBoard=(req,res)=>{
    res.send(getLeaderBoardData())
}

module.exports={getLeaderBoard}