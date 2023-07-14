const express= require('express')
const app= express()

app.use(express.json())

app.get("/",(req,res)=>{
    console.log("Home Page")
})

const teamsRouter= require("./routes/teamsRoutes")
app.use("/teams",teamsRouter)

const playersRouter= require("./routes/playersRoutes")
app.use("/players", playersRouter)

const matchesRouter= require("./routes/matchesRoutes")
app.use("/matches", matchesRouter)


const leaderboardRouter= require("./routes/leaderboardRoutes")
app.use("/leaderboard", leaderboardRouter)

app.listen(3000)