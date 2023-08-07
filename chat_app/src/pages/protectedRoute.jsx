import React, { useContext } from 'react'
import { authContext } from '../context/authContex';
import { Navigate } from 'react-router';

export const ProtectedRoute = ({children}) => {
    const { currentUser } = useContext(authContext);

    if(currentUser==={}) return <Navigate to="/login" />;
    
    return children;
}
