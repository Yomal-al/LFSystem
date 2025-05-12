import "tailwindcss";
import "tailwindcss";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
    navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import React = require("react");

export const NavBar = () => {
    return (
        <NavigationMenu className="bg-green-900 shadow-md p-4">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4">
                        <ul className="grid gap-3">
                            <li>
                                <NavigationMenuLink href="/products/a" className="text-sm">
                                    Product A
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/products/b" className="text-sm">
                                    Product B
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                        About
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
                        Contact
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuIndicator />
            <NavigationMenuViewport />

        </NavigationMenu>
    )
}
export default NavBar;