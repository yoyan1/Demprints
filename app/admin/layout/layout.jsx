import React from 'react'
import Header from '../_sections/header'
import { AppSidebar } from "@/app/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/app/components/ui/sidebar"

export default function AdminLayout({children}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
            {<Header/>}
            {children}
      </SidebarInset>
    </SidebarProvider>
  )
} 
