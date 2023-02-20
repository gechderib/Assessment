import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ourHairCare.css"
const OurHairCare = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center text-4xl mb-16">
        <p className="self-center">OUR HAIR CARE BOOSTERS </p>
        <p className="self-center">ARE AS EASY AS </p>
        <p className="self-center">1-2-3 </p>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-2">
            
        </div>
        <div className="col-span-4">
            <div className="btnBorder flex self-center justify-center">
                <p className="self-center mr-3">SHOP NOW  </p><FontAwesomeIcon className="self-center" icon={faArrowRight}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurHairCare;
