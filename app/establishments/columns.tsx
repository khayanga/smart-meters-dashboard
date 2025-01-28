"use client"
import {ColumnDef} from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export type Establishment= {
    establishment_name: string;
    establishment_type: string;
    establishment_occupancy: string;
    sites: string;
}

export const columns: ColumnDef<Establishment>[] = [
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
        accessorKey: 'establishment_type',
        header: 'Establishment Type',
    },
    {
        accessorKey: 'establishment_occupancy',
        header: 'Establishment Occupancy',
    },
    {
        accessorKey: 'sites',
        header: 'Sites',
    },
    {
        id: "actions",
        header: "Actions",
        cell: (info) => {
          return (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit </DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          );
        },
      },
]
