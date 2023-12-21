import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


const Root = () => {
    const location = useLocation();
    const noHeader = location.pathname.includes('login') ||
        location.pathname.includes('register') || location.pathname.includes("employeeDetails");

    return (
        <div>
            <div>
                {noHeader || <Navbar></Navbar>}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;