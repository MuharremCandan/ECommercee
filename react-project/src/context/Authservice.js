import axios from "axios";

const API_URL = "/api/users";

const signup = (email, password,name,surname,phone) => {
  return axios
    .post(API_URL + "/signup", {
      email: email,
      password: password,
      name: name,
      surname: surname,
      phone: phone
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("userToken", JSON.stringify(response.data.token));

      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();

};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;