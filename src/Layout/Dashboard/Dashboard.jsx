import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdOutlineCreateNewFolder, MdOutlineManageHistory } from "react-icons/md";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-yellow-400">
                <ul className="p-5 mt-20">
                    {
                        user ? <div>
                            <div className="mb-12">
                                {
                                    user.photoURL ?
                                        <img className="w-[70px] h-[70px] mx-auto rounded-full" src={user.photoURL} /> :
                                        <img className="w-[70px] h-[70px] mx-auto rounded-full" src="https://i.ibb.co/VC1vhmp/user.png" />
                                }
                                <p className="text-xl text-center mt-2 font-semibold">{user.displayName}</p>
                            </div>
                            <ul className="font-bold flex flex-col gap-4">
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
                            </ul>
                        </div>
                            : ""
                    }

                    {/* shared nav links */}
                    <div className="divider divider-neutral"></div>
                    <li><NavLink to="/">
                        <div className="flex items-center font-bold gap-1">
                            <FaHome className="text-xl"></FaHome>
                            Home
                        </div>
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;