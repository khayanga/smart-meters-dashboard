'use client';

import React from 'react';
import { useLoadingState } from '@/components/LoadingContext';
import { Meter, columns } from './columns';
import { DataTable } from '@/components/data-table';

const Page = () => {
  const { isLoading, setIsLoading } = useLoadingState();

  
  
  return (
    <div className="flex flex-1 flex-col gap-4 px-4">
      {/* Form */}
      <div className="flex flex-col items-start  gap-1 mt-2">
          <h1 className="font-bold tracking-wide">Meter List</h1>
          <p className='text-sm tracking-wider font-light'>The following table shows a list of all the meters</p>
        </div>

      {/* Data Table */}
      <div className="min-h-[100vh] flex-1 rounded-lg md:min-h-min mt-2  ">
      <DataTable columns={columns} data={[]} />
        
      </div>
    </div>
  );
};

export default Page;