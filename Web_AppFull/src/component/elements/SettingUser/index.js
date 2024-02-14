import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const fileImage = document.querySelector("#imageuser");

  const [id, setID] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [editPass, setEditPass] = useState("");
  const [editNameUser, setEditNameUser] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [status, setStatus] = useState("");
  const [editRole, setEditRole] = useState("");
  const fileImageEdit = document.querySelector("#imageedit");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch("http://localhost:8081/api/user")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  };

  const addUser = () => {
    var formdata = new FormData();
    formdata.append("username", Username);
    formdata.append("password", Password);
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
        console.log(result);
        alert("add user success");
        getUser();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const handleSelect = (index) => {
    const elementSelected = users[index];
    setEditUsername(elementSelected.username);
    setEditPass(elementSelected.password);
    setEditNameUser(elementSelected.fullName);
    setEditEmail(elementSelected.email);
    setStatus(elementSelected.status);
    setEditRole(elementSelected.roleCode);
    setID(elementSelected.id);
  };

  const editUser = (id) => {
    var formdata = new FormData();
    formdata.append("username", editUsername);
    formdata.append("password", editPass);
    formdata.append("fullname", editNameUser);
    formdata.append(
      "image",
      fileImageEdit.files[0],
      fileImageEdit.files[0].name
    );
    formdata.append("email", editEmail);
    formdata.append("status", status);
    formdata.append("roleCode", editRole);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/user/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edited user success");
        getUser();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const deleteUser = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/user/${id}`, requestOptions)
      .then((response) => {
        response.text();
      })
      .then((result) => {
        console.log(result);
        alert("delete user success");
        getUser();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  return (
    <>
      <div className="table_set">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">Tên người dùng</th>
              <th scope="col">Ảnh đại diện</th>
              <th scope="col">Email</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Quyền truy cập</th>
              <th scope="col">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#userModal"
                >
                  <i className="fa-solid fa-plus"></i> Thêm
                </button>
              </th>
            </tr>
          </thead>
          <div
            className="modal fade"
            id="userModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addSingerTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Quản lý user
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
                <div className="modal-body">
                  <form method="post" action="">
                    <div className="form-group">
                      <label htmlFor="nameAcc">Tên tài khoản</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="nameAcc"
                        placeholder="Tên tài khoản"
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pass">Mật khẩu</label>
                      <input
                        type="password"
                        required
                        className="form-control"
                        id="pass"
                        placeholder="Mật khẩu"
                        onChange={(event) => {
                          setPassword(event.target.value);
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
                          setEmail(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="nameaaaa">Tên chủ tài khoản</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="nameaaaa"
                        placeholder="Tên chủ tài khoản"
                        onChange={(event) => {
                          setNameUser(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="imageuser">Ảnh đại diện</label>
                      <input
                        type="file"
                        required
                        className="form-control"
                        id="imageuser"
                        accept="image/jpeg"
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={addUser}
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.fullName}</td>
                <td>{user.image}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>{user.roleCode}</td>
                <td>
                  <button
                    type="button"
                    className=" item_crud"
                    data-toggle="modal"
                    data-target="#userEdit"
                    onClick={() => {
                      handleSelect(index);
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>

                  <button
                    className="item_crud"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className="modal fade"
          id="userEdit"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTit">
                  Edit User Information
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
              <div className="modal-body">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="nameAc">Tên tài khoản</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editUsername}
                      id="nameAc"
                      placeholder="Tên tài khoản"
                      onChange={(event) => {
                        setEditUsername(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passs">Mật khẩu</label>
                    <input
                      type="password"
                      required
                      className="form-control"
                      defaultValue={editPass}
                      id="passs"
                      placeholder="Mật khẩu"
                      onChange={(event) => {
                        setEditPass(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nameuser">Tên người dùng</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editNameUser}
                      id="nameuser"
                      placeholder="Ten nguoi dung"
                      onChange={(event) => {
                        setEditNameUser(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="imageedit">Ảnh đại diện</label>
                    <input
                      type="file"
                      required
                      className="form-control"
                      id="imageedit"
                      accept="image/jpeg"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="emailedit">Email</label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      defaultValue={editEmail}
                      id="emailedit"
                      placeholder="Email"
                      onChange={(event) => {
                        setEditEmail(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="status">Trạng thái</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={status}
                      id="status"
                      placeholder="Trang thai"
                      onChange={(event) => {
                        setStatus(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Role">Quyền truy cập</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editRole}
                      id="Role"
                      placeholder="Quyền truy cập"
                      onChange={(event) => {
                        setEditRole(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editUser(id);
                    }}
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingUser;
