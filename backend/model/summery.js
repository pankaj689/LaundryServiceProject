const  mongoose =require('mongoose');
const { Schema } = mongoose;

const summerySchema = new Schema({
    prodType: {type: Array}, 
    prodType: [{type: String}],
    storeLocation:{type : String },
    storeaddress:{type  :String },
    storePhone :{type  :String},
    quantity: {type: Number},
    subTotal: {type: Number},
    total: {type: Number},
    pickupcharges :{type  : Number, default: 90},
    user:{type:Schema.Types.ObjectId, ref:"orderHistory"},
    address:[{type: String, required:true  }]
     
}, {strict: false },{timestamps:true});


const summary = mongoose.model('summary',summerySchema);

module.exports =summary