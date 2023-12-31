// import axios from "axios";
// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { MdDeleteOutline } from "react-icons/md";
import { FaCreativeCommons, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DashboardHeader from "../../Shared/DashboardHeader";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: `${user.name} is Admin Now`,
                    });
                    refetch();
                }
            })
    }

    const handleMakeCreator = user => {
        axiosSecure.patch(`/users/creator/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: `${user.name} is Creator Now`,
                    });
                    refetch();
                }
            })
    }
    return (
        <div className=" max-w-[425px] lg:max-w-full md:max-w-full">
            <DashboardHeader heading={'Manage Users'}></DashboardHeader>
            <h2 className="text-center text-2xl">Total Users: {users.length}</h2>

            <div className="overflow-x-auto lg:px-10 w-full ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=" lg:font-extrabold text-base">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role(Creator)</th>
                            <th>Role(Admin)</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td >{user.name}</td>
                                <td>{user.email}</td>
                                <td >   {user.role1 === 'creator' ? 'Creator' :
                                    <button onClick={() => handleMakeCreator(user)} className="bg-orange-500 btn text-white lg:text-xl">
                                        <FaCreativeCommons></FaCreativeCommons>
                                    </button>
                                }</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="bg-green-500 btn lg:text-xl text-white">
                                            <FaUsers></FaUsers>
                                        </button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className=" btn bg-red-500 lg:text-xl text-white">
                                        <MdDeleteOutline />
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default ManageUser;
