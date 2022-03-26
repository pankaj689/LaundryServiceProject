const  mongoose =require('mongoose');
const { Schema } = mongoose;
const orderSchema = new Schema({
    prodType: {type: Array},
    orderId:{type:String, required: true},
    orderDate:{type : String, required:true},
    storeLocation:{type : String,required: true },
    city:{type  :String ,required: true},
    storePhone :{type  :String ,required: true},
    totalItem:{type  :Number ,required: true},
    price :{type  : Number ,required: true},
    status:{type : String , default:"Ready to Pick"},
    user:{type:Schema.Types.ObjectId, ref:"userdetails"} ,
    // refsymmery:{type:Schema.Types.ObjectId, ref:"orderHistory"},   
}, {strict: false },{timestamps:true});

const orderHistory = mongoose.model('orderHistory', orderSchema);

module.exports = orderHistory