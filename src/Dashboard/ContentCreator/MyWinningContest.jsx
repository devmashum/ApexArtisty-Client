import useContestSubmitted from '../../Hooks/useContestSubmitted';
import DashboardHeader from '../../Shared/DashboardHeader';
import { GiTargetPrize } from "react-icons/gi";

const MyWinningContest = () => {
    const [arts] = useContestSubmitted();
    return (
        <div className="max-w-[425px] lg:max-w-full md:max-w-full">
            <DashboardHeader heading={'Winning Contest'}></DashboardHeader>
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

                                <th>Result</th>



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
                                <td className="text-xl">
                                    {item.contest_prize}
                                </td>

                                {
                                    item.role ? <td ><button className='p-3 text-white text-xl bg-green-600 rounded-full ' >Winner</button> </td> : <><td ><button className='p-3 text-white text-xl bg-yellow-600 rounded-full ' >Pending...</button> </td></>
                                }


                            </tr>)}


                        </tbody>


                    </table>
                </div>
            </div>
        </div >
    );
};


export default MyWinningContest;