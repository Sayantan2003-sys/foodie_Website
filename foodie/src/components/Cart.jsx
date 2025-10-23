import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Checkout from './Checkout';
import { useUser } from "@clerk/clerk-react"; 


const Cart = () => {

    const [open, setOpen] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const { isSignedIn } = useUser();


    const cartItems = useSelector((state) => state.cart.cart);
    const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0); 
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    const navigate = useNavigate();

    const handelNav = () => {
        if (!isSignedIn) {
            alert("Please sign in to proceed to checkout.");
            return;
        }
        setShowModal(true);
    }

    return (
        <>
        {/* 🛒 Cart Sidebar */}
            <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3 ${open ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>


                <div className="flex justify-between items-center my-3">
                    <span className="text-xl font-bold text-gray-800 font-jost">My Orders</span>
                    <IoMdClose onClick={() => setOpen(!open)} className="border-2 border-gray-600 text-gray-600 font-bold
                 p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300"/>
                </div>

                {cartItems.length > 0 ?
                    cartItems.map((food) => {
                        return (
                            <ItemCard key={food.id}
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                img={food.img}
                                qty={food.qty}
                            />
                        );
                    }) : <h2 className="font-bold font-jost text-gray-800 text-xl text-center pt-3">Your Cart Is Empty</h2>
                }

                <div className="absolute bottom-0">
                    <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
                    <h3 className="font-semibold text-gray-800">Total Amount: {totalPrice}</h3>
                    <hr className="w-[90vw] lg:w-[18vw] my-2" />
                    <button onClick={handelNav} className="bg-orange-500 font-bold px-3 py-2 text-white
                 rounded-lg w-[90vw] lg:w-[18vw] mb-5">
                        Checkout
                    </button>
                </div>
            </div>
             
             {/* 🧾 Floating Cart Icon */}
            <FaShoppingCart onClick={() => setOpen(!open)} className={`rounded-full bg-orange-400 shadow-md text-5xl p-3 fixed bottom-4 right-8 
            ${totalQty > 0 && "animate-bounce delay-300 transition-all"}`} />


             {/* 🧩 Modal outside sidebar (centered on screen) */}
            {showModal && <Checkout onClose={() => setShowModal(false)} />}
        </>
    )
}

export default Cart