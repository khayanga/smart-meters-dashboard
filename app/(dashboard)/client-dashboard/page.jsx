'use client'
import { Consumption } from '@/components/Consumption'
import DashboardCards from '@/components/DashboardCards'
import Map from '@/components/Map'
import React from 'react'
import DashboardTable from '../../../components/DashboardTable'


const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 pt-2">
      {/* Cards */}

      <DashboardCards/>

      {/* graph */}
    
    <div className="min-h-[100vh] bg-muted/50 rounded-xl flex flex-col items-center justify-center md:flex-row gap-4 mt-6 md:min-h-min " >
      <div className='md:w-1/2'>
      <Consumption/>

      </div>
      <div className='md:w-1/2'>
        <Map/>
      
      </div>
     
    </div>

    <DashboardTable/>
    
    
  </div>
  )
}

export default page