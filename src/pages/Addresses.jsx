import React from "react";
import NewAddresses from "./NewAddresses";

const Addresses = () => {
  const [addressFlag, setAddressFlag] = React.useState(false);
  return (
    <div className="flex flex-col">
      <div>
        <span className="text-2xl font-bold text-gray-800 mb-5">
          Manage Addresses
        </span>
      </div>
      <br />
      <div className="ml-5">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" 
        onClick={() =>setAddressFlag(!addressFlag)}>
          <span className="text-lg">+</span>
           ADD A NEW ADDRESS
        </button>
      </div>
      <br/>
      { addressFlag && (
       <div>
        <NewAddresses/>
        </div>
        )}
       <br/>
       <hr className="bg-black"/>
       <div className="text-black shadow-2xl">
        <span className="font-bold"> Gopal 9493384380</span>
        <br/>
        <span>
        House No:137, street No:520, Vepakaya mill road, Gayathri Nagar, Kavali, Andhra Pradesh - 524201
        </span>
      
       </div>
       <br/>
       <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"/>
    </div>
  );
};

export default Addresses;
