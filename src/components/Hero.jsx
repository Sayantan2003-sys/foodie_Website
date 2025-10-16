import React from "react";
import Rating from "./Rating";
import Header from "./Header";
import Search from "./Search";
import CategoryMenu from "./CategoryMenu";
import FoodItems from "./FoodItems";
import Cart from "./Cart";
import Footer from "./Footer";

const Hero = () => {
    return (
        <>
            <Header />
            <section className="mx-auto max-w-[1440px] px-4 lg:px-12">
                <div className="h-full w-full rounded-2xl relative overflow-hidden object-cover">
                    <img src="/bg.png" alt="hero background" className="absolute inset-0 w-full h-full object-cover -z-10" />

                    <div className="mx-auto max-w-[1440px] px-4 flex flex-col justify-between h-full">

                        <div className="max-w-[788px] pt-13 lg:pt-20">
                            <h3 className="text-3xl font-bold text-gray-700 pb-2">Fresh Bites for Every Mood</h3>
                            <h2 className="uppercase !mb-0 tracking-[0.22rem] font-bold text-3xl">
                                <span className="text-[#ac2c28]">Get More</span>
                                <span className="text-[#fd872f]">for Less – 25% Off!</span>
                            </h2>
                            <h1 className="font-[800] leading-none text-5xl text-gray-700">
                                on Rice & Curries
                            </h1>

                            <div className="flex items-center text-2xl font-[700] text-gray-700">
                                <h3>Starting From</h3>
                                <span className="bg-white p-1 inline-block rotate-[-2deg]
                                ml-2.5 text-5xl font-extrabold text-gray-800">
                                    <span className="text-2xl relative bottom-3">₹</span>04.
                                    <span className="text-2xl">99</span>
                                </span>
                            </div>
                            <button className="bg-orange-600 hover:bg-orange-500 transition-colors duration-200 p-5 w-52 text-lg
                         font-bold mt-8 !rounded-none cursor-pointer text-white">
                                Shop Now
                            </button>
                        </div>

                        <div className="pb-9">
                            <Rating />
                        </div>
                    </div>
                </div>
            </section>
            <Search />
            <CategoryMenu />
            <FoodItems />
            <Cart />
            <Footer />

        </>
    )
}

export default Hero                                                                                                      