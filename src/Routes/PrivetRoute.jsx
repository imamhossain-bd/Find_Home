import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg ml-[700px]"></span>
    }
    
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;