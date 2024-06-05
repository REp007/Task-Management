import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <header className="flex justify-center p-3 shadow-md">
                <NavBar />
            </header>
            <main className="p-4 md:p-8 lg:p-16">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
