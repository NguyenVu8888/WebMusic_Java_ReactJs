import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import style from "./LoginRegister.module.css";

function LoginRegister() {
  // section login start
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/user/login", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        localStorage.setItem("private", result.id);
        localStorage.setItem(
          "privateImage",
          "http://localhost:8081/files/image/" + result.image
        );
        localStorage.setItem("privateName", result.fullName);
        localStorage.setItem("role", result.roleCode);

        if (localStorage.getItem("role") === "admin") {
          navigate("/Admin");
        } else {
          navigate("/Home");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("username,password Wrong");
      });
  };

  // end section login

  // section regiter start

  const [regisUsername, setRegisUsername] = useState("");
  const [regisPass, setRegisPass] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const fileImage = document.querySelector("#fileImage");

  const checkUserExsit = () => {
    var formdata = new FormData();
    formdata.append("username", regisUsername);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/user/regis", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let condition = result;
        if (condition == "Exsist") {
          alert("user name da ton tai");
        } else if (condition == "UnExsist") {
          register();
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const register = () => {
    var formdata = new FormData();
    formdata.append("username", regisUsername);
    formdata.append("password", regisPass);
    formdata.append("fullname", nameUser);
    formdata.append("image", fileImage.files[0], fileImage.files[0].name);
    formdata.append("email", email);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/user", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        alert("create success");
        localStorage.setItem("private", result.id);
        localStorage.setItem(
          "privateImage",
          "http://localhost:8081/files/image/" + result.image
        );
        localStorage.setItem("privateName", result.fullName);
        localStorage.setItem("role", result.roleCode);

        if (localStorage.getItem("role") === "admin") {
          navigate("/Admin");
        } else {
          navigate("/Home");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("create fail");
      });
  };

  // end section register

  var changelog = () => {
    var log = document.getElementById("log");
    var regis = document.getElementById("regis");
    if ((log.style.display = "flex" && regis.style.display === "none")) {
      log.style.display = "none";
      regis.style.display = "flex";
    } else {
      log.style.display = "flex";
      regis.style.display = "none";
    }
  };

  return (
    <>
      <div className={style.app}>
        <div className={style.content}>
          <div className={style.contentApp}>
            <div className={style.container}>
              <div className={style.contentLogin} id="log">
                <div className={style.loginLeft}>
                  <div className={style.title}>Login</div>
                  <div className={style.tip}>welcome to my website !!!</div>
                </div>

                <div className={style.loginRight}>
                  <div className={style.ip}>
                    <label htmlFor="">User Name</label>
                    <input
                      type="text"
                      required
                      className={style.ipLog}
                      placeholder="UserName"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                  </div>

                  <div className={style.ip}>
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      required
                      className={style.ipLog}
                      placeholder="password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                  <button
                    className={style.submit}
                    type="button"
                    onClick={() => {
                      login();
                    }}
                  >
                    Login
                  </button>
                  <div className="question_user">
                    <span>Bạn chưa có tài khoản ?</span>
                    <span className={style.changeBtn} onClick={changelog}>
                      SignUp ?
                    </span>
                    <a href="" className={style.whatSigin}>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="" className={style.whatSigin}>
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={style.contentRegister} id="regis">
                <div className={style.loginLeft}>
                  <div className={style.title}>Register</div>
                  <div className={style.tip}>welcome to my website !!!</div>
                </div>

                <div className={style.loginRight}>
                  <div className={style.ip}>
                    <label htmlFor="">User Name</label>
                    <input
                      type="text"
                      required
                      className={style.ipLog}
                      placeholder="UserName"
                      onChange={(event) => {
                        setRegisUsername(event.target.value);
                      }}
                    />
                  </div>

                  <div className={style.ip}>
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      required
                      className={style.ipLog}
                      placeholder="password"
                      onChange={(event) => {
                        setRegisPass(event.target.value);
                      }}
                    />
                  </div>

                  <div className={style.ip}>
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      required
                      className={style.ipLog}
                      placeholder="Name"
                      onChange={(event) => {
                        setNameUser(event.target.value);
                      }}
                    />
                  </div>

                  <div className={style.ip}>
                    <label htmlFor="">Image</label>
                    <input
                      id="fileImage"
                      required
                      type="file"
                      className={style.ipLog}
                      placeholder="Image"
                      accept="image/jpeg"
                    />
                  </div>

                  <div className={style.ip}>
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      required
                      className={style.ipLog}
                      placeholder="Email@gmail.com"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    className={style.submit}
                    onClick={() => {
                      checkUserExsit();
                    }}
                  >
                    Register
                  </button>
                  <div className="question_user">
                    <span>Bạn đã có tài khoản ?</span>
                    <span className={style.changeBtn} onClick={changelog}>
                      SignIn ?
                    </span>
                    <a href="" className={style.whatSigin}>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="" className={style.whatSigin}>
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;
