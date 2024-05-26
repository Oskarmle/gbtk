import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '@supabase/auth-helpers-react';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  // Check if user is authenticated
  if (!user) {
    // If not authenticated, redirect to login page
    return <Navigate to="/bestyrelse" />;
  }

  // If user is authenticated, render the children (protected content)
  return children;
};

export default ProtectedRoute;