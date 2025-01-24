'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4">

    {/* Form */}
    <div className="flex flex-col gap-2">
      <div className='flex flex-row items-center gap-4'>
      <h1 className="font-bold tracking-wider">Customer Management</h1>
        <Button >
         12
        </Button>
      </div>
      
        <p className="mt-1 tracking-wider text-sm font-light ">
          Fill in the form below to register a customer.
        </p>

        <form className=" mt-5 w-full md:max-w-3xl  ">
          <Card className='shadow-lg bg-muted/50  '>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-6 p-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Customer Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter customer's name"
                    
                  />
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="phone">Customer Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(+254...)"
                   
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="(example@gmail.com)"
                   
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    type="text"
                    required
                    placeholder="Enter customer's address"
                   
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" >
                Add customer
              </Button>
            </CardFooter>
          </Card>
          </form>
    </div>
    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min px-6" >

    The table goes here

    </div>
  </div>
  )
}

export default page