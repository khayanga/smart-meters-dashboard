'use client'
import { Consumption } from '@/components/Consumption'
import DashboardCards from '@/components/DashboardCards'
import React from 'react'


const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 pt-2">
      {/* Cards */}

      <DashboardCards/>

      {/* graph */}
    
    <div className="min-h-[100vh] rounded-xl flex flex-col md:flex-row gap-4 bg-muted/50 md:min-h-min p-2" >
      <div className='md:w-1/2'>
      <Consumption/>

      </div>
      <div className='md:w-1/2'>
      

      </div>
     
    </div>
    
  </div>
  )
}

export default page