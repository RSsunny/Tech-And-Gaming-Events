import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';

const Privetroute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useAuth()
    if(loading){
        return <>
        <div className="h-screen w-full flex justify-center items-center">
        <div>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </div>
        </div>
        </>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={location.state}></Navigate>
};

export default Privetroute;

Privetroute.propTypes={
    children:PropTypes.node.isRequired
}