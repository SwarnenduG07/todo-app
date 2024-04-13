const express = require("express");
const { createTodo } = require("../types");
const { todo } = require("./Db/db");
const app = express();

app.use(express.json());

app.post("/todo" , async (req,res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
       res.status(411).json({
        msg: "You sent thw wrong inpute"
       })
    } 
    // put mongodp
   await todo.create({
        title: createPayload.title,
        description:createPayload.description,
        completed: false

    })

})
app.get("/todos" ,async (req,res) => {
    const todos = await todo.find({})
    res.json({
        msg: "Todo created"
    })

    
})
app.put("completed" ,async (req,res) => {
    const updatePayload = req.body;
    const parsesPayload = createTodo.safeParse(updatePayload);
    if(!parsesPayload.success) {
        res.status(411).json({
            msg: "you have sent wrong input"
        })
    }
        await todo.update({
            _id: req.body._id
        },{ 
            completed: true
        })
        res.json({
            msg: "Todo marked Completed"
        })
    
})
app.delete("delete" , (req,res) =>{

}) 
app.listen(3000);
