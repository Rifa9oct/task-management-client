import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Navbar/navbar.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut} = useContext(AuthContext);
    const navLinks = <>
        <li> <NavLink to="/" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-500" : isPending ? "pending" : ""}>Home</NavLink>
        </li>
        <li> <NavLink to="/aboutus" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-500" : isPending ? "pending" : ""}>About Us</NavLink>
        </li>
        <li> <NavLink to="dashboard/createTask" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-500" : isPending ? "pending" : ""}>Dashboard</NavLink>
        </li>
        <li> <NavLink to="/contact" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-500" : isPending ? "pending" : ""}>Contact Us</NavLink>
        </li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Thank you',
                    'Logout successfully',
                    'success'
                )
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="navbar relative z-10 p-5 max-w-[1420px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="flex flex-col gap-4 font-semibold dropdown-content mt-3 z-[1] p-6 py-6 shadow bg-blue-50 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[50px] mx-auto md:mx-0" src={logo} />
                    <h2 className="header font-bold ">Pro Tasker</h2>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-8 font-semibold text-lg">
                    {navLinks}
                </ul>
            </div>

            <div className="md:navbar-end mt-4 md:mt-0">
            {
                    user ?
                            <div className="flex items-center">
                                {
                                    user.photoURL ?
                                        <img className="w-[50px] h-[50px] mx-3 rounded-full" src={user.photoURL} /> :
                                        <img className="w-[50px] h-[50px] mx-3 rounded-full" src="https://i.ibb.co/VC1vhmp/user.png" />
                                }
                                <a onClick={handleLogOut} className="font-bold px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 rounded-lg">Logout</a>
                            </div>
                       :
                        ""
                }
            </div>
        </div>
    );
};

export default Navbar;