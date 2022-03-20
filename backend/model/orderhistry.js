const  mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    orderId:{type:String, required: true},
    orderDat:{type : String, required:true},
    storeLocation:{type : String,required: true },
    city:{type  :String ,required: true},
    storePhone :{type  :String ,required: true},
    totalitem:{type  :Number ,required: true},
    price :{type  : Number ,required: true},
   //status:{type : String , required: true},
   user:{type:Schema.Types.ObjectId, ref:"userdetails"} 
    
}, {strict: false },{timestamps:true});

const orderHistory = mongoose.model('orderHistory',userSchema);

module.exports =orderHistory