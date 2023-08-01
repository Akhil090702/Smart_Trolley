const mongoose = require("mongoose");
const Schema = mongoose.Schema

const orderSchema = new Schema({
    items: {
        type: Object,
        required: true
    },
    paymentType: {
        type: String,
        default: 'COD'
    },
    status: {
        type: String,
        default: 'order_placed'
    },
    phone: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
