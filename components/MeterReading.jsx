'use client'
import React from 'react'
import { Card } from './ui/card'
import { meters } from '@/data'
import { Button } from './ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback } from './ui/avatar'

const MeterReading = () => {
   
  return (
    <div className="rounded-lg md:min-h-min mt-2  ">
      <Card className='p-4 '>
            <div className=' p-2 flex flex-row justify-between items-center'>
            <h1 className='text-blue-500 font-bold tracking-wider text-md'>Current Meter readings</h1>
            <Link href='/customers'>
            <Button className='text-sm'>
                View More
            </Button>
            </Link>
            

            </div>
            <hr/>

            
            <div>
                <ul className='p-2   '>
                    {meters.map((meter)=>
                    <li key={meter.id}>
                        <div className='p-2 flex flex-row justify-between items-center mb-1'>
                        
                        <p className='text-sm font-light'>{meter.serial}</p>
                        <p className='text-sm font-light'>{meter.site}</p>
                        <p className='text-sm font-light'>{meter.reading}</p>

                        </div>
                        <hr/>
                    </li>)}
                   
                    
                </ul>
                
            </div>

          </Card>
        
      </div>
      
  )
}

export default MeterReading