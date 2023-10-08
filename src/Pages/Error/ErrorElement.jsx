
import { Link, useRouteError } from "react-router-dom";
import errorbg from "../../assets/bg5.jpg"
const ErrorElement = () => {
    const error = useRouteError();
  
    return (
        <div className="bg-center bg-cover h-screen w-full flex justify-start items-center px-5 md:px-20" style={{backgroundImage:`url("${errorbg}")`}}>
            <div id="error-page max-w-7xl mx-auto" >
            <h1 className="text-5xl font-press text-white my-5">Oops!</h1>
            <p className="text-2xl font-babas ">Sorry, an unexpected error has occurred.</p>
            <p className="text-3xl font-press my-3 mb-5">
            <i>{error.statusText || error.message}</i>
            </p>
            <Link to={'/'} className="bg-primary px-6 py-2 rounded-full hover:bg-secondary duration-500 hover:text-white">Go back Home Page</Link>
            </div>
        </div>
  );
};

export default ErrorElement;