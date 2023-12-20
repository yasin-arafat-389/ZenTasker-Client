/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  let location = useLocation();

  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <CirclesWithBar
          height="300"
          width="300"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );

  if (!user) {
    toast.error("You must login first");
    return <Navigate state={location.pathname} to="/login" />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
