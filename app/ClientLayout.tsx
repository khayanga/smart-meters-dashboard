"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { LoadingStateProvider, useLoadingState } from "@/components/LoadingContext";
import Spinner from "@/components/Spinner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

import Nav from "@/components/Nav";
import { ModeToggle } from "@/components/ModeToggle";


const LoadingIndicator = () => {
  const { isLoading } = useLoadingState();
  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : null;
};



export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    
      <>
        <LoadingStateProvider>
          <LoadingIndicator />
          <SidebarProvider >
            <AppSidebar />
            <main className="flex flex-col w-full min-h-svh pb-8">
              <header className="flex h-12 shrink-0 items-center justify-between gap-2  w-full pr-6 ">
              <div className="flex items-center gap-2  px-2">
              <SidebarTrigger />
              <Nav/>
              </div>
              <div>
                <ModeToggle/>
              </div>
              </header> 
              {children}
            </main>
        </SidebarProvider>
        </LoadingStateProvider>
        <Toaster />
      </>
   
  );
}