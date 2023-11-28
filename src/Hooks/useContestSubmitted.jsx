
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useContestSubmitted = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: arts = [] } = useQuery({
        queryKey: ['arts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/arts?email=${user.email}`)
            return res.data;
        }
    });
    return [arts, refetch]

};

export default useContestSubmitted;