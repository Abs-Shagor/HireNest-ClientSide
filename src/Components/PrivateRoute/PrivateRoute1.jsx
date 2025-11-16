import { useContext, useEffect, useRef } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const PrivateRoute1 = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const warned = useRef(false);
    useEffect(() => {
        if (!loading && !user && !warned.current) {
            warned.current = true;
            toast.warning("You must login first!");
        }
    }, [loading, user]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-[#007456]"></div>
            </div>
        )
    }
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute1;