const mongoose = require("mongoose")
mongoose.connect("mongodb.net/")
const todoSChema =mongoose.Schema({
    title: String,
    description: String,
    complete: Boolean

})
const todo = mongoose.model('todos' , todoSChema);
module.exports = {
    todo
}
