const { getTeams, addTeam, deleteTeamFromList,updateTeamName, getPlayersData} = require("../service/teamsService")


const getAllTeams=(req, res)=>{
    res.json(getTeams());
}

const getPlayersList=(req,res)=>{
    const team= req.params.team
    const allTeams = getTeams();
    if(allTeams.includes(team)){
        const playersList=getPlayersData(team)
        res.send({
            "Players List": playersList
        })
    }else{
        res.status(400).send("This team doesn't exist.")
    }
}
const addNewTeam=(req, res)=>{
    const newTeam= req.body['teamName']
    const allTeams = getTeams();
    if(allTeams.includes(newTeam)){
        res.status(400).send("This team already exists.")
    }else{
        addTeam(newTeam)
        res.send("Successfully added!")
    }
}

const deleteTeam=(req,res)=>{
    const teamName= req.body["teamName"]
    const allTeams = getTeams();
    if(allTeams.includes(teamName)){
        deleteTeamFromList(teamName)
        res.send("Successfully deleted!")
    }else{
        res.status(400).send("This team doesn't exist.")
    }
}

const updateTeam=(req,res)=>{
    const oldName= req.params.team
    const teamName= req.body["teamName"]
    const allTeams = getTeams();
    if(allTeams.includes(oldName)){
        if(allTeams.includes(teamName)){
            res.status(400).send("New team name already exist. Please try with different name.")
        }
        else{
            updateTeamName(oldName,teamName)
            res.send("Successfully updated!")
        }
    }else{
        res.status(400).send("This team doesn't exist.")
    }
}
module.exports={getAllTeams, getPlayersList, addNewTeam, deleteTeam, updateTeam}