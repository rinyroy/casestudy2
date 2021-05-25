const mongoose = require('mongoose');
//MONGO_URI='mongodb://localhost:27017/library';
mongoose.connect('mongodb+srv://userone:userone@cluster0.cl3nk.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority').then(()=>{
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    console.log('database connected.')
}).catch((err) => console.log("Not connected"));
const Schema=mongoose.Schema;
const ValidateSchema=new Schema(
    {
        username:String,
        psw:String
    }
);
var Validate = mongoose.model('validatedata',ValidateSchema);

module.exports = Validate;