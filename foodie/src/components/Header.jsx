import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";


const Header = () => {
    return (
        
        <header className="flex justify-between items-center px-5 py-3 top-0 z-50 bg-[#fff4f1]">
            {/* Logo */}
            <Link to={'/'} className="flex items-center gap-3">
                <img src="./public/bibimbap.png" alt="logoImg" className="h-17 w-auto" />
                <div className="flex flex-col leading-tight">
                    <span className="font-bold text-2xl text-orange-500 font-dancing">Foodie</span>
                    <span className="text-xl text-gray-600 font-jost">Fiesta</span>
                </div>
            </Link>

            {/* Actions */}
            <div>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="text-white px-5 py-3 flex gap-3 font-[500] bg-orange-600 rounded-full hover:bg-orange-500 transition-colors duration-300 font-jost cursor-pointer">
                            Login
                            <div className="mt-0.5 mr-2">
                                <FaRegUser />
                            </div>
                        </button>
                    </SignInButton>
                </SignedOut>

                {/* Show user profile if signed in */}
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                </SignedIn>
            </div>
        </header>
    )
}

export default Header