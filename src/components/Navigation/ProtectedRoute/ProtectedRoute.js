import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../services/AuthProvider';

export const ProtectedRoute = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/Unauthorized" replace />;
    }

    return <Outlet />;
};