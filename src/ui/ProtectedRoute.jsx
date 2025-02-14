/* eslint-disable react/prop-types */
import { Navigate } from "react-router";



function ProtectedRoute({ children }) {

  if(localStorage.getItem('userToken')) return children;
  else return <Navigate to={'/login'} />
}

export default ProtectedRoute;
