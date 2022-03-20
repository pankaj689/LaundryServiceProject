const  mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    prodType:{type:String, required: true},
    prodDesc:{type : String, required:true},
    prodImg:{type : String,required: true }
    
    
}, {strict: false },{timestamps:true});

const prodList= mongoose.model('prodList',userSchema);

module.exports =prodList