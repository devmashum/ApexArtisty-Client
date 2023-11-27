import useCart from "../../Hooks/useCart";
import DashboardHeader from "../../Shared/DashboardHeader";


const ParticipatedContest = () => {
    const [cart] = useCart();

    return (
        <div>
            <DashboardHeader heading={'My Participated Contest'}></DashboardHeader>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-base">
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Deadline</th>


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
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="text-xl">
                                    {item.name}
                                </td>
                                <td className="text-xl">{item.deadline}</td>


                            </tr>)}


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
}

export default ParticipatedContest;