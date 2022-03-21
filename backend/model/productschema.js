const  mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    prodType:{type:String, required: true},
    prodDesc:{type : String, required:true, default:"Lorem Ipsum is simply dummy text of the"},
    prodImg:{type : String,required: true }
}, {strict: false },{timestamps:true});

const prodList= mongoose.model('prodlist',userSchema);

module.exports =prodList