import { LoginForm } from '@/components/login-form'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const page = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center  p-6 md:p-10">
        <div className=''>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      /> 
        
        {/* <Spotlight className="right-80 top-28 h-[75vh] w-[60vw] rounded-full" fill="blue" /> */}
      </div>
       
      <div className="w-full max-w-sm px-2 relative z-10">
        <LoginForm />
      </div>
    </div>
  )
}

export default page