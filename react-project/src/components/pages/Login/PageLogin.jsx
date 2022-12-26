import axios from "axios";
import React, { useState,    } from "react";
import "../Login/login.css";
import AuthContext from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import authService from "../../../context/Authservice";

const PageLogin = () => {
  function hhClick(e) {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  }
  function hhClick1(e) {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  }

  // ------------------- Login --------------------------------
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [sc, setSc] = useState(false);
  const [error, setError] = useState("");

  const nagivate = useNavigate();
  // const { setAuth } = useContext(AuthContext);
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email,pass).then(
        () => {
          nagivate('/')
          window.location.reload();
        },
        (err) => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // ----------------------------------------------------------------------------------------

  // -------------------- Register ------------------------------
  const [registerEmail, setRegisterEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [registerCPass, setRegisterCPass] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerSubmitHandler = async (e) => {
    e.preventDefault();

    if (registerPass !== registerCPass) {
      setMsg("Şifreler Uyuşmuyor");
    } else {
      setMsg(null);
      try {
        await authService.signup(
          registerEmail,
          registerPass,
          name,
          surname,
          registerPhone).then(
          () => {
            nagivate("/PageLogin")
            window.location.reload();
            window.alert("Giriş Yapabilirsiniz.")
            },
            (err) => {
              console.log(err)
          }
        )
        // const config = {
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        //   },
        // };
        // setLoading(true);
        // const { data } = await axios.post(
        //   "api/users/signup",
        //   {
        //     name: name,
        //     surname: surname,
        //     phone: registerPhone,
        //     email: registerEmail,
        //     password: registerPass,
        //   },
        //   config
        // );
        // setLoading(false);

        // localStorage.setItem("userInfo", JSON.stringify(data));
        // console.log(data);

      } catch (error) {
        console.error(error.response.data.msg);
      }
    }
  };
  // ---------------------------------------------------------------------

  return (
    <div className="ad">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={registerSubmitHandler}>
          <h1 style={{textTransform:'uppercase'}}>Üye Ol</h1>
          <div className="social-container">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <span style={{textTransform:'uppercase'}}>yada email ile</span>
          <div>
          <input
            type="text"
            placeholder="İsim"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Soyisim"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifre"
            value={registerPass}
            onChange={(e) => setRegisterPass(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifre Tekrar"
            value={registerCPass}
            onChange={(e) => setRegisterCPass(e.target.value)}
          />
          <input
            type="text"
            placeholder="Telefon"
            value={registerPhone}
            onChange={(e) => setRegisterPhone(e.target.value)}
          />
          </div>
          

          <button style={{marginTop:'5px',textTransform:'uppercase', width:'18em',height:'3em',border:'none', color:'white',backgroundColor:'#2879fe'}}>Üye Ol</button>
        </form>
      </div>
      <>
        <div className="form-container sign-in-container">
          <form onSubmit={loginSubmitHandler}>
            <h1 style={{textTransform:'uppercase'}}>Giriş</h1>
            <div className="social-container">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
            <span style={{textTransform:'uppercase'}} >yada hesap ile</span>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Şifre"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <a>Şifremi Unuttum</a>
            <button style={{textTransform:'uppercase', width:'18em',height:'3em',border:'none', color:'white',backgroundColor:'#2879fe'}}>Giriş</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Yenilikler için hemen kayıt ol</h1>
              <p>Hesabın var mı?</p>
              <button onClick={hhClick1} className="ghost" id="signIn" style={{textTransform:'uppercase', width:'18em',height:'3em',border:'none', color:'white',backgroundColor:'#2879fe'}}>
                Giriş Yap
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>LOGO</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis hic quis eos atque, nihil doloremque tempora, est
                pariatur, assumenda labore ratione eveniet optio nemo asperiores
                incidunt odit sint dignissimos architecto.
              </p>
              <button onClick={hhClick} className="ghost" id="signUp" style={{textTransform:'uppercase', width:'18em',height:'3em',border:'none', color:'white',backgroundColor:'#2879fe'}}>
                Üye Ol
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
    </div>
    
  );
};

export default PageLogin;

