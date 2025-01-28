"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { useLoadingState } from '@/components/LoadingContext';
import { Establishment, columns } from './columns';

import { DataTable } from '@/components/data-table';



const page = () => {

  const { isLoading, setIsLoading } = useLoadingState();

  const formSchema = z.object({
    establishment_name: z.string().nonempty(),
    establishment_type: z.string().nonempty(),
    establishment_occupancy: z.string().nonempty(),
    sites: z.string().nonempty(),

  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      establishment_name: '',
      establishment_type: '',
      establishment_occupancy: '',
      sites: '',
    },
  });

  const [data, setData] = React.useState<Establishment[]>([]);
  // Form submit handler
  const onSubmit = (formData: FormData) => {
    // Append the new establishment data to the table data
    const newEstablishment: Establishment = {
      ...formData,
    };
    setData([...data, newEstablishment]);
    form.reset();
  };
  return (
    <div className="flex flex-1 flex-col gap-4 px-4">

      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-4">
                  <h1 className="font-bold tracking-wider">Establishment Info</h1>
                  <Button>{data.length}</Button>
                </div>
        
                <p className="mt-1 tracking-wider text-sm font-light">
                  Fill in the form below to add an establishment.
                </p>
        
        <Form {...form}>
        <Card className="mt-3 shadow-md  md:max-w-5xl rounded-lg">
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-wrap gap-6 p-2">
                <FormField
                  control={form.control}
                  name="establishment_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Establishment Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter establishment name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                  />

                   <FormField
                    control={form.control}
                    name="establishment_type"
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel>Establishment type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                      <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select type " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house/home">House/home</SelectItem>
                      <SelectItem value="kiosk/shop">Kiosk/shop</SelectItem>
                      <SelectItem value="office_complex">Office complex</SelectItem>
                                      
                      </SelectContent>
                    </Select>
                  </FormItem>
                  )}
                  />

                  <FormField
                    control={form.control}
                    name="establishment_occupancy"
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel>Establishment occupancy</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                      <SelectTrigger className="w-[210px]">
                      <SelectValue placeholder="Select number of rooms " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                  )}
                  />

                  <FormField
                    control={form.control}
                    name="sites"
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sites</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                      <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select site " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                      <SelectItem value="client 1">Client 1</SelectItem>
                      <SelectItem value="client 2">Client 2</SelectItem>
                                      
                      </SelectContent>
                    </Select>
                  </FormItem>
                  )}
                  />

              </div>
              

               <Button type="submit" className="m-4">
                  Add Establishment
                </Button>

            </form>
          </CardContent>
        </Card>


        </Form>

      </div>


      <div className="flex flex-col items-start  gap-1 mt-2">
                <h1 className="font-bold tracking-wide">Establishment list </h1>
                <p className='text-sm tracking-wider font-light'>The following table shows a list of all the establishments.</p>
              </div>
      
            {/* Data Table */}
            <div className="min-h-[100vh] flex-1 rounded-lg md:min-h-min  ">
      
              <DataTable columns={columns} data={data} />
              
            </div>



    </div>
  )
}

export default page