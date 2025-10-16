import React from "react";
import {useNavigate} from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate()

    const handelClick = () => {
        navigate("/")
    }

    return (
        <>
            <div className="flex justify-center pt-16 bg-[#fff4f1]">
                <div>
                    <div>
                        <img src="/notFound.svg" alt="notFound" />
                    </div>

                    <h3 className="font-[500] text-4xl font-mono flex justify-center pt-7">NotFound</h3>

                    <div className="flex justify-center pt-3">
                        <button onClick={handelClick} className="px-6 py-4 font-dancing text-2xl bg-orange-600 hover:bg-white hover:text-black transition-colors duration-300 rounded-2xl text-white ">Return to Home</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;