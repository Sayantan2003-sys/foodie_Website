import React, { useEffect, useState } from "react"
import FoodData from "../data/FoodData"
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {

    const [categories, setCategories] = useState([]);

    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((food) => food.category)),
        ];
        setCategories(uniqueCategories);
    };

    useEffect(() => {
        listUniqueCategories();
    }, []);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.category);



    return (
        <div className="ml-6">
            <h3 className="text-xl font-semibold pt-6 font-jost">Find the best food</h3>
            <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
                {/* ALL Button */}
                <button onClick={() => dispatch(setCategory("All"))} className={`px-3 py-2 font-jost font-bold rounded-lg transition-colors duration-300
                    ${selectedCategory === "All" ? "bg-orange-600 text-white" : "bg-gray-200 hover:bg-orange-500 hover:text-white"
                    }
                    `}>
                    All
                </button>

                {/* Dynamic Category Buttons */}

                {categories.map((category, index) => {
                    return (
                        <button key={index} onClick={() => dispatch(setCategory(category))}
                         className={`px-3 py-2 font-jost font-bold rounded-lg transition-colors duration-300
                        ${
                            selectedCategory === category ? "bg-orange-600 text-white" : "bg-gray-200 hover:bg-orange-500 hover:text-white"
                        }`}>
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default CategoryMenu