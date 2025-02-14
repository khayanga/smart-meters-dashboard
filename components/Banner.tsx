"use client";

import WaterWave from "./WaterWave";

const Banner = () => {


  return (
    <div className=" rounded-xl  max-w-2xl mt-2 relative bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="px-4 pt-2">
           <h1 className="text-[28px] font-medium tracking-wide text-blue-500">
            Smart Water Management for a Sustainable Future 💧
          </h1>
          <p className="text-sm tracking-widest text-gray-700 mt-2">
            Get started with your smart water meter dashboard today! Effortlessly track your water usage, 
            and receive real-time insights to reduce wastage by up to <span className="font-semibold text-blue-600">30%</span>.  
              
          </p>



        </div>
        <div>
        <WaterWave/>

        </div>
       
      
      
  
  </div>
  );
};

export default Banner;
