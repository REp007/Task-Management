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
const NavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <Link to={`/`}>
                            <NavigationMenuLink
                                className="p-3"
                            >Home</NavigationMenuLink>
                        </Link>
                        <Link to={`/login`}>
                            <NavigationMenuLink
                                className="p-3"
                            >Home</NavigationMenuLink>
                        </Link>
                        <Link to={`/register`}>
                            <NavigationMenuLink
                                className="p-3"
                            >Home</NavigationMenuLink>
                        </Link>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <Link to={`/`}>
                            <NavigationMenuLink
                                className="p-3"
                            >Home</NavigationMenuLink>
                        </Link>
                        <Link to={`/login`}>
                            <NavigationMenuLink
                                className="p-3"
                            >Home</NavigationMenuLink>
                        </Link>
                        <Link to={`/register`}>
                            <NavigationMenuLink
                                className="p-3"
                            >Home</NavigationMenuLink>
                        </Link>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavBar;