import { Bot, CircleUserRound, Droplet, MapPin, Timer, UserRound } from 'lucide-react'
import React from 'react'
import Banner from './Banner'

const DashboardCards = () => {
  return (
    <div className='flex flex-col md:flex-row gap-3 md:gap-6 items-center '>
    <div className='md:w-1/2 '>
        <h1 className='text-xl font-bold text-gray-700 dark:text-white'>Welcome back User</h1> 
        <Banner/>
        
    </div>
    
    {/* <p className='text-sm tracking-wider mt-2 text-gray-600 dark:text-white'>The following are anlaytics of progress</p> */}
    <div className="grid auto-rows-min gap-4 md:grid-cols-2 md:w-1/2 w-full">

        <div className=" rounded-xl shadow-md bg-blue-500 p-4" >
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium text-white flex items-center justify-between w-full">
                <h1>Total Consumption</h1>
                <Droplet className="h-5 w-5 text-gray-200 mr-2 font-bold"/>
            </div>

        </div>

        
        <div className="text-2xl font-bold text-white">
            <h1>1500L</h1>
            </div>
            <p className="text-xs mt-3 text-gray-200">Consumption rate </p>


        </div>

        <div className=" rounded-xl shadow-md bg-blue-50 p-4" >
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium text-gray-800 flex items-center justify-between w-full">
                <h1>Sites</h1>
                <MapPin className="h-5 w-5 text-blue-500 mr-2 font-bold"/>
            </div>

        </div>

        
        <div className="text-2xl font-bold text-blue-500">
            <h1>15</h1>
            </div>
            <p className="text-xs mt-3 text-gray-700">Total number of sites </p>


        </div>
        <div className=" rounded-xl shadow-md bg-blue-50 p-4" >
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium text-gray-800 flex items-center justify-between w-full">
                <h1>Meters</h1>
                <Timer className="h-5 w-5 text-blue-500 mr-2 font-bold"/>
            </div>

        </div>

        
        <div className="text-2xl font-bold text-blue-500">
            <h1>24</h1>
            </div>
            <p className="text-xs mt-3 text-gray-700">Total number of meters </p>


        </div>
        <div className=" rounded-xl shadow-md bg-blue-50 p-4" >
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium text-gray-800 flex items-center justify-between w-full">
                <h1>Total revenue</h1>
                <UserRound className="h-5 w-5 text-blue-500 mr-2 font-bold"/>
            </div>

        </div>

        
        <div className="text-2xl font-bold text-blue-500">
            <h1>5000</h1>
            </div>
            <p className="text-xs mt-3 text-gray-700">Total amount earned </p>


        </div>

    </div>
    </div>
    
  )
}

export default DashboardCards