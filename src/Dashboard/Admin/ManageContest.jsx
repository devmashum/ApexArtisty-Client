import Swal from "sweetalert2";
import useManageContest from "../../Hooks/useManageContest";
import DashboardHeader from "../../Shared/DashboardHeader";
import { FaUsers } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";



const ManageContest = () => {
    const [arts, refetch] = useManageContest();
    const axiosSecure = useAxiosSecure();

    const handleDeleteUser = arts => {
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
                axiosSecure.delete(`/arts/${arts._id}`)
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

    const handleMakeWinner = arts => {
        axiosSecure.patch(`/arts/winner/${arts._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: `${arts.name} is Winner Now`,
                    });
                    refetch();
                }
            })
    }

    return (
        <div className="max-w-[425px] lg:max-w-full md:max-w-full">
            <DashboardHeader heading={'Manage Contest'}></DashboardHeader>

            <h1 className="text-center text-2xl lg:p-10">Total Participants: {arts.length}</h1>
            <div className="overflow-x-auto px-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=" font-extrabold text-base">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Make Winner</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arts.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                    {user.role === 'winner' ? 'Winner' :
                                        <button onClick={() => handleMakeWinner(user)} className="bg-green-500 btn text-white">
                                            <FaUsers></FaUsers>
                                        </button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className=" btn bg-red-500 text-xl text-white">
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

export default ManageContest;