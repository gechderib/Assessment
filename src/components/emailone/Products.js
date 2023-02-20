import React from "react";
import "./Product.css";
const Products = () => {
  return (
    <div className="">
      <div className="grid grid-cols-10 lg:mx-32 mt-24 relative pb-10">
        <div className="retail col-span-1">
          <p className="-rotate-90 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl col-span-1 mt-96">
            retail.announcement
          </p>
        </div>
        <div className="relative col-span-9">
          <img
            className="h-full"
            src={require("../../assets/images/img2.jpg")}
            alt="this is"
          />
          <div className="absolute bottom-16 lg:right-32 md:right-16 sm:right-8 right-4 -rotate-45 cursor-pointer capitalize shopnow ml-10 mt-20 text-center p-3 font-extrabold text-base w-40">
            <p>shop now</p>
          </div>
        </div>
        <p className="absolute text-4xl md:text-6xl lg:text-8xl lg:-top-16 left-1/3 md:-top-10 -top-7 product">
          Products
        </p>
      </div>

      <div className="border-t border-gray-800 lg:mx-96 md:mx-72 sm:mx-44 mx-24 mb-10"></div>
      
    </div>
  );
};

export default Products;
