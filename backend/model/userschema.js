const  mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{type:String, required: true},
    email:{type : String,unique:true, required:true},
    phone:{type : String,required: true },
    state:{type  :String ,required: true},
    district :{type  :String ,required: true},
    address:{type  :String ,required: true},
    pincode :{type  : Number ,required: true},
    password:{type : String , required: true}
    
}, {strict: false },{timestamps:true});

const userdetails = mongoose.model('userdetails',userSchema);

module.exports =userdetails