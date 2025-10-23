const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },

    cartItems: [
        {
            id: Number,
            name: String,
            price: Number,
            img: String,
            qty: Number,
            
        },
    ],
    totalAmount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Order', orderSchema, 'orders');