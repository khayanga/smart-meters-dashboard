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

export type Occupancy= {
    establishment_name: string;
    occupancy_room: string;
    customer_name: string;
    meter_number: string;
}

export const columns: ColumnDef<Occupancy>[] = [
    {
        id: "index",
        header: "#",
        cell: (info) => info.row.index + 1,
      },
    {
    accessorKey: 'establishment_name',
    header: 'Establishment Name',

  },
    {
        accessorKey: 'occupancy_room',
        header: 'Occupancy Room',
    },
    {
        accessorKey: 'customer_name',
        header: 'Customer Name',
    },
    {
        accessorKey: 'meter_number',
        header: 'Meter Number',
    },
    {
        id: "actions",
        header: "Actions",
        cell: (info) => (
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
        ),
      },
  ];
