const mongoose = require("mongoose")


const modalData = mongoose.Schema({
    verName: {type: String},
    veduName: {type: String},
    certificateDate: {type: String},
    img_url: {type: String},
    imagesDetails: {},

},{ timestamps: true })


const NewPdf = mongoose.model("fileDetails", modalData)
module.exports = NewPdf