import React, { useState } from "react";
import "./careProducts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const CareProducts = ({ leftText = false }) => {
  return (
    <div className="md:grid md:grid-cols-3">
      <div className={`col-span-2 ${leftText?"order-last":""}`}>
        <img
          className="img1 w-full"
          src={require("../assets/images/img1.jpg")}
          alt="this is"
        />
      </div>
      <div className="col-span-1 leftDiv">
        <p className="uppercase text-white md:mt-20 mx-10 text-4xl md:text-5xl">
          find our hair care products in a sprouts near you!
        </p>
        <p className=" text-white mt-5 mx-10 text-justify text-lg">
          We are working hard to line the shelves with our products so that our
          customers can kiss those bad hair days boodbye, once and for all.
        </p>
        <div className="flex cursor-pointer capitalize shopnow ml-10 mt-20 text-center p-5 font-extrabold text-base w-40">
          <p>shop now</p>
          <FontAwesomeIcon className="ml-2 self-center" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default CareProducts;
