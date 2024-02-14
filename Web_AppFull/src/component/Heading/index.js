import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import History from "../body/History";

import "./Heading.css";

function Heading() {
  let uriImage = "http://localhost:8081/files/image/";

  const navigate = useNavigate();
  const [historis, setHistoris] = useState([]);

  const [editPass, SetEditPass] = useState("");
  const [editFullname, SetEditFullname] = useState("");
  const [editEmail, SetEditEmail] = useState("");
  const fileImageUser = document.querySelector("#ImageUserU");

  const idPrivate = localStorage.getItem("private");
  const [privateUser, setPrivateUser] = useState([]);

  const [reload, setReload] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/user/inf/${idPrivate}`, requestOptions)
      .then((response) => response.json())
      .then((privateUser) => {
        setPrivateUser(privateUser);
      })
      .catch((error) => console.log("error", error));
  };

  // useEffect(() => {
  //   fetch("http://localhost:8081/api/song")
  //     .then((res) => res.json())
  //     .then((historis) => {
  //       setHistoris(historis.listResult);
  //     });
  // }, []);

  // const dataHistory = historis.slice(0, 10);

  const ClearData = () => {
    localStorage.removeItem("private");
    localStorage.removeItem("role");
    localStorage.removeItem("privateImage");
    localStorage.removeItem("privateName");
    localStorage.removeItem("currentMusic");
    localStorage.removeItem("dataDetail");
    localStorage.removeItem("dataDetailMV");
    localStorage.removeItem("contentPlaymusic");
    localStorage.removeItem("singer");
    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
  };

  const Logout = () => {
    ClearData();
    setReload(Math.random());
    navigate("/");
  };

  const handleChange = (color) => {
    document.body.style.backgroundColor = color;
    document.getElementById("heading").style.backgroundColor = color;
    document.getElementById("heading1").style.backgroundColor = color;
    console.log(
      document.getElementById("heading") + " xxxxxxxxxxxxxxxxxxxxxxxxxx"
    );
  };

  const editUser = (id) => {
    var formdata = new FormData();
    formdata.append("password", editPass);
    formdata.append("fullname", editFullname);
    formdata.append(
      "image",
      fileImageUser.files[0],
      fileImageUser.files[0].name
    );
    formdata.append("email", editEmail);
    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };
    fetch(`http://localhost:8081/api/user/inf/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edited success");
        getData();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="right-menu">
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
          <div className="null-left"></div>
        </div>
        <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 " id="heading">
          <div className="main-menu mb-3 mt-2">
            <div className="main-menu-all">
              <div className="head1 sticky-top">
                <div className="head2" id="heading1">
                  <div className="row headPage">
                    <div className="col-xl-9 col-lg-10 col-md-10 col-sm-10 ">
                      <div className="list-navbar">
                        <div className="btn-head">
                          <button
                            className="nav-item"
                            onClick={() => navigate(-1)}
                          >
                            <i className="fas fa-arrow-left"></i>
                          </button>
                          <button
                            className="nav-item"
                            onClick={() => navigate(+1)}
                          >
                            <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                        <History />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-2">
                      <ul className="sub-list-head justify-content-end align-items-center">
                        <li>
                          <div className="dropdown">
                            <a
                              className="su-head dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              <i className="fas fa-tshirt"></i>
                            </a>
                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item"
                                onClick={() => {
                                  handleChange("antiquewhite");
                                }}
                              >
                                Antiquewhite
                              </a>

                              <a
                                className="dropdown-item"
                                onClick={() => {
                                  handleChange("gainsboro");
                                }}
                              >
                                Gainsboro
                              </a>
                              <a
                                className="dropdown-item"
                                onClick={() => {
                                  handleChange("lightpink");
                                }}
                              >
                                Lightpink
                              </a>
                              <a
                                className="dropdown-item"
                                onClick={() => {
                                  handleChange("lightsalmon");
                                }}
                              >
                                Lightsalmon
                              </a>
                              <a
                                className="dropdown-item"
                                onClick={() => {
                                  handleChange("lightcyan");
                                }}
                              >
                                Lightcyan
                              </a>
                              <a
                                className="dropdown-item"
                                onClick={() => {
                                  handleChange("transparent");
                                }}
                              >
                                Normal
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="su-head" href="">
                            <i className="fas fa-upload"></i>
                          </a>
                        </li>
                        <li>
                          <a className="su-head">
                            <i className="fas fa-cog"></i>
                          </a>
                        </li>
                        <li>
                          {localStorage.getItem("private") ? (
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                Thêm
                              </button>
                              {localStorage.getItem("role") === "admin" ? (
                                <div className="dropdown-menu">
                                  <a
                                    className="dropdown-item"
                                    data-toggle="modal"
                                    data-target="#userModel"
                                  >
                                    Thông tin cá nhân
                                  </a>

                                  <Link to="/Admin" className="dropdown-item">
                                    <div className="account">Admin</div>
                                  </Link>
                                  <a
                                    className="dropdown-item"
                                    onClick={() => {
                                      alert("Working");
                                    }}
                                  >
                                    Setting
                                  </a>
                                  <Link to="/" className="dropdown-item">
                                    <div
                                      className="account"
                                      onClick={() => {
                                        Logout();
                                      }}
                                    >
                                      Logout
                                    </div>
                                  </Link>
                                </div>
                              ) : (
                                <div className="dropdown-menu">
                                  <a
                                    className="dropdown-item"
                                    data-toggle="modal"
                                    data-target="#userModel"
                                  >
                                    Thông tin cá nhân
                                  </a>

                                  <a
                                    className="dropdown-item"
                                    onClick={() => {
                                      alert("Working");
                                    }}
                                  >
                                    Setting
                                  </a>
                                  <Link to="/" className="dropdown-item">
                                    <div
                                      className="account"
                                      onClick={() => {
                                        Logout();
                                      }}
                                    >
                                      Logout
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link to="/Login" className="dropdown-item">
                              <div
                                className="account"
                                onClick={() => {
                                  ClearData();
                                }}
                              >
                                Login/Logout
                              </div>
                            </Link>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="userModel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addSingerTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Thông tin cá nhân
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body col-lg-12">
              <div className="editInfor">
                <div className="showInfor col-lg-4">
                  <div className="imagUser">
                    <img
                      src={
                        privateUser.length !== 0
                          ? uriImage + privateUser.image
                          : "https://cdn.pixabay.com/photo/2016/07/30/13/16/dandelion-1557110_640.jpg"
                      }
                      className="userImage"
                    ></img>
                  </div>
                  <div className="nameUser">
                    Tên:
                    {privateUser.length !== 0
                      ? privateUser.fullName
                      : "Name user"}
                  </div>
                  <div
                    className="emailUser"
                    // title={
                    //   privateUser.length !== 0
                    //     ? privateUser[0].email
                    //     : "Email user"
                    // }
                  >
                    Email:
                    {privateUser.length !== 0
                      ? privateUser.email
                      : "Email user"}{" "}
                  </div>
                </div>
                <div className="changeInfor col-lg-8">
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="nameAc">Tên người dùng</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="nameAc"
                        placeholder="Tên nguoi dung"
                        onChange={(event) => {
                          SetEditFullname(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ImageUserU">Ảnh đại diện</label>
                      <input
                        type="file"
                        required
                        className="form-control"
                        id="ImageUserU"
                        accept="image/jpeg"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passs">Mật khẩu</label>
                      <input
                        type="password"
                        required
                        className="form-control"
                        id="passs"
                        placeholder="Mật khẩu"
                        onChange={(event) => {
                          SetEditPass(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        onChange={(event) => {
                          SetEditEmail(event.target.value);
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        editUser(idPrivate);
                      }}
                    >
                      Cập nhật
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
