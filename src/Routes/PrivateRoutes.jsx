import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth();
    if (loading) {
        return <progress className="progress progress-info w-56" value="100" max="100"></progress>
    }
    if (user) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;