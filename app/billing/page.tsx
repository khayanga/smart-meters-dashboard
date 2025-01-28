"use client"
import React from 'react';
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

const page = () => {
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
    <div className="flex flex-1 flex-col gap-4 px-4">
        <div className="flex flex-col items-start  gap-1 mt-2">
        <h1 className="font-bold tracking-wide">Bank details </h1>
        <p className='text-sm tracking-wider font-light'>
            Fill in  the information down below </p>

        </div>

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

                    </div>
                </form>

            </CardContent>
        </Card>

        </Form>

    </div>
  )
}

export default page