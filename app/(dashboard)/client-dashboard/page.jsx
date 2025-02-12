
import { Consumption } from '@/components/Consumption'
import DashboardCards from '@/components/DashboardCards'
import Map from '@/components/Map'
import React from 'react'
import CustomersTable from '@/components/CustomersTable'
import MeterReading from '@/components/MeterReading'


const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 pt-2">
      
      {/* Cards */}

      <DashboardCards/>

      {/* graph */}
    
    <div className="min-h-[100vh]  rounded-xl flex flex-col items-center justify-center md:flex-row gap-4 mt-6 md:min-h-min " >
      <div className='md:w-1/2'>
      <Consumption/>

      </div>
      <div className='md:w-1/2'>
      <CustomersTable/>

      </div>
      
      
     
    </div>
    <div className="min-h-[100vh] rounded-xl flex flex-col items-center justify-center md:flex-row gap-4 mt-6 md:min-h-min " >
      
      <div className='md:w-1/2 ml-2'>
      <MeterReading/>

      </div>
      <div className='md:w-1/2'>
      <Consumption/>

      </div>
      
      
     
    </div>


    
    

    <div className=' flex  flex-col gap-2'>
    <div>
        <h1 className='text-xl font-bold'>Sites available</h1> 
        
    </div>
      <Map/>


    </div>
   
    
    
  </div>
  )
}

export default page