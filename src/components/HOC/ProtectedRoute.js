import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { useSession } from '@supabase/auth-helpers-react';
import { SessionContext } from "../../index";

const ProtectedRoute = ({ children }) => {
  // const { user } = useSession();
  const { session } = useContext(SessionContext);

  if (!session) {
    console.log("you have acces to this site");
    <Navigate to="/bestyrelse" />;
  } else {
    console.log("error, you dont have access");
    <Navigate to="/bestyrelse/upload" />;
    return children;
  }

};

export default ProtectedRoute;
