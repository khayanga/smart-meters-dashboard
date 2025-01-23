
import { SidebarFooter, SidebarHeader, useSidebar } from "@/components/ui/sidebar"

  
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import User from "./User"
import Image from "next/image"
import { items } from "../data"
import Link from "next/link"

// Menu items.


export function AppSidebar() {
   
  return (
    <Sidebar>
        <SidebarHeader>
            
        <div className="flex items-start justify-start">
                <Image src='/logo.png' 
                alt="Company Logo"
                width={80}
                height={80}/>
              </div>

        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem  key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon  className="w-7 h-7"/>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <User/>
      </SidebarFooter>
    </Sidebar>
  )
}

  