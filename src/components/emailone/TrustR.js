import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TrustR = ({text, leftText}) => {
  return (
    <div className={`md:flex ${leftText?"flex-row-reverse md:ml-32":"md:mr-32"} gap-10 mb-10 mx-10`}>
      <div className="">
        <img className="" src={require("../../assets/images/img4.jpg")} alt="this" />
      </div>
      <div className={`self-center ${leftText?"md:text-end":""}`}>
        <p className="uppercase text-5xl mb-10 product mt-10">
            {text}
        </p>
        <div className={`flex self-center bg-black justify-center text-white cursor-pointer capitalize text-center mb-10 py-3 px-5 text-base w-60 ${leftText?"md:float-right":""}`}>
          <p className="uppercase">shop now</p>
          <FontAwesomeIcon className="ml-2 self-center" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default TrustR;
