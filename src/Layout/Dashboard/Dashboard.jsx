import { useContext, useState } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdOutlineCreateNewFolder, MdOutlineManageHistory } from "react-icons/md";
import { GrMenu } from "react-icons/gr";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [sidebar, setSidebar] = useState(false)
    console.log(sidebar)
    const navlinks = <>
        <li><NavLink to="/dashboard/createTask" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg py-2 pl-3 pr-[80px]  bg-yellow-800 text-white" : isPending ? "pending" : ""}>
            <MdOutlineCreateNewFolder className="text-xl inline"></MdOutlineCreateNewFolder> Create Task
        </NavLink>
        </li>

        <li><NavLink to="/dashboard/manageTask" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg py-2 pl-3 pr-[70px] bg-yellow-800 text-white" : isPending ? "pending" : ""}>
            <MdOutlineManageHistory className="text-xl inline"></MdOutlineManageHistory> Manage Task
        </NavLink>
        </li>

        <div className="divider divider-neutral"></div>
        <li>
            <NavLink to="/">
                <div className="flex items-center font-bold gap-1">
                    <FaHome className="text-xl"></FaHome>
                    Home
                </div>
            </NavLink>
        </li>
    </>
    return (
        <div className="flex bg-yellow-50 lg:p-0 p-10">
            <div className="absolute z-10 top-0 left-0">
                {
                    sidebar ? <div className="w-64 min-h-screen bg-yellow-400">
                        <div className="p-5 pt-20">
                            <div className="mb-12">
                                {
                                    user.photoURL ?
                                        <img className="w-[70px] h-[70px] mx-auto rounded-full" src={user.photoURL} /> :
                                        <img className="w-[70px] h-[70px] mx-auto rounded-full" src="https://i.ibb.co/VC1vhmp/user.png" />
                                }
                                <p className="text-xl text-center mt-2 font-semibold">{user.displayName}</p>
                            </div>
                            <ul className="font-bold flex flex-col gap-4">
                                {navlinks}
                            </ul>
                        </div>
                    </div> : ""
                }
            </div>
            <div className="hidden lg:block w-64 min-h-screen bg-yellow-400">
                <div className="p-5 mt-20">
                    <div className="mb-12">
                        {
                            user.photoURL ?
                                <img className="w-[70px] h-[70px] mx-auto rounded-full" src={user.photoURL} /> :
                                <img className="w-[70px] h-[70px] mx-auto rounded-full" src="https://i.ibb.co/VC1vhmp/user.png" />
                        }
                        <p className="text-xl text-center mt-2 font-semibold">{user.displayName}</p>
                    </div>
                    <ul className="font-bold flex flex-col gap-4">
                        {navlinks}
                    </ul>
                </div>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <button onClick={() => setSidebar(!sidebar)} className="btn lg:hidden block text-yellow-900 text-xl btn-warning"><GrMenu /></button>
        </div>
    );
};

export default Dashboard;