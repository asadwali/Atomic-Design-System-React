import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PanelLeft, PanelRight } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarTrigger,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import {
    BookOpen,
    Calendar,
    ChevronDown,
    HelpCircle,
    Home,
    LogOut,
    Settings,
    User,
    Bell,
    BadgeCheck,
    Square,
    MessagesSquare,
    CheckIcon,
    CheckSquare,
    Table,
    List,
    Text,
    Box,
    Paperclip,
    Indent,
    StepForward,
    AlertCircle,
    CheckCheck
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Companylogo from "@/assets/bitlogix.png";
import Badge from "../../atoms/Badges/Badges";
import AvatarWithInfo from "../AvatarWithInfo/AvatarWithInfo";
import Avatar from "../../atoms/Avatar/Avatar";
import { Separator } from "@/components/ui/separator"

const navItems = [
    { title: "Welcome", icon: Home, url: "/" },
    {
        title: "Components",
        icon: Calendar,
        badge: "17",
        children: [
            { title: "Alerts", url: "/alerts", icon: Bell },
            { title: "Avatars", url: "/avatars", icon: User },
            { title: "Badges", url: "/badges", icon: BadgeCheck },
            { title: "Buttons", url: "/buttons", icon: Square },
            { title: "Chat", url: "/chat", icon: MessagesSquare },
            { title: "CheckBox/Radio", url: "/checkbox-radio", icon: CheckIcon },
            { title: "CheckBox Group", url: "/checkbox-group", icon: CheckSquare },
            { title: "Data Table", url: "/data-table", icon: Table },
            { title: "Tables", url: "/tables", icon: Table },
            { title: "Dropdowns", url: "/dropdowns", icon: List },
            { title: "Input Fields", url: "/input-fields", icon: Text },
            { title: "Modals", url: "/modals", icon: Box },
            { title: "Pagination", url: "/pagination", icon: Paperclip },
            { title: "Progress Indicators", url: "/progress-indicator", icon: Indent },
            { title: "Stepper", url: "/stepper", icon: StepForward },
            { title: "Tabs", url: "/tabs", icon: Bell },
            { title: "Toast Alerts", url: "/toast-alerts", icon: AlertCircle },
            { title: "Toggle/Switch", url: "/toggle-switch", icon: CheckCheck },
            { title: "Tooltips", url: "/tooltips", icon: BadgeCheck },

        ],
    },
];

const AppSidebar = ({ parentClass = "" }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (title) => {
        setOpenMenus((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    const isActive = (url) => currentPath === url;
    const isChildActive = (children) =>
        children?.some((child) => currentPath === child.url);

    useEffect(() => {
        const openStates = {};
        navItems.forEach((item) => {
            if (item.children && isChildActive(item.children)) {
                openStates[item.title] = true;
            }
        });
        setOpenMenus((prev) => ({ ...prev, ...openStates }));
    }, [currentPath]);

    return (
        <Sidebar collapsible="icon" className={`bg-white dark:bg-gray-900 border-r border-gray-200 flex flex-col gap-y-6 pb-2 ${parentClass}`}>
            {/* Logo */}
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-xl font-bold dark:text-white group-data-[state=collapsed]:hidden">
                    {/* //<img src={Companylogo} alt="BitLogix Logo" className="size-10" />
                    <span className="sidebar-label">BitLogix</span> */}
                    <h3>React Design System</h3>
                </div>
                <SidebarTrigger className="group relative flex items-center">
                    <PanelLeft className="size-5 group-data-[state=collapsed]:hidden tex-gray-900 dark:text-white" />
                    <PanelRight className="size-5 hidden group-data-[state=collapsed]:block opacity-0 group-hover:opacity-100 transition-opacity text-gray-900 dark:text-white" />
                </SidebarTrigger>
            </div>
            <Separator className="my-2 bg-gray-200 dark:bg-gray-700" />
            {/* Sidebar Navigation */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => {
                                const hasChildren = !!item.children;
                                const parentActive =
                                    isActive(item.url) || isChildActive(item.children || []);
                                const buttonClasses = `flex items-center gap-3 text-sm p-3 rounded-md w-10 ${parentActive ? "bg-gray-800 text-white" : "hover:bg-transparent text-gray-800 dark:text-white"
                                    }`;

                                return (
                                    <div key={item.title}>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton asChild>
                                                {hasChildren ? (
                                                    <button onClick={() => toggleMenu(item.title)} className={buttonClasses}>
                                                        <item.icon className="size-5" />
                                                        <span className="sidebar-label flex-1 text-left text-base dark:text-white sidebar-label">
                                                            {item.title}
                                                        </span>
                                                        {item.badge && (
                                                            <Badge className="ml-auto" variant="primary" size="sm">
                                                                {item.badge}
                                                            </Badge>
                                                        )}

                                                        <ChevronDown
                                                            className={`size-4 transition-transform ${openMenus[item.title] ? "rotate-180" : ""
                                                                }`}
                                                        />
                                                    </button>
                                                ) : (
                                                    <Link to={item.url || "#"} className={buttonClasses}>
                                                        <item.icon className="size-5" />
                                                        <span className="sidebar-label flex-1 text-left text-base sidebar-label">
                                                            {item.title}
                                                        </span>
                                                    </Link>
                                                )}
                                            </SidebarMenuButton>

                                            {/* Tooltip */}
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                       
                                                    </TooltipTrigger>
                                                    <TooltipContent side="right" className="sidebar-tooltip">
                                                        {item.title}
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </SidebarMenuItem>



                                        {/* Submenu */}
                                        {hasChildren && openMenus[item.title] && (
                                            <div className="mt-2 space-y-1">
                                                {/* {item.children.map((subItem) => {
                                                    const childActive = isActive(subItem.url);
                                                    const subItemClasses = `block text-base ps-10 pe-1.5 py-1.5 rounded-md w-full ${childActive
                                                        ? "bg-gray-800 text-white dark:text-white"
                                                        : "hover:bg-transparent text-gray-700 dark:text-white"
                                                        }`;

                                                    return (
                                                        <Link
                                                            key={subItem.title}
                                                            to={subItem.url}
                                                            className={subItemClasses}
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    );
                                                })} */}
                                                {item.children.map((subItem) => {
                                                    const childActive = isActive(subItem.url);
                                                    const subItemClasses = `flex items-center gap-2 text-base py-1.5 rounded-md w-full 
        ${childActive ? "bg-gray-800 text-white dark:text-white" : "hover:bg-transparent text-gray-700 dark:text-white"}
        ps-10 group-data-[state=collapsed]:ps-2`; // <-- ps-10 in expanded, ps-2 in collapsed
                                                    return (
                                                        <Link
                                                            key={subItem.title}
                                                            to={subItem.url}
                                                            className={subItemClasses}
                                                        >
                                                            {subItem.icon && <subItem.icon className="size-4" />}
                                                            <span className="group-data-[state=collapsed]:hidden">{subItem.title}</span>
                                                        </Link>
                                                    );
                                                })}


                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <Separator className="my-2 bg-gray-200 dark:bg-gray-700" />
            {/* Footer section */}
            <div className="px-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a className="flex items-center gap-3 text-base px-2 py-2 rounded-md w-full hover:bg-transparent text-gray-800 dark:text-white">
                                <Settings className="size-5" />
                                <span>Settings</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a className="flex items-center gap-3 text-base px-2 py-2 rounded-md w-full hover:bg-transparent text-gray-800 dark:text-white">
                                <HelpCircle className="size-5" />
                                <span>Support</span>
                                <Badge variant="success" size="sm" className="ml-auto" dotLeft>
                                    Online
                                </Badge>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>


                </SidebarMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="w-full">
                            {/* Expanded state */}
                            <div className="flex items-center w-full justify-between p-3 hover:bg-transparent text-left border border-gray-300 rounded-xl mt-3 group-data-[state=collapsed]:hidden">
                                <AvatarWithInfo
                                    size="sm"
                                    imageUrl="https://i.pravatar.cc/300"
                                    userName="Jese Leos"
                                    email="asadwali@gmail.com"
                                />
                                <ChevronDown className="size-5 ml-auto dark:text-white" />
                            </div>

                            {/* Collapsed state */}
                            <div className="hidden group-data-[state=collapsed]:flex justify-center p-2 mt-3">
                                <Avatar size="sm" imageUrl="https://i.pravatar.cc/300" />
                            </div>
                        </div>
                    </DropdownMenuTrigger>




                    <DropdownMenuContent
                        align="start"
                        side="right"
                        sideOffset={10}
                        className="bg-gray-100 dark:bg-gray-900 px-2.5 py-4 z-[999] w-64 mb-2.5 border-gray-300 rounded-2xl shadow-md"
                    >
                        <DropdownMenuItem className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-gray-800 dark:text-white">
                                <User className="size-4" />
                                View Profile
                            </div>
                            <span className="text-xs text-gray-500">⌘P</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-gray-800 dark:text-white">
                                <Settings className="size-4" />
                                Account Settings
                            </div>
                            <span className="text-xs text-gray-500">⌘A</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-gray-800 dark:text-white">
                                <BookOpen className="size-4" />
                                Documentation
                            </div>
                            <span className="text-xs text-gray-500">⌘D</span>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator className="my-2 bg-gray-500" />

                        <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                            <LogOut className="size-4" />
                            Sign out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </Sidebar>
    );
}

export default AppSidebar;