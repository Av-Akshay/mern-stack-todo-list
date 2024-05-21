const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo:{
        type:String,
        require: true,
        unique:true
    }
},{timestamps:true})

const Todo = mongoose.model("todo",todoSchema);

module.exports = Todo;