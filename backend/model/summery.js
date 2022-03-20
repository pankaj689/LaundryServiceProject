const  mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    storeLocation:{type : String,required: true },
    storeaddress:{type  :String ,required: true},
    storePhone :{type  :String ,required: true},
    totalitem:{type  :Number ,required: true},
    pickupPrice :{type  : Number ,required: true},
//    user:{type:Schema.Types.ObjectId, ref:"userdetails"} 
    useraddress:{type: String, required:true  }
     
}, {strict: false },{timestamps:true});

const summary = mongoose.model('summary',userSchema);

module.exports =summary