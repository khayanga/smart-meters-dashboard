"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { LoadingStateProvider, useLoadingState } from "@/components/LoadingContext";
import Spinner from "@/components/Spinner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";


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
          {/* <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger /> */}
              {children}
            {/* </main>
        </SidebarProvider> */}
        </LoadingStateProvider>
        <Toaster />
      </>
   
  );
}