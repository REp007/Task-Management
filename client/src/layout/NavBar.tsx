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
// import { Icons } from "@/components/icons"

const NavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute mt-2 bg-white rounded-md shadow-lg">
                        <ul className="flex flex-col w-[400px] gap-3 p-4 md:w-[400px] lg:w-[400px]">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link to={'/'}
                                        className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100")}
                                    >
                                        <div className="text-sm font-medium leading-none">{'Home'}</div>
                                        <p className="text-sm leading-snug text-gray-600">
                                            {'Home apge with all info about this app'}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link to={'/about'}
                                        className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100")}
                                    >
                                        <div className="text-sm font-medium leading-none">{'About'}</div>
                                        <p className="text-sm leading-snug text-gray-600">
                                            {'About apge with all info about this app'}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={"tasks"} legacyBehavior passHref>
                        <NavigationMenuLink>
                            Tasks
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Connect</NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="absolute mt-2 bg-white rounded-md shadow-lg">
                        <ul className="flex flex-col w-[400px] gap-3 p-4 md:w-[400px] lg:w-[400px]">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link to={'/login'}
                                        className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100")}
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
                                        className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100")}
                                    >
                                        <div className="text-sm font-medium leading-none">{'Register'}</div>
                                        <p className="text-sm leading-snug text-gray-600">
                                            {'Register Page'}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
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