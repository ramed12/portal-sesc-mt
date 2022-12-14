import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const PublicRoutes = () => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;