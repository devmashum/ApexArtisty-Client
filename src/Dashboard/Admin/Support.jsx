import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DashboardHeader from "../../Shared/DashboardHeader";


const Support = () => {
    const axiosSecure = useAxiosSecure();
    const contact = () => {
        axiosSecure.get('/contact')
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    // const { data: contact = [] } = useQuery({
    //     queryKey: ['contact'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/contact');
    //         return res.data;
    //     }
    // });
    return (
        <div>
            <DashboardHeader heading={'Support'}></DashboardHeader>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contact?.map(message => <tr key={message._id}>

                                <td>{message.name}</td>
                                <td>{message.email}</td>
                                <td>{message.message}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Support;