import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
// import { cn } from "@/lib/utils";
import { ContextApp } from '@/context/ContextComp';
import type { InitState } from '@/context/ContextComp';
import { useContext } from "react";

const NavBar = () => {
    const { user, logout } = useContext<InitState>(ContextApp);

    return (
        <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col md:flex-row md:items-center">
                <NavigationMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mt-2 bg-white rounded-md shadow-lg w-full md:w-auto">
                            <DropdownMenuItem>
                                <Link to={'/'} className="block w-full select-none p-3 leading-none no-underline transition-colors hover:bg-gray-100 focus:bg-gray-100">
                                    <div className="text-sm font-medium">{'Home'}</div>
                                    <p className="text-sm text-gray-600">{'Home page with all info about this app'}</p>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/tasks"
                        className="font-semibold"
                    >
                        Tasks
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <NavigationMenuTrigger>Connect</NavigationMenuTrigger>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mt-2 bg-white rounded-md shadow-lg w-full md:w-auto">
                            {user ? (
                                <>
                                    <DropdownMenuItem>
                                        <Link to={'/'} onClick={() => logout()} className="block w-full select-none p-3 leading-none no-underline transition-colors hover:bg-gray-100 focus:bg-gray-100">
                                            <div className="text-sm font-medium">{'Logout'}</div>
                                            <p className="text-sm text-gray-600">{'Click here to logout'}</p>
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <Link to={'/profile'} className="block w-full select-none p-3 leading-none no-underline transition-colors hover:bg-gray-100 focus:bg-gray-100">
                                            <div className="text-sm font-medium">{'profile'}</div>
                                            <p className="text-sm text-gray-600">{'Profile page'}</p>
                                        </Link>
                                    </DropdownMenuItem>
                                </>

                            ) : (
                                <>
                                    <DropdownMenuItem>
                                        <Link to={'/login'} className="block w-full select-none p-3 leading-none no-underline transition-colors hover:bg-gray-100 focus:bg-gray-100">
                                            <div className="text-sm font-medium">{'Login'}</div>
                                            <p className="text-sm text-gray-600">{'Login Page'}</p>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link to={'/register'} className="block w-full select-none p-3 leading-none no-underline transition-colors hover:bg-gray-100 focus:bg-gray-100">
                                            <div className="text-sm font-medium">{'Register'}</div>
                                            <p className="text-sm text-gray-600">{'Register Page'}</p>
                                        </Link>
                                    </DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href={"https://github.com/REp007/Task-Management"}>
                        Github
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default NavBar;
