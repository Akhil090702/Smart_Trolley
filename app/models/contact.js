const mongoose = require("mongoose");
const Schema = mongoose.Schema

const contactSchema = new Schema({
    yourname: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Inform = mongoose.model('Contact', contactSchema);
module.exports = Inform;
