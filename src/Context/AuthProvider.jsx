import {  createContext } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {



    const authinfo={
        name:'sunny'
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;