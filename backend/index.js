const express = require("express");
const dotenv = require("dotenv")
const bodyParser = require('body-parser');
const connectToMongoDb = require("./connection/connect")
const todoRouter = require("./routers/todo")


const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

connectToMongoDb("mongodb://127.0.0.1:27017/todo-list")

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(bodyParser.json())
app.use("/",todoRouter)
app.get("/", (req,res)=>{res.json({msg:"hello from server"})})



app.listen(PORT, ()=>{
    console.log(`app is listening at port ${PORT}`);
});

