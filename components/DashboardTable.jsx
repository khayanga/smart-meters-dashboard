'use client'
import React from 'react'

import { DataTable } from '@/components/data-table';
import { columns } from '@/app/customers/columns';

const DashboardTable = () => {
  return (
    <div className="min-h-[100vh] flex-1 rounded-lg md:min-h-min mt-2  ">
      <DataTable columns={columns} data={[]} />
        
      </div>
  )
}

export default DashboardTable