import { FaTrash } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import DashboardHeader from "../../Shared/DashboardHeader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosPublic = useAxiosPublic();
    const handleDeleteItem = id => {
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
                axiosPublic.delete(`/cart/${id}`)
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

    return (
        <div>
            <DashboardHeader heading={'My Cart'}></DashboardHeader>

            <div className="flex justify-evenly mt-5 items-center text-2xl font-bold">
                <h2>Total Items: {cart.length}</h2>
                <h2>Total Price: ${totalPrice}</h2>
                <button className="btn btn-warning">Pay Now</button>

            </div>
            <p className=" divider"></p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => <tr key={item._id}>

                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>   {item.price}</td>
                                <th>
                                    <button onClick={() => handleDeleteItem(item._id)} className="btn bg-red-600 text-white"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)}


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
}

export default MyCart;