import { NavLink, Outlet } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import useCreator from "../Hooks/useCreator";
import { Helmet } from "react-helmet";



const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isCreator] = useCreator();



    return (
        <div className="flex ">
            <Helmet><title>ApexArtistry | Dashboard</title></Helmet>
            {/*  */}
            <div className="lg:w-64 min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 pt-10 px-2">

                {
                    isAdmin ? <><h2 className="pl-5 divider text-xl border border-green-300 p-5 m-3 rounded-3xl font-bold">Admin Panel</h2>
                        <p className="w-full btn btn-sm mb-10">{user?.email}</p>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/users '>Manage User</NavLink></li>
                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/manageContest '>Manage Contest</NavLink></li>
                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/support '>Support</NavLink></li>
                        </ul>

                    </> : <></>
                }
                {
                    !isAdmin && !isCreator && (<><h2 className="pl-5 divider text-xl border border-green-300 p-5 m-3 rounded-3xl font-bold">User Panel</h2>
                        <p className="w-full btn btn-sm mb-10">{user?.email}</p>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/myProfile '>My Profile</NavLink></li>
                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/cart '>My Cart</NavLink></li>
                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/participatedContest'>Donated Contest</NavLink></li>
                        </ul>
                    </>)
                }

                {
                    isCreator ? <>  <h2 className="pl-5 divider text-xl border border-green-300 p-5 m-3 rounded-3xl font-bold">Creator Panel</h2>
                        <p className="w-full btn btn-sm mb-10">{user?.email}</p>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/cart '>My Cart</NavLink></li>
                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/addContest '>Add Contest</NavLink></li>
                        </ul>

                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/contestSubmitted'>Contest Submitted </NavLink></li>

                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/myWinningContest'>My Winning Contest</NavLink></li>
                        </ul>
                    </> : <></>
                }


                <ul className="menu text-xl btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-1  text-white">
                    <li ><NavLink to='/'><IoHomeOutline /> Back to Home </NavLink></li>
                </ul>

            </div>
            {/*  */}



            <div className="flex-1  ">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;