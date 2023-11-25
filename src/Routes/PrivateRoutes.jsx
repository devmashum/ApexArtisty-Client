import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'


const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    if (loading) {
        return <progress className="progress progress-info w-56" value="100" max="100"></progress>
    }
    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;