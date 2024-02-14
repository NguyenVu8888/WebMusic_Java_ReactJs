import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingImage() {
  const navigate = useNavigate();
  const [id, setID] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [editPass, setEditPass] = useState("");
  const [editNameUser, setEditNameUser] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [status, setStatus] = useState("");
  const [editRole, setEditRole] = useState("");
  const fileImageEdit = document.querySelector("#imageEditt");

  const [search, setSreach] = useState("");
  const [searchResult, setSreachResult] = useState("");

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("name", search);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/user/search`, requestOptions)
      .then((response) => response.json())
      .then((sreachResult) => {
        setSreachResult(sreachResult);
      })
      .catch((error) => console.log("error", error));
  }, [search]);

  const handleSelect = (index, id) => {
    const elementSelected = search[index];
    console.log(elementSelected + "akjbsibdisn" + " " + index);
    // setEditUsername(elementSelected.username);
    // setEditPass(elementSelected.password);
    // setEditNameUser(elementSelected.fullName);
    // setEditEmail(elementSelected.email);
    // setStatus(elementSelected.status);
    // setEditRole(elementSelected.roleCode);
    setID(id);
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
    console.log(fileImageEdit);

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
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  return (
    <>
      <div className="searchUser">
        <input
          className="input-head"
          required
          id="input-head"
          type="text"
          placeholder="Nhập tên người dùng"
          onChange={(event) => {
            setSreach(event.target.value);
          }}
        />
      </div>
      <div className="table_set">
        <div className="category-all-mysong">
          <ul style={{ height: "780px" }}>
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
                </tr>
              </thead>
              <tbody>
                {search.length > 0 ? (
                  <>
                    {searchResult.map((user, index) => (
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
                            data-target="#SearchUserModel"
                            onClick={() => {
                              handleSelect(index, user.id);
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
                  </>
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </ul>
        </div>
        <div
          className="modal fade"
          id="SearchUserModel"
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
                    <label htmlFor="nameAcser">Tên tài khoản</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editUsername}
                      id="nameAcser"
                      placeholder="Tên tài khoản"
                      onChange={(event) => {
                        setEditUsername(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passsw">Mật khẩu</label>
                    <input
                      type="password"
                      required
                      className="form-control"
                      defaultValue={editPass}
                      id="passsw"
                      placeholder="Mật khẩu"
                      onChange={(event) => {
                        setEditPass(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nameuserx">Tên người dùng</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editNameUser}
                      id="nameuserx"
                      placeholder="Ten nguoi dung"
                      onChange={(event) => {
                        setEditNameUser(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="imageEditt">Ảnh đại diện</label>
                    <input
                      type="file"
                      required
                      className="form-control"
                      id="imageEditt"
                      accept="image/jpeg"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="emaileditt">Email</label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      defaultValue={editEmail}
                      id="emaileditt"
                      placeholder="Email"
                      onChange={(event) => {
                        setEditEmail(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="statuss">Trạng thái</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={status}
                      id="statuss"
                      placeholder="Trang thai"
                      onChange={(event) => {
                        setStatus(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Rolee">Quyền truy cập</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editRole}
                      id="Rolee"
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

export default SettingImage;
