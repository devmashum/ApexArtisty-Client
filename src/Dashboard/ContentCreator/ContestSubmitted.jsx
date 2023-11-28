import useContestSubmitted from "../../Hooks/useContestSubmitted";
import DashboardHeader from "../../Shared/DashboardHeader";
const ContestSubmitted = () => {
    const [arts] = useContestSubmitted();
    return (
        <div >
            <DashboardHeader></DashboardHeader>
            <h1 className="text-center p-10">Contest Submitted: {arts.length}</h1>

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
                            {arts.map((item, index) => <tr key={item._id}>

                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={item.img} alt="Avatar Tailwind CSS Component" />
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
};

export default ContestSubmitted;