const mongoose = require('mongoose');
MONGO_URI='mongodb://localhost:27017/library';
//mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(()=>{
    console.log('database connected.')
}).catch((err) => console.log("Not connected"));
const Schema=mongoose.Schema;
const AuthorSchema=new Schema(
    {
        title:String,
        author:String,
        genre:String,
        image:String
    }
);
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;