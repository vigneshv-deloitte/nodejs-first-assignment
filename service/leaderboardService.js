const {getTeams, getPlayersData}= require("./teamsService.js")
const {getBestPerformers}= require("./playersService.js")

const getLeaderBoardData=()=>{
    const teamsList= getTeams()
    let leaderBoard={}
    teamsList.forEach((team)=>{
        leaderBoard[team]={
            playersDetails: getPlayersData(team),
            best_performers: getBestPerformers(team) 
        }
    })
    return leaderBoard;
}

module.exports={getLeaderBoardData}