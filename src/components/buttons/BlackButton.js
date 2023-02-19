import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BlackButton = ({ text, handleClick }) => {
  return (
    <div className="flex justify-center" onClick={handleClick}>
      <div className="flex bg-black justify-center text-white cursor-pointer capitalize  mb-10 py-2 px-5 text-base w-60">
        <p className="uppercase">{text}</p>
        <FontAwesomeIcon className="ml-2 self-center" icon={faArrowRight} />
      </div>
    </div>
  );
};

export default BlackButton;
