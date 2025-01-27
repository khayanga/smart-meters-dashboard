"use client";
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

export type Site = {
    client: string;
    subcounty: string;
    location: string;
    latitude: string;
    longitude: string;
    
    };

export const columns: ColumnDef<Site>[] = [
    {
        id: "index",
        header: "#",
        cell: (info) => info.row.index + 1,
      },
    {accessorKey: 'client',header: 'Client',},
    {accessorKey: 'subcounty',header: 'Subcounty',},
    {accessorKey: 'location',header: 'Location',},
    {accessorKey: 'latitude',header: 'Latitude',},
    {
        id: "actions",
        cell: ({ row }) => {
          const customer = row.original
     
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
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
    ];   

