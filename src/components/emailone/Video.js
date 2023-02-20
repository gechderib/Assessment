import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Video = () => {
  return (
    <div className="mb-20 relative">
      <img
        className="w-full img1"
        src={require("../../assets/images/img5.jpg")}
        alt="this"
      />
      <div className="absolute left-20 top-1/4 lg:w-1/3">
        <p className="text-7xl text-white mb-10">Shop Now</p>
        <p className="text-white mb-20">
          Not only can you order our plant-based hair care products online, but
          now you can find them in a Sprouts location near you!
        </p>
        <div className="flex self-center border rounded-3xl nearMe justify-center text-white cursor-pointer capitalize text-center mb-10 py-2 px-5 text-base w-60">
          <p className="uppercase">find store near me</p>
          <FontAwesomeIcon className="ml-2 self-center" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Video;
