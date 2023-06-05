import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user?.email) {
        return children;

    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;