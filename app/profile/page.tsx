"use client"
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

const page = () => {

    // Form schema
    const formSchema = z.object({
        name: z.string().nonempty(),
        email: z.string().email("Invalid email address"),
        phone: z.string().nonempty(),
        address: z.string().nonempty(),
        password: z.string().nonempty(),
        new_password: z.string().nonempty(),
    });

    type FormData = z.infer<typeof formSchema>;

    // Form hook
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            new_password:'',
        },
    });

    
  return (
    <div className="flex flex-1 flex-col gap-4 px-4">
        <div className="flex flex-col items-start  gap-1 mt-2">
        <h1 className="font-bold tracking-wide">Profile details </h1>
        <p className='text-sm tracking-wider font-light'>
            Fill in all the information down below </p>

        </div>

        <Form {...form}>
            <Card className="shadow-md md:max-w-2xl rounded-lg ">
                <CardContent>
                    <form>
                        <div className="flex flex-wrap gap-6 p-2">
                           <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                            <FormLabel> Name</FormLabel>
                            <FormControl>
                             <Input placeholder="Enter name" {...field} />
                            </FormControl>
                            </FormItem>
                            )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    Email Address
                                </FormLabel>

                                <FormControl>
                                    <Input placeholder='Enter email' {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="phone"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    Phone Number
                                </FormLabel>

                                <FormControl>
                                    <Input placeholder='Enter phone' {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="address"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                Address
                                </FormLabel>

                                <FormControl>
                                    <Input placeholder='Enter address' {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="password"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    Password
                                </FormLabel>

                                <FormControl>
                                    <Input placeholder='Enter password' {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="new_password"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    New Password
                                </FormLabel>

                                <FormControl>
                                    <Input placeholder='Enter password' {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                        />

                        </div>

                        <Button type="submit" className="m-4">
                            Save
                        </Button>
                    </form>
                </CardContent>
            </Card>

        </Form>



    </div>
  )
}

export default page