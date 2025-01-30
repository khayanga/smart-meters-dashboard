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

const Billing = () => {
     const formSchema= z.object({
            bank_name: z.string().nonempty("Bank name is required."),
            account_name: z.string().nonempty("Account name is required."),
            account_number: z.number().int("Account number must be an integer."),
            bank_paybill:z.number().int("Paybill is required"),
    
        });
    
        type FormData = z.infer<typeof formSchema>
    
        const form = useForm<FormData>({
            resolver:zodResolver(formSchema),
            defaultValues:{
                bank_name:'',
                account_name:'',
                account_number: 0,
                bank_paybill: 0
    
            }
        })
  return (
    <Form {...form}>
        <Card className="shadow-md md:max-w-2xl rounded-lg">
            <CardContent>
                <form>
                    <div className="flex flex-wrap gap-6 p-2">
                        <FormField
                        control={form.control}
                        name="bank_name"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Bank Name</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                     <SelectTrigger className="w-[200px]">
                                        <SelectValue placeholder="Select type " />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="absa">Absa</SelectItem>
                                        <SelectItem value="kcb"> Kcb</SelectItem>
                                    </SelectContent>

                                </Select>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="account_name"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Account Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter account name' {...field}/>
                                </FormControl>
                            </FormItem>

                        )}
                        />
                        <FormField
                        control={form.control}
                        name="account_number"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Account Number</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter account No' {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="bank_paybill"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Bank Paybill</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter paybill No' {...field}/>
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
  )
}

export default Billing
