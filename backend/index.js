const express = require("express")
const app = express();
const { createTodo, updateTodo } = app.get("zod")

app.use(express.json());

app.post("/todo" , (req,res) => {


})
app.get("/todos" , (req,res) => {


    
})
app.put("completed" , (req,res) => {


    
})
app.delete("delete" , (req,res) =>{

})