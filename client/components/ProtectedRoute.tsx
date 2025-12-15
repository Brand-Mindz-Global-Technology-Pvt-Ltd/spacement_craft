import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="relative">
                    <div
                        className="w-16 h-16 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"
                        style={{
                            borderTopColor: '#0DF7D4',
                            animation: 'spin 1s linear infinite'
                        }}
                    />
                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#0DF7D4]/20 to-[#2C7BDC]/20 blur-xl" />
                </div>
            </div>
        );
    }

    if (!currentUser) {
        return <Navigate to="/admin/blog/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
