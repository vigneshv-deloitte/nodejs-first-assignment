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

app.listen(3000)