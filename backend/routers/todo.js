const express = require("express");
const {handelAddToDo} = require("../controllers/todo")
const router = express.Router();

router.post("/addTodo",handelAddToDo);

module.exports = router;