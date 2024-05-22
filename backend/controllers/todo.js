const Todo = require("../models/todo");

const handelAddToDo = async(req, res)=>{
    const {body} = req;
    console.log(body.data.todo);
    const commonTodo = await Todo.findOne({todo:body.data.todo})
    if (commonTodo) {
     return res.json({error:"this todo is already present"})
    }
    await Todo.create({
        todo:body.data.todo
    })
    const allTodo = await Todo.find({});
    res.json({allTodo})
};
module.exports= {handelAddToDo}