// import axios from "axios";
// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllUsers from "./AllUsers";
const ManageUser = () => {

    const axiosPublic = useAxiosPublic();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users {users.length}</h2>
            </div>
            {/* Display user data in a list, for example */}
            <ul className="lg:pr-10">
                {users.map(user => <AllUsers key={user._id} user={user}></AllUsers>)}
            </ul>
        </div>
    );
};

export default ManageUser;
