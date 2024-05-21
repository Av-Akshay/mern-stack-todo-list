const express = require("express");
const dotenv = require("dotenv")

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.get("/", (req, res)=>{
    res.json({msg: " hello from server"})
});

app.listen(PORT, ()=>{
    console.log(`app is listening at port ${PORT}`);
});

