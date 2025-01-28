'use client';

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
import { Site, columns } from './columns';

import { DataTable } from '@/components/data-table';

const Page = () => {
  const { isLoading, setIsLoading } = useLoadingState();

  const formSchema = z.object({
    client: z.string().nonempty(),
    subcounty: z.string().nonempty(),
    location: z.string().nonempty(),
    latitude: z.string().nonempty(),
    longitude: z.string().nonempty(),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      client: '',
      subcounty: '',
      location: '',
      latitude: '',
      longitude: '',
    },
  });

  const [data, setData] = React.useState<Site[]>([]);
  // Form submit handler
  const onSubmit = (formData: FormData) => {
    // Append the new site data to the table data
    const newSite: Site = {
      ...formData,
    };
    setData((prevData) => [...prevData, newSite]);

    // Reset the form
    form.reset();
  };

   

  return (
    <div className="flex flex-1 flex-col gap-4 px-4">
      {/* Form */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-4">
          <h1 className="font-bold tracking-wider">Site Management</h1>
          <Button>{data.length}</Button>
        </div>

        <p className="mt-1 tracking-wider text-sm font-light">
          Fill in the form below to register a site.
        </p>

        <Form {...form}>
          <Card className="mt-3 shadow-md  md:max-w-5xl rounded-lg">
            <CardContent>
            <form
            onSubmit={form.handleSubmit(onSubmit)}
            
          >
            <div className="flex flex-wrap gap-6 p-2">
              {/* Your form fields go here */}
              <FormField
                control={form.control}
                name="client"
                render={({ field }) => (
              <FormItem>
                <FormLabel>Client</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select client " />
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
                <FormField
                control={form.control}
                name="subcounty"
                render={({ field }) => (
              <FormItem>
                <FormLabel>Sub-county</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a sub-county " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="kericho">Kericho</SelectItem>
                    <SelectItem value="nakuru">Nakuru</SelectItem>
                    
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
               />

               <FormField
               control={form.control}
               name='location'
               render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter location" {...field} />
                    </FormControl>
                  </FormItem>
                )}
               />

               <FormField
               control={form.control}
               name='latitude'
               render={({ field }) => (
                  <FormItem>
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter latitude" {...field} />
                    </FormControl>
                  </FormItem>
                )}
               />

               <FormField
                control={form.control}
                name="longitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter longitude" {...field} />
                    </FormControl>
                  </FormItem>
                )}
               />

            </div>
            
            <Button type="submit" className="m-4">
              Add Site
            </Button>
            </form>

            </CardContent>
          </Card>
          
        </Form>
      </div>

      <div className="flex flex-col items-start  gap-1 mt-2">
          <h1 className="font-bold tracking-wide">Site List</h1>
          <p className='text-sm tracking-wider font-light'>The following table shows a list of all the sites</p>
        </div>

      {/* Data Table */}
      <div className="min-h-[100vh] flex-1 rounded-lg md:min-h-min  ">

        <DataTable columns={columns} data={data} />
        
      </div>
    </div>
  );
};

export default Page;