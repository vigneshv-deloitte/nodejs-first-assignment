let { matches } = require("../utils/data.js")

const getAllMatchList = () => {
    return matches;
}

const getMatch = (date) => {
    return matches.filter((match) => match.date === date)
}

const addNewMatch = (matchDetails) => {
    matches.push(matchDetails)
    return;
}

const updateMatchDetails = (matchId, matchDetails) => {
    matches.forEach((match, index) => {
        if (match.id === matchId) {
            updatedMatch = { ...match, ...matchDetails }
            matches[index] = updatedMatch
        }

    })
    return;
}

const deleteMatchById=(matchId)=>{
    matches=matches.filter((match)=>match.id!==matchId)
    return;
}

module.exports = { getAllMatchList, getMatch, addNewMatch , updateMatchDetails, deleteMatchById}