const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const WorkoutRoutes = require('./Routes/WorkoutRoute')
const cors = require('cors')

const UserRoutes = require('./Routes/UsersAuth')

//initializing express app
const app = express()

//connect to MongoDB
mongoose.connect(process.env.URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running in port :", process.env.PORT)
  })
}).catch(err => console.log(err));

//Middlewares

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})

//Routes middleware

app.use('/api/workouts',WorkoutRoutes);

app.use('/api/Userauth',UserRoutes);
