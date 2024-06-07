import {
    NavigationMenu,
    NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    // NavigationMenuViewport,
    // navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils"
import { ContextApp } from '@/context/ContextComp';
import type { InitState } from '@/context/ContextComp';
import { useContext } from "react";
const NavBar = () => {
    const { user, logout } = useContext<InitState>(ContextApp);

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute mt-2 bg-white rounded-md shadow-lg">
                        <ul className="flex flex-col w-full gap-3 p-4 md:w-[400px] lg:w-[400px]">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link to={'/'}
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                    >
                                        <div className="text-sm font-medium leading-none">{'Home'}</div>
                                        <p className="text-sm leading-snug text-gray-600">
                                            {'Home page with all info about this app'}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link to={'/about'}
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                    >
                                        <div className="text-sm font-medium leading-none">{'About'}</div>
                                        <p className="text-sm leading-snug text-gray-600">
                                            {'About page with all info about this app'}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={"tasks"}>
                        <NavigationMenuLink>
                            Tasks
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Connect</NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="absolute mt-2 bg-white rounded-md shadow-lg">
                        <ul className="flex flex-col w-full gap-3 p-4 md:w-[400px] lg:w-[400px]">
                            {user ? (
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link to={'/'}
                                            onClick={() => logout()}
                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                        >
                                            <div className="text-sm font-medium leading-none">{'Logout'}</div>
                                            <p className="text-sm leading-snug text-gray-600">
                                                {'Click here to logout'}
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to={'/login'}
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                            >
                                                <div className="text-sm font-medium leading-none">{'Login'}</div>
                                                <p className="text-sm leading-snug text-gray-600">
                                                    {'Login Page'}
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to={'/register'}
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                            >
                                                <div className="text-sm font-medium leading-none">{'Register'}</div>
                                                <p className="text-sm leading-snug text-gray-600">
                                                    {'Register Page'}
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href={"https://github.com/REp007/Task-Management"} target="new">
                        <NavigationMenuLink>
                            Github
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavBar;