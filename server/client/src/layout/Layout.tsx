import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <header className="flex justify-center p-3 shadow-md">
                <NavBar />
            </header>
            <main className="p-4 sm:p-4 lg:p-8">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
