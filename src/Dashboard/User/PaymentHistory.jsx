import usePayments from '../../Hooks/usePayments';
import DashboardHeader from '../../Shared/DashboardHeader';

const PaymentHistory = () => {

    const [payments] = usePayments();
    const totalDonated = payments.reduce((total, item) => total + item.price, 0)

    return (
        <div className='max-w-[425px] lg:max-w-full md:max-w-full'>
            <DashboardHeader heading={`Total Donated $ ${totalDonated}`}></DashboardHeader>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="lg:text-base">
                            <th>
                                #
                            </th>

                            <th>Date</th>
                            <th>Transaction Id
                            </th>
                            <th>Status</th>
                            <th>Price</th>



                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((item, index) => <tr key={item._id}>

                            <td>
                                {index + 1}
                            </td>

                            <td className="lg:text-xl">
                                {item.date}
                            </td>
                            <td className="lg:text-xl">
                                {item.transactionId
                                }
                            </td>
                            <td className="lg:text-xl">{item.status}</td>
                            <td className="lg:text-xl">$ {item.price}</td>



                        </tr>)}


                    </tbody>


                </table>

            </div>
        </div>
    );
};

export default PaymentHistory;