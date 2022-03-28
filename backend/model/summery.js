const  mongoose =require('mongoose');
const { Schema } = mongoose;

const summerySchema = new Schema({
    prodType: {type: Array}, 
    storeLocation:{type : String },
    storeaddress:{type  :String },
    storePhone :{type  :String},
    // quantity: {type: Number},
    // subTotal: {type: Number},
    // total: {type: Number},
    totalItem: {type: Number},
    subTotal: {type: Number},
    price: {type: Number},
    pickupcharges :{type  : Number, default: 90},
    reforder:{type:Schema.Types.ObjectId, ref:"summary"},
    user:{ type : String, } ,
    address:{type: String }                
     
}, {strict: false },{timestamps:true});


const summary = mongoose.model('summary',summerySchema);

module.exports =summary