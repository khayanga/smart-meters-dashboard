"use client";
import {ColumnDef} from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Meter= {
    serial_number: string;
    site: string;
    establishment: string;
    occupancy: string;
    reading:number;
    valve_status: "open" | "closed";
    operation_status: "assigned" | "unassigned";
}

export const columns: ColumnDef<Meter>[] = [
    {
        id: "index",
        header: "#",
        cell: (info) => info.row.index + 1,
      },
    {
    accessorKey: 'serial_number',
    header: 'Serial Number',

  },
    {
        accessorKey: 'site',
        header: 'Site',
    },
    {
        accessorKey: 'establishment',
        header: 'Establishment',
    },
    {
        accessorKey: 'occupancy',
        header: 'Occupancy',
    },
    {
        accessorKey: 'reading',
        header: 'Reading',
    },
    {
        accessorKey: 'valve_status',
        header: 'Valve Status',
    },
    {
        accessorKey: 'operation_status',
        header: 'Operation Status',
    },
    {
        id: "actions",
        header:`Actions`,
        cell: ({ row }) => {
          const meter = row.original
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
              <DropdownMenuItem>View </DropdownMenuItem>
                <DropdownMenuItem>Close Valve </DropdownMenuItem>
                <DropdownMenuItem>Operation Status </DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]

