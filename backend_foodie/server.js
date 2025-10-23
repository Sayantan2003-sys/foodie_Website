const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Order = require('./models/Order');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/foodieDB')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log("MongoDB connection error:",err));

app.post('/api/checkout', async (req, res) => {
    try {
        const { name, email, address, phone, cartItems, totalAmount } = req.body;

        if(!name || !email || !address || !phone || !cartItems || !totalAmount) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        
        const newOrder = new Order({name, email, address, phone, cartItems, totalAmount});
        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully' });
    }
    catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});