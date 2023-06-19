const mongoose = require('mongoose')
const Leaves = new mongoose.Schema({
    id:{
        type: String,
        required:true,
        unique: true,
    },
    company: {
        type: String,
        required:true
    }, 
    position: {
        type: String,
        required:true
    }, 
    tc: {
        type: String,
        required:true,
        unique: true,
    },  
    name: {
        type: String,
        required:true
    },  
    surname: {
        type: String,
        required:true
    },  
    startDate: {
        type: Date,
        required:true
    },  
    finishDate: {
        type: Date,
        required:true
    },
    currentDate: {
        type: Date,
        required:true,
        default: Date.now,
    },  
    totalDate: {
        type: Number
    }, 
    leavesType: {
        type: String,
        required:true
    },
    comment: {
        type: String,
    },  
    file: {
        id: {
            type: String,
            unique: true,
        },
        name:{
            type: String,
        },
        type: String,
    }, 
    admin1: {
        type: Boolean,
        default: false
    },
    admin2: {
        type: Boolean,
        default: false
    },
    admin3: {
        type: Boolean,
        default: false
    },
    admin4: {
        type: Boolean,
        default: false
    },
    isapprove: {
        type: Boolean,
        default: true
    },
    isnotapprove: {
        type: Boolean,
        default: false
    },
    isHalfDay: {
        type: Boolean,
        default: false
    }
})
module.exports= mongoose.model('leaves', Leaves)
