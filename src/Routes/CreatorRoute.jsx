import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useCreator from "../Hooks/useCreator";


const CreatorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isCreator, isCreatorLoading] = useCreator();
    const location = useLocation();
    if (loading || isCreatorLoading) {
        return <progress className="progress progress-info w-56" value="100" max="100"></progress>
    }
    if (user && isCreator) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default CreatorRoute;