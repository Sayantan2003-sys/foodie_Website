import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import { useSelector } from "react-redux";

const FoodItems = () => {

    const category = useSelector((state) => state.category.category);
    const search = useSelector((state) => state.search.search);
    


    return (
        <div className="flex flex-wrap gap-8 justify-center my-10">

            {
                FoodData.filter((food) => {
                    if(category === "All") {
                        return food.name.toLowerCase().includes(search.toLowerCase());
                    } else {
                        return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
                    }
                }).map ((food) => {
                return (
                    <FoodCard
                        key={food.id}
                        id={food.id}
                        img={food.img}
                        name={food.name}
                        price={food.price}
                        desc={food.desc}
                        rating={food.rating}
                    />
                );
            })};
        </div>

    )
}
export default FoodItems