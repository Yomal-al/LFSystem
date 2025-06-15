import { AppSidebar } from "@/components/ui/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent, SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import React from "react"
import { ArchiveIcon, FileTextIcon, HomeIcon, SearchIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
    const location = useLocation();

    const items = [
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
            link: "/reports",
            icon: FileTextIcon,
        },
    ]

    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Sidebar>
                            <SidebarContent>
                                <SidebarGroup>
                                    <SidebarGroupLabel className="p-1.5">Menu</SidebarGroupLabel>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            {items.map((item) => (
                                                <SidebarMenuItem key={item.title} active={location.pathname === item.link}>
                                                    <SidebarMenuButton asChild>
                                                        <Link to={item.link} className="flex items-center gap-2">
                                                            <item.icon className="h-4 w-4" />
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            ))}
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            </SidebarContent>
                        </Sidebar>
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Find Your Lost Items
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Lost Items</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>

                <div className="flex flex-1 flex-col gap-6 p-6 bg-muted/50 min-h-screen">
                    <div className="grid gap-4 md:grid-cols-3">
                        <Card className="bg-white">
                            <CardHeader>
                                <CardTitle>Total Lost Items</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">123</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white">
                            <CardHeader>
                                <CardTitle>Total Found Items</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">89</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white">
                            <CardHeader>
                                <CardTitle>Pending Reports</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">12</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="rounded-xl p-6 bg-white shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                            <li>Student ID card found at library.</li>
                            <li>Phone reported lost near cafeteria.</li>
                            <li>Wallet found and submitted to admin office.</li>
                        </ul>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
