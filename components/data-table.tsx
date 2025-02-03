"use client"
 
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Input } from "@/components/ui/input"
import React, { useState } from "react"
 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }
   
  

  export function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {

    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
    )
    const [selectedColumn, setSelectedColumn] = useState<string>("")
    
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        columnFilters,
      },
    })
   
    return (
      <div className="rounded-lg border shadow-md">
        
        {/* Filter and search */}
        <div className="flex items-center justify-between space-x-2 pt-2 px-4">
        {/* Select Column to Filter */}
        <Select onValueChange={setSelectedColumn}>
          <SelectTrigger className="w-40 rounded-xl ">
            <SelectValue placeholder="Filter by..." />
          </SelectTrigger>
          <SelectContent>
            {columns.map((col, index) => {
              const key = "id" in col ? col.id : `col-${index}`;
              const value = "accessorKey" in col ? col.accessorKey?.toString() ?? "" : col.id?.toString() ?? "";
              
              return (
                <SelectItem key={key} value={value}>
                  {col.header?.toString()}
                </SelectItem>
              );
            })}
          </SelectContent>


        </Select>

        {/* Search Input */}
       
            <div className="relative w-56">
              <Input
                placeholder="Search..."
                value={
                  selectedColumn
                    ? (table.getColumn(selectedColumn)?.getFilterValue() as string) ?? ""
                    : ""
                }
                onChange={(event) => {
                  if (selectedColumn) {
                    table.getColumn(selectedColumn)?.setFilterValue(event.target.value);
                  }
                }}
                className="pl-10 rounded-xl"
                disabled={!selectedColumn} // Disable input until a column is selected
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>

      </div>


        <Table className="rounded-lg">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Pagination */}

        <div className="flex items-center justify-end space-x-2 py-4 pr-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
      </div>
    )
  }