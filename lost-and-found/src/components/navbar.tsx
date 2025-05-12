import { Avatar } from 'src/components/ui/avatar'
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenu,
} from 'src/components/ui/dropdown-menu'
import { Layout, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from 'src/components/layout'
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from 'src/components/ui/sidebar'
import { StackedLayout } from '@/components/stacked-layout'
import {
    ArrowRightStartOnRectangleIcon,
    ChevronDownIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    PlusIcon,
    ShieldCheckIcon,
    UserIcon,
} from '@heroicons/react/16/solid'
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navItems = [
    { label: 'Home', url: '/' },
    { label: 'Events', url: '/events' },
    { label: 'Orders', url: '/orders' },
    { label: 'Broadcasts', url: '/broadcasts' },
    { label: 'Settings', url: '/settings' },
]

function TeamDropdownMenu() {
    return (
        <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
            <DropdownMenuItem href="/teams/1/settings">
                <Cog8ToothIcon />
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownDivider />
            <DropdownMenuItem href="/teams/1">
                <Avatar slot="icon" src="/tailwind-logo.svg" />
                <DropdownMenuLabel>Tailwind Labs</DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuItem href="/teams/2">
                <Avatar slot="icon" initials="WC" className="bg-purple-500 text-white" />
                <DropdownMenuLabel>Workcation</DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownDivider />
            <DropdownMenuItem href="/teams/create">
                <PlusIcon />
                <DropdownMenuLabel>New team&hellip;</DropdownMenuLabel>
            </DropdownMenuItem>
        </DropdownMenu>
    )
}

export function Layout() {
    return (
        <StackedLayout
            navbar={
                <Layout>
                    <Dropdown>
                        <DropdownButton as={NavbarItem} className="max-lg:hidden">
                            <Avatar src="/tailwind-logo.svg" />
                            <NavbarLabel>Tailwind Labs</NavbarLabel>
                            <ChevronDownIcon />
                        </DropdownButton>
                        <TeamDropdownMenu />
                    </Dropdown>
                    <NavbarDivider className="max-lg:hidden" />
                    <NavbarSection className="max-lg:hidden">
                        {navItems.map(({ label, url }) => (
                            <NavbarItem key={label} href={url}>
                                {label}
                            </NavbarItem>
                        ))}
                    </NavbarSection>
                    <NavbarSpacer />
                    <NavbarSection>
                        <NavbarItem href="/search" aria-label="Search">
                            <MagnifyingGlassIcon />
                        </NavbarItem>
                        <NavbarItem href="/inbox" aria-label="Inbox">
                            <InboxIcon />
                        </NavbarItem>
                        <Dropdown>
                            <DropdownButton as={NavbarItem}>
                                <Avatar src="/profile-photo.jpg" square />
                            </DropdownButton>
                            <DropdownMenu className="min-w-64" anchor="bottom end">
                                <DropdownMenuItem href="/my-profile">
                                    <UserIcon />
                                    <DropdownMenuLabel>My profile</DropdownMenuLabel>
                                </DropdownMenuItem>
                                <DropdownMenuItem href="/settings">
                                    <Cog8ToothIcon />
                                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                                </DropdownMenuItem>
                                <DropdownDivider />
                                <DropdownMenuItem href="/privacy-policy">
                                    <ShieldCheckIcon />
                                    <DropdownMenuLabel>Privacy policy</DropdownMenuLabel>
                                </DropdownMenuItem>
                                <DropdownMenuItem href="/share-feedback">
                                    <LightBulbIcon />
                                    <DropdownMenuLabel>Share feedback</DropdownMenuLabel>
                                </DropdownMenuItem>
                                <DropdownDivider />
                                <DropdownMenuItem href="/logout">
                                    <ArrowRightStartOnRectangleIcon />
                                    <DropdownMenuLabel>Sign out</DropdownMenuLabel>
                                </DropdownMenuItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarSection>
                </Layout>
            }
            sidebar={
                <Sidebar>
                    <SidebarHeader>
                        <Dropdown>
                            <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                                <Avatar src="/tailwind-logo.svg" />
                                <SidebarLabel>Tailwind Labs</SidebarLabel>
                                <ChevronDownIcon />
                            </DropdownButton>
                            <TeamDropdownMenu />
                        </Dropdown>
                    </SidebarHeader>
                    <SidebarBody>
                        <SidebarSection>
                            {navItems.map(({ label, url }) => (
                                <SidebarItem key={label} href={url}>
                                    {label}
                                </SidebarItem>
                            ))}
                        </SidebarSection>
                    </SidebarBody>
                </Sidebar>
            }
        >
            {children}
        </StackedLayout>
    )
}