const express= require('express')
const app= express()

app.use(express.json())

const teamsRouter= require("./routes/teamsRoutes")
app.use("/teams",teamsRouter)

const playersRouter= require("./routes/playersRoutes")
app.use("/players", playersRouter)

const matchesRouter= require("./routes/matchesRoutes")
app.use("/matches", matchesRouter)


const leaderboardRouter= require("./routes/leaderboardRoutes")
app.use("/leaderboard", leaderboardRouter)

const server=app.listen(3000)

module.exports=server;