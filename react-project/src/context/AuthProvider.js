import { createContext, useState,useContext,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
    const [auth,setAuth] = useState({});
    const [user,setUser] = useState({});
    useEffect(() => {
        // const isAuth = async () => {
        //      try {
        //         const res = await axios.get(`http://localhost:8080/api/users/me/`,
        //         {   withCredentials:true});
        //         setUser(res.data)
        //     } catch (error) {
        //         setUser(null)
        //     }
        // }
        // isAuth();
    },[auth])

    return (
        <AuthContext.Provider value={{auth,setAuth,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;