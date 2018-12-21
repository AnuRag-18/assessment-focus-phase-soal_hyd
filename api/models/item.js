const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    itemImage: { type: String, required: true },
    description:{type:String,required:true},
    addedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:'true'},
    status:{type:boolean},
    bidTime:{}
    



});

module.exports= mongoose.model('Item',itemSchema);