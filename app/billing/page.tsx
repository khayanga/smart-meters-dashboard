"use client"
import React from 'react';

import Billing from '@/components/Billing';
import BillingConfig from '@/components/BillingConfig';

const page = () => {
   

  return (
    <div className="flex flex-1 flex-col gap-4 px-4">
        <div className="flex flex-col items-start  gap-1 mt-2">
        <h1 className="font-bold tracking-wide">Bank details </h1>
        <p className='text-sm tracking-wider font-light'>
            Fill in  the information down below </p>

        </div>

        <Billing/>
        <BillingConfig/>

    </div>
  )
}

export default page