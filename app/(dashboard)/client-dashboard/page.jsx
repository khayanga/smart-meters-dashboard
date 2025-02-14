
import { Consumption } from '@/components/Consumption'
import DashboardCards from '@/components/DashboardCards'
import Map from '@/components/Map'
import React from 'react'
import CustomersTable from '@/components/CustomersTable'
import MeterReading from '@/components/MeterReading'
import { ConsumersChart } from '@/components/ConsumersChart'



const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 pt-2">
     

     
      
      <DashboardCards/>
      
    <div className="min-h-[100vh]  rounded-xl flex flex-col items-center justify-center md:flex-row gap-4 mt-6 md:min-h-min " >
      <div className='md:w-1/2'>
      <Consumption/>

      </div>
      <div className='md:w-1/2 w-full'>
      <CustomersTable/>

      </div>
      
      
     
    </div>
    <div className="min-h-[100vh] rounded-xl flex flex-col items-center justify-center md:flex-row gap-4 md:mt-6 md:min-h-min " >
      
      <div className='md:w-1/2  w-full ml-2'>
      <MeterReading/>

      </div>
      <div className='md:w-1/2 w-full '>
      <ConsumersChart/>

      </div>
      
      
     
    </div>


    
    

    <div className='mt-3 rounded-xl flex flex-col items-center justify-center md:flex-row gap-4 md:mt-6 md:min-h-min '>

      <div className='md:w-3/4 w-full'>
        <Map/>

      </div>

      {/* <div className='w-1/4'>
        <ClockCard/>
      </div> */}
    
     


    </div>
   
    
    
  </div>
  )
}

export default page