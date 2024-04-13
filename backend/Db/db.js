const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://swarnenduG07:9Ieljts435jQiGNx@cluster0.3ebv4my.mongodb.net/")
const todoSChema =mongoose.Schema({
    title: String,
    description: String,
    complete: Boolean

})
const todo = mongoose.model('todos' , todoSChema);
module.exports = {
    todo
}