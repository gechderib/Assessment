import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NearBy = () => {
  return (
    <div className="flex flex-col lg:mx-32 mb-10">
      <div className="self-center">
        <p className="text-5xl uppercase text-center">
          find trustrx in a sprouts farmers market near you!
        </p>
      </div>
      <div className="mt-16 mb-10">
        <iframe
          title="title"
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
          height="450"
        ></iframe>
      </div>
      <div className="flex self-center bg-black justify-center text-white cursor-pointer capitalize text-center mb-10 py-2 px-5 text-base w-60">
        <p className="uppercase">find store near me</p>
        <FontAwesomeIcon className="ml-2 self-center" icon={faArrowRight} />
      </div>
      <div className="border-t border-gray-800 lg:mx-64 md:mx-40 sm:mx-12 mx-8 mb-10"></div>
    </div>
  );
};

export default NearBy;
