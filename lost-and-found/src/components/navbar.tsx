// app/page.tsx or wherever you want your layout

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <NavigationMenu className="w-full bg-blue-950 text-white px-6 py-4 shadow-md">
                <NavigationMenuList className="flex space-x-6">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/" className="font-semibold">
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/about" className="font-semibold">
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/contact" className="font-semibold">
                            Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Main content */}
            <main className="flex-1 p-8 bg-gray-50">
                <h1 className="text-3xl font-bold mb-4">Welcome to My Page</h1>
                <p className="text-gray-700 mb-4">
                    This is a simple layout using <code>@shadcn/ui</code> and Tailwind CSS.
                </p>
                <Button>Get Started</Button>
            </main>

            {/* Footer (optional) */}
            <footer className="bg-blue-950 text-white text-center py-4">
                &copy; 2025 MySite. All rights reserved.
            </footer>
        </div>
    );
}
