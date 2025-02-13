"use client";

import WaterWave from "./WaterWave";

const Banner = () => {


  return (
    <div className=" rounded-xl shadow-md max-w-5xl relative bg-gradient-to-r from-blue-50 to-blue-200">
        <div className="p-4">
        <h1 className="text-[28px] font-bold tracking tracking-wider text-blue-500">Save Water, Save the future 💙</h1>
        <p className="text-sm  tracking-widest text-gray-700 mt-2"> Households using smart meters reduce water wastage by 30%</p>


        </div>
        <WaterWave/>
      
      
   {/* <WaterWave/> */}
  </div>
  );
};

export default Banner;
