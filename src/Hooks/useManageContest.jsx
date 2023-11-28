import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useManageContest = () => {
    const axiosPublic = useAxiosPublic();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['arts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/arts')
            return res.data;
        }
    });
    return [cart, refetch]


};


export default useManageContest;