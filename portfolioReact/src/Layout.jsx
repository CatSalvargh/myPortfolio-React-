import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

export default function Layout() {

    const pageTitles = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']

    return(
        <>
            <Nav items={pageTitles} />
            <main>
                <Outlet/>
            </main>
        </>
    );
}