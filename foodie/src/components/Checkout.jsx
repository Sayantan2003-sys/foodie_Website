import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ onClose }) => {

    const cartItems = useSelector((state) => state.cart.cart);
    const totalPrice = cartItems?.reduce((sum, item) => sum + item.qty * item.price, 0) || 0;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/checkout", {
                name,
                email,
                address,
                phone,
                cartItems,
                totalAmount: totalPrice,
            });
            alert(res.data.message);
            navigate("/success");
            
        } catch (error) {
            console.error("Error during checkout:", error);
            alert("Failed to place order. Please try again.");
        }

    };


    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-[9999]">
            <div className="relative bg-[#fff4f1] text-gray-500 w-[90%] sm:w-[400px] md:w-[450px] p-6 rounded-lg shadow-lg text-left text-sm">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                >
                    <IoClose />
                </button>
                <h2 className="text-2xl font-jost font-semibold mb-6 text-center text-gray-800 border-b-4
                 border-orange-500 pb-2 rounded-sm">
                    Fill The Details
                </h2>
                <form onSubmit={handelSubmit} className="bg-[#fff4f1] font-jost text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-lg shadow-lg">
                    <label htmlFor="name">Name</label>
                    <input id="name" className="w-full border mt-4 border-gray-500/30 outline-none rounded p-2"
                        type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />


                    <label htmlFor="email">Email</label>
                    <input id="email" className="w-full border mt-4 border-gray-500/30 outline-none rounded p-2"
                        type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />


                    <label htmlFor="address">Address</label>
                    <input id="address" className="w-full border mt-4 border-gray-500/30 outline-none rounded p-2"
                        type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" required />


                    <label htmlFor="phone">Phone</label>
                    <input id="phone" className="w-full border mt-4 border-gray-500/30 outline-none rounded p-2"
                        type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" required />

                    <button type="submit" className="w-full my-3 bg-orange-500 hover:bg-orange-600 active:scale-95 transition py-2.5 rounded-md text-white">Placed Order</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;