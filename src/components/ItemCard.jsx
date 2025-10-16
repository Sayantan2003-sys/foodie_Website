import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../redux/slices/CartSlice";

const ItemCard = ({ id, name, img, qty, price }) => {

    const dispatch = useDispatch()

    return (
        <div className="flex gap-2 shadow-md rounded-4xl p-2">
            <MdDelete onClick={() => dispatch(removeFromCart({ id, name, img, price, qty }))} className="absolute right-7 text-gray-800 cursor-pointer" />
            <img src={img}
                className="w-[50px] h-[50px]"
            />
            <div className="leading-5">
                <h2 className="font-bold text-gray-800 font-jost">{name}</h2>
                <div className="flex justify-between">
                    <span className="text-orange-500 font-bold">₹{price}</span>
                    <div className="flex justify-center items-center gap-2 absolute right-7">
                        <AiOutlinePlus onClick={() => qty >= 1 ? dispatch(incrementQty({id})) : 
                       ( qty = 0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-orange-500 hover:border-none
                rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"/>
                        <span>{qty}</span>
                        <AiOutlineMinus onClick={() => qty > 1 ? dispatch(decrementQty({id})) : (qty = 0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-orange-500 hover:border-none 
                rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard