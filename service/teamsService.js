let {teams, playersList} = require("../utils/data.js");

const getTeams=()=>{
    return teams;
}
const getPlayersData=(team)=>{
    return playersList.filter((player)=>player.team===team)
}
const addTeam=(team)=>{
    teams.push(team);
    return;
}

const deleteTeamFromList=(teamName)=>{
    teams= teams.filter((team)=>team!=teamName)
    return;
}
const updateTeamName=(oldName,teamName)=>{
    const index= teams.indexOf(oldName)
    teams[index]= teamName
    return;
}

module.exports={getTeams, addTeam, deleteTeamFromList, updateTeamName, getPlayersData}