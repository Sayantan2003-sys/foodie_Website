import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);


    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <PropagateLoader color="#36d7b7" />
                <p className="mt-4">Processing your order...</p>
            </div>
        );
    }

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
            <h2 className="text-3xl font-semibold mb-4 text-center">Order Successful!</h2>
            <p>Your order has been successfully placed</p>
        </div>
      </div>
    )
}

export default Success;
