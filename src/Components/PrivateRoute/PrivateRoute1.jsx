import { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const PrivateRoute1 = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-[#007456]"></div>
            </div>
        )
    }
    else if (user) {
        return children;
    }
    else {
        return (
            <Navigate to={'/login'} ></Navigate>
        )
    }
};

export default PrivateRoute1;