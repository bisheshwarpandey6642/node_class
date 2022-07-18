const express = require("express")
const bodyparser = require("body-parser")
const mongoose =require('mongoose')
const app = express()
const port = 8080



// require the router 

const postRoutes = require("./router/routes")

app.use(bodyparser.json());
app.use('/api', postRoutes);


//mongo --- command -----> aggregate function ------  -> mongoose[node modules]===> mongo setup
mongoose.connect("mongodb+srv://user:user@cluster0.0embh.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Database is connected and live...")
})


// server creating and running
app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
})