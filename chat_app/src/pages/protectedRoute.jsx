import React, { useContext } from 'react'
import { authContext } from '../context/authContex';
import { Navigate } from 'react-router';

export const ProtectedRoute = ({children}) => {
    const { currentUser } = useContext(authContext);
    console.log(currentUser);

    if(currentUser) return children;
    else return <Navigate to="/login" />;
}
