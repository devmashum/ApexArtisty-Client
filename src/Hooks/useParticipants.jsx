

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useParticipants = () => {
    const axiosPublic = useAxiosPublic();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cart')
            return res.data;
        }
    });
    return [cart, refetch]


};

export default useParticipants;