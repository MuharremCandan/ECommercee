import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
      if (localStorage.getItem("userToken")) {
        let tokens = JSON.parse(localStorage.getItem("userToken"));
        return parseJwt(tokens.token);
      }
      return null;
    });
   
    const navigate = useNavigate();
   
    const login = async (payload) => {
      const apiResponse = await axios.post(
        "http://localhost:8080/api/users/me",
        payload
      );
      localStorage.setItem("userToken",  JSON.stringify(apiResponse.data));
      setUser(parseJwt(apiResponse.data.token));
      navigate("/");
    };
    return (
      <AuthContext.Provider value={{ user, login }}>
        {children}
      </AuthContext.Provider>
    );
  };
   
  export default AuthContext;

  function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}