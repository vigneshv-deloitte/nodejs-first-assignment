let {playersList}= require("../utils/data.js")

const getAllPlayersList=()=>{
    return playersList;
}

const getPlayerDetails=(playersList, playerId)=>{
    return playersList.filter((player)=>player.id===parseInt(playerId))
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

module.exports= {getAllPlayersList, getPlayerDetails, addPlayer, deletePlayerDataFromList, updatePlayerInfo}