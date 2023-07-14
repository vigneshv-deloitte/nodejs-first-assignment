const { getAllPlayersList, getPlayerDetails, addPlayer, deletePlayerDataFromList, updatePlayerInfo, getBestPerformers } = require("../service/playersService.js")
const { getTeams } = require("../service/teamsService.js")

const getAllPlayers = (req, res) => {
    res.json(getAllPlayersList())
}

const getPlayerInfo = (req, res) => {
    const playerId = req.params.id;
    const playersList = getAllPlayersList()
    const player = getPlayerDetails(playersList, playerId);
    if (player.length) {
        res.send({
            "message": "Player Found",
            "Player Details": player
        })
    } else {
        res.send({
            "message": "Player Not Found"
        })
    }
}

const getTopPerformers=(req,res)=>{
    const team= req.params.team
    if(getTeams().includes(team)) {
        const top_performers=getBestPerformers(team)
        res.send(top_performers)
    }else{
        res.status(400).send("This team doesn't exist")
    }
}

const addNewPlayer = (req, res) => {
    const newPlayer = req.body["playerDetails"]
    const playersList = getAllPlayersList();
    if (playersList.filter((player) => player.playerUniqueId === newPlayer.playerUniqueId).length) {
        res.status(400).send("The player with this unique Id already exists.")
    } else {
        const teams = getTeams();
        if (teams.includes(newPlayer.team)) {
            addPlayer(newPlayer)
            res.send("Successfully added!")
        } else {
            res.status(400).send("The team which you are trying to assign to this player does not exist.")
        }

    }
}

const deletePlayerData = (req, res) => {
    const playerId = req.params.id;
    const playersList = getAllPlayersList();
    if (playersList.filter((player) => player.id === parseInt(playerId)).length) {
        deletePlayerDataFromList(playerId)
        res.send("Successfully deleted!")
    } else {
        res.status(400).send("Player with this id doesn't exist.")
    }
}

const updatePlayerData = (req, res) => {
    const playerId = req.params.id;
    const playersList = getAllPlayersList();
    if (playersList.filter((player) => player.id === parseInt(playerId)).length) {
        const playerData = req.body["data"]
        if (playerData.team && !getTeams().includes(playerData.team)) {
            res.status(400).send("The team which you are trying to assign to this player does not exist.")
        }
        else {
            updatePlayerInfo(playerId, playerData)
            res.send("Successfully Updated!")
        }
    } else {
        res.status(400).send("Player with this id doesn't exist.")
    }
}

module.exports = { getAllPlayers, getPlayerInfo, addNewPlayer, deletePlayerData, updatePlayerData, getTopPerformers }