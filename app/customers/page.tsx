'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
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
import { Customer, columns } from './columns';
import { DataTable } from '@/components/data-table';

const Page = () => {
  const { isLoading, setIsLoading } = useLoadingState();

  const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().nonempty(),
    address: z.string().nonempty(),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
  });

  
  const [data, setData] = React.useState<Customer[]>([]);

  // Form submit handler
  const onSubmit = (formData: FormData) => {
    // Append the new customer data to the table data
    const newCustomer: Customer = {
      ...formData,
    };
    setData((prevData) => [...prevData, newCustomer]);

    // Reset the form
    form.reset();
  };

  return (
    <div className="flex flex-1 flex-col gap-4 px-4">
      {/* Form */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-4">
          <h1 className="font-bold tracking-wider">Customer Management</h1>
          <Button>{data.length}</Button>
        </div>

        <p className="mt-1 tracking-wider text-sm font-light">
          Fill in the form below to register a customer.
        </p>

        <Form {...form}>
          <Card className="mt-3 shadow-md md:max-w-4xl rounded-lg">
            <CardContent>
            <form
            onSubmit={form.handleSubmit(onSubmit)}
            
          >
            <div className="flex flex-wrap gap-6 p-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="m-4">
              Add Customer
            </Button>
            </form>

            </CardContent>
          </Card>
          
        </Form>
      </div>

      <div className="flex flex-col items-start  gap-1 mt-2">
          <h1 className="font-bold tracking-wide">Customer List</h1>
          <p className='text-sm tracking-wider font-light'>The following table shows a list of all the customers</p>
        </div>

      {/* Data Table */}
      <div className="min-h-[100vh] flex-1 rounded-lg md:min-h-min ">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Page;
