import React from "react";

const MapSection = () => {
  return (
    <>
     <div className="flex items-center justify-center pb-2 mt-6">
        <h2 className="text-3xl font-jost font-bold text-gray-800 border-b-4 border-orange-500 pb-2 inline-block rounded-sm">
          Our Location
        </h2>
        </div>

    <div className="w-full flex justify-center my-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1299.5496044265717!2d88.39002151387956!3d22.88822662364513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8915a8dedfa1d%3A0x9ec8063b453b0423!2sFulpukur%20Durga-Puja%20Mandop!5e0!3m2!1sen!2sin!4v1761113220902!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[90%] h-[400px] md:w-[80%] md:h-[500px] rounded-lg shadow-lg border-0"
      ></iframe>
    </div>
    </>
  );
};

export default MapSection;
