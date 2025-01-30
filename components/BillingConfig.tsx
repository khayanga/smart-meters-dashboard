'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
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



const BillingConfig = () => {
     const formSchema= z.object({
                tariff: z.string().nonempty("Tarrif is required."),
                prepay_config: z.number().int(),
                postpay_config: z.number().int(),
                rate_in_liters:z.number().int(),
                rate_in_kes:z.number().int(),
        
            });
        
            type FormData = z.infer<typeof formSchema>
        
            const form = useForm<FormData>({
                resolver:zodResolver(formSchema),
                defaultValues:{
                   tariff:'',
                   prepay_config:0,
                   postpay_config:0,
                   rate_in_liters:0,
                   rate_in_kes:0,
                }
            })
  return (
    <>
     <div className="flex flex-col items-start  gap-1 mt-4">
        <h1 className="font-bold tracking-wide">Billing configuration details </h1>
        <p className='text-sm tracking-wider font-light'>
            Fill in  the information down below </p>

            <p className='text-sm tracking-wide font-medium text-blue-500'>
            NB: Common Rate as per Water Service Provider is charged per 1000 Litres(1 Unit)
            Below you can be flexible with your rates.
            </p>

        </div>

     <Form {...form}>
           <Card className="shadow-md md:max-w-4xl rounded-lg">
               <CardContent>
                   <form>
                       <div className="flex flex-wrap gap-6 p-2">
                           <FormField
                           control={form.control}
                           name="tariff"
                           render={({field})=>(
                               <FormItem>
                                   <FormLabel>Tariff(*)</FormLabel>
                                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                                       <FormControl>
                                        <SelectTrigger className="w-[200px]">
                                           <SelectValue placeholder="Select tariff " />
                                       </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                           <SelectItem value="post_paid">Postpaid</SelectItem>
                                           <SelectItem value="pre_paid">Prepaid</SelectItem>
                                       </SelectContent>
   
                                   </Select>
                               </FormItem>
                           )}
                           />
                           <FormField
                           control={form.control}
                           name="prepay_config"
                           render={({field})=>(
                               <FormItem>
                                   <FormLabel>Quoata(L)[Prepay config]</FormLabel>
                                   <FormControl>
                                       <Input placeholder='Enter ' {...field}/>
                                   </FormControl>
                               </FormItem>
   
                           )}
                           />
                           <FormField
                           control={form.control}
                           name="postpay_config"
                           render={({field})=>(
                               <FormItem>
                                   <FormLabel>Grace period(Days)[Postpay config]</FormLabel>
                                   <FormControl>
                                       <Input placeholder='Enter No' {...field}/>
                                   </FormControl>
                               </FormItem>
                           )}
                           />
                           <FormField
                           control={form.control}
                           name="rate_in_liters"
                           render={({field})=>(
                               <FormItem>
                                   <FormLabel>Rate in Litres</FormLabel>
                                   <FormControl>
                                       <Input placeholder='Enter No' {...field}/>
                                   </FormControl>
                               </FormItem>
                           )}
                           />
                           <FormField
                           control={form.control}
                           name="rate_in_kes"
                           render={({field})=>(
                               <FormItem>
                                   <FormLabel>Rate in KES
                                   </FormLabel>
                                   <FormControl>
                                       <Input placeholder='Enter No' {...field}/>
                                   </FormControl>
                               </FormItem>
                           )}
                           />
   
                       </div>
                       <Button className='mt-4'>
                        Save
                       </Button>
                   </form>
   
               </CardContent>
           </Card>
   
    </Form>
    </>
   
  )
}

export default BillingConfig