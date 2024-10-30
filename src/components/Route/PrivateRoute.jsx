import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { DNA } from "react-loader-spinner";
 
const PrivateRoute = ({children}) => {



    const {user,loader}=useContext(AuthContext);

    if(loader){
        return <p className="flex justify-center  "><DNA color="#00BFFF" height={80} width={80} /></p> ;
    }


    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}