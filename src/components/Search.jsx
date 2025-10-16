import React from "react"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Search = () => {


    const dispatch = useDispatch()

    return (
        <div className="flex justify-between pl-5 pt-9">
            <Link to={'/'} className="flex items-center gap-3">
                <img src="./public/bibimbap.png" alt="logoImg" className="h-17 w-auto" />
                <div className="flex flex-col leading-tight">
                    <span className="font-bold text-2xl text-orange-500 font-dancing">Foodie</span>
                    <span className="text-xl text-gray-600 font-jost">Fiesta</span>
                </div>
            </Link>

            <div className="pr-4 pt-3">
                <input type="search" name="search"
                id="" placeholder="Search here" onChange={(e) => dispatch(setSearch(e.target.value))} autoComplete="off" 
                className="p-3 border border-gray-400 text-md rounded-lg outline-none w-full lg:w-[25vw]"/>
            </div>
        </div>
    )
}

export default Search 