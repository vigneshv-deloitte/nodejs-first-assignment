const { getAllMatchList, getMatch, addNewMatch, updateMatchDetails, deleteMatchById} = require("../service/matchesService.js")
const {getTeams}= require("../service/teamsService.js")

const getAllMatches = (req, res) => {
    res.json(getAllMatchList())
}

const getMatchInfo=(req, res)=>{
    let date= req.body["date"]
    match= getMatch(date)
    if(match.length){
        res.send({
            "message":`Match found on ${date}`,
            "matchInfo": match
        })
    }else{
        res.status(400).send(`No match found on ${date}`)
    }
}

const addMatch=(req,res)=>{
    matchDetails= req.body["matchDetails"]
    teamsList= getTeams()
    if(matchDetails.date){
        if(teamsList.includes(matchDetails.teamOne) && teamsList.includes(matchDetails.teamTwo)){
            addNewMatch(matchDetails)
            res.send("Added Successfully!")
        }else{
            res.status(400).send("Invalid team name!")
        }
    }else{
        res.status(400).send("Date field is required")
    }
}

const updateMatch=(req,res)=>{
    const matchId= parseInt(req.params.id);
    const matchDetails=req.body["matchDetails"];
    if(getAllMatchList().filter((match)=>match.id===matchId).length){
        updateMatchDetails(matchId,matchDetails)
        res.send("Successfully Updated!")
    }else{
        res.status(400).send("There is no match with this id")
    }
}

const deleteMatch=(req, res)=>{
    const matchId= parseInt(req.params.id);
    if(getAllMatchList().filter((match)=>match.id===matchId).length){
        deleteMatchById(matchId)
        res.send("Successfully Deleted!")
    }else{
        res.status(400).send("There is no match with this id")
    }
}

module.exports={getAllMatches, getMatchInfo, addMatch, updateMatch, deleteMatch}