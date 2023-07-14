let {playersList}= require("../utils/data.js")
const {getPlayersData}= require("./teamsService.js")

const getAllPlayersList=()=>{
    return playersList;
}

const getPlayerDetails=(playersList, playerId)=>{
    return playersList.filter((player)=>player.id===parseInt(playerId))
}

const getBestPerformers=(team)=>{
    const players=getPlayersData(team)
    let highest_score=0
    let highest_wickets=0

    players.forEach((player)=>{
        if(player.highest_score>highest_score){
            highest_score=player.highest_score
        }
        if(player.total_wickets_taken>highest_wickets){
            highest_wickets=player.total_wickets_taken
        }
    })

    const top_scorers=players.filter((player)=>player.highest_score===highest_score)
    const top_wicket_takers= players.filter((player)=>player.total_wickets_taken===highest_wickets)
    return {
        "Top scorers":top_scorers,
        "Top wicket takers":top_wicket_takers
    }
}

const addPlayer=(newPlayer)=>{
    playersList.push(newPlayer)
    return;
}

const deletePlayerDataFromList=(playerId)=>{
    playersList= playersList.filter((player)=>player.id!==parseInt(playerId))
    return;
}

const updatePlayerInfo=(playerId,playerData)=>{
    playersList.forEach((player, index)=>{
        if(player.id===parseInt(playerId)){
            const updatedPlayer={...player, ...playerData}
            playersList[index]= updatedPlayer
            return;
        }
        }
        )
}

module.exports= {getAllPlayersList, getPlayerDetails, addPlayer, deletePlayerDataFromList, updatePlayerInfo, getBestPerformers}