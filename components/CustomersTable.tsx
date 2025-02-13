'use client'
import React from 'react'
import { Card } from './ui/card'
import { customers } from '@/data'
import { Button } from './ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback } from './ui/avatar'


const CustomersTable = () => {
    
  return (
    <div className=" rounded-lg md:min-h-min mt-2  ">
          <Card className='p-4 md:mr-2'>
            <div className=' p-2 flex flex-row justify-between items-center'>
            <h1 className='text-blue-500 font-bold tracking-wider text-md'>Customers</h1>
            <Link href='/customers'>
            <Button className='text-sm'>
                View More
            </Button>
            </Link>
            

            </div>
            <hr/>

            
            <div>
                <ul className='p-2   '>
                    {customers.map((customer)=>
                    <li key={customer.id}>
                        <div className='p-2 flex flex-row justify-between items-center mb-1'>
                        <Avatar>
                            <AvatarFallback className='text-sm'>{customer.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <p className='text-sm font-light'>{customer.phone}</p>

                        </div>
                        <hr/>
                    </li>)}
                   
                    
                </ul>
                
            </div>

          </Card>
            
    </div>
  )
}

export default CustomersTable