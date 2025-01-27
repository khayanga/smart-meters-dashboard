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

import { DataTable } from '@/components/data-table';

const Page = () => {
  const { isLoading, setIsLoading } = useLoadingState();

  
  
  

  return (
    <div className="flex flex-1 flex-col gap-4 px-4">
      {/* Form */}
     

      {/* Data Table */}
      <div className="min-h-[100vh] flex-1 rounded-lg md:min-h-min mt-2 ">
        
      </div>
    </div>
  );
};

export default Page;