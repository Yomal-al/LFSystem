import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarProvider, SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import {Home, Archive, Search, FileText, HomeIcon,ArchiveIcon, File, FileTextIcon} from "lucide-react";
import {SearchIcon} from "lucide-react"; // or any other icons you use



// export default function Layout({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="flex h-screen bg-emerald-100-100">
//             {/* Sidebar */}
//             <aside className="w-64 bg-gray-950  text-white p-4">
//                 <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
//                 <nav className="space-y-2">
//                     <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Overview</a>
//                     <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Lost Items</a>
//                     <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Found Items</a>
//                     <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Reports</a>
//                     <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Settings</a>
//                 </nav>
//             </aside>
//
//             {/* Main Content */}
//             <main className="flex-1 p-6">
//                 <header className="border-b pb-4 mb-6">
//                     <h1 className="text-3xl font-semibold">Overview</h1>
//                 </header>
//
//                 {/* Main Dashboard Content */}
//                 <div className="grid grid-cols-3 gap-6">
//                     <div className="bg-gray-300 p-4 shadow rounded-lg">
//                         <h3 className="text-xl font-bold mb-2">Total Lost Items</h3>
//                         <p className="text-2xl">120</p>
//                     </div>
//
//                     <div className="bg-gray-300 p-4 shadow rounded-lg">
//                         <h3 className="text-xl font-bold mb-2">Total Found Items</h3>
//                         <p className="text-2xl">95</p>
//                     </div>
//
//                     <div className="bg-gray-300 p-4 shadow rounded-lg">
//                         <h3 className="text-xl font-bold mb-2">Reports Generated</h3>
//                         <p className="text-2xl">30</p>
//                     </div>
//                 </div>
//             </main>
//
//             <SidebarProvider>
//                 <AppSidebar />
//                 <main>
//                     <SidebarTrigger />
//                     {children}
//                 </main>
//             </SidebarProvider>
// //
//         </div>
//
//
//
//     );
//
//
// }
const items=[
    {
        title: "Overview",
        link: "/",
        icon: HomeIcon,
    },

    {
        title: "Total Lost Items",
        link: "/total_lost_items",
        icon: ArchiveIcon,
    },
    {
        title: "Total Found Items",
        link: "/total_found_items",
        icon: SearchIcon,
    },
    {
        title: "Reports",
        link: "/reports/",
        icon: FileTextIcon,
    },

]

export default  function Layout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.link}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
            </main>
        </SidebarProvider>
    )
}



