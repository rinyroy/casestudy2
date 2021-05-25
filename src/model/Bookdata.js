const mongoose = require('mongoose');
//MONGO_URI='mongodb://localhost:27017/library';
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.connect('mongodb+srv://userone:userone@cluster0.cl3nk.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority').then(()=>{
    console.log('database connected.')
}).catch((err) => console.log("Not connected"));
const Schema=mongoose.Schema;
const BookSchema=new Schema(
    {
        title:String,
        author:String,
        genre:String,
        image:String
    }
);
//Model creation
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;