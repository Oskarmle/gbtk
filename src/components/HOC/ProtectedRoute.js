import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '@supabase/auth-helpers-react';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user || user === null) {
    return <Navigate to="/bestyrelse" />;
  } 

  return children;
};

export default ProtectedRoute;