let teams=["RCB","CSK"];

let playersList=[
    {
        id:1,
        name:"S Ganguly",
        total_matches:100,
        highest_score:170,
        avg_score:43,
        total_overs:190,
        total_wickets_taken:210,
        avg_wickets_taken:2,
        team:"RCB",
        playerUniqueId:1
    },
    {
        id:2,
        name:"M S Dhoni",
        total_matches:130,
        highest_score:210,
        avg_score:47,
        total_overs:5,
        total_wickets_taken:10,
        avg_wickets_taken:2,
        team:"CSK",
        playerUniqueId:100
    },
    {
        id:3,
        name:"Virat Kohli",
        total_matches:110,
        highest_score:240,
        avg_score:60,
        total_overs:10,
        total_wickets_taken:14,
        avg_wickets_taken:1,
        team:"RCB",
        playerUniqueId:101
    }
]

let matches=[
    {
        id:1,
        date:"01-02-2024",
        teamOne: "RCB",
        teamTwo:"CSK"
    },
    {
        id:2,
        date:"01-29-2024",
        teamOne: "RCB",
        teamTwo:"CSK"
    },
]

module.exports= {teams, playersList, matches}