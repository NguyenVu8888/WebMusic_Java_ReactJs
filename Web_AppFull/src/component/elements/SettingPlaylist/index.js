import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingPlaylist() {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState([]);

  const [namePlayList, setNamePlayList] = useState("");
  const fileImage = document.querySelector("#imagePlaylist");
  const [userID, SetUserId] = useState("");

  const [id, setID] = useState("");
  const [editNamePlayList, SetEditNamePlayList] = useState("");
  const fileImageNew = document.querySelector("#imagePlaylistNew");

  useEffect(() => {
    getPlaylist();
  }, []);

  const getPlaylist = () => {
    fetch("http://localhost:8081/api/playlist")
      .then((res) => res.json())
      .then((plays) => {
        setPlaylists(plays.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  };

  const addPlaylist = () => {
    var formdata = new FormData();
    formdata.append("name", namePlayList);
    formdata.append("image", fileImage.files[0], fileImage.files[0].name);
    formdata.append("userid", userID);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/playlist", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add playlist success");
        getPlaylist();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const handleSelect = (index) => {
    const elementSelected = playlists[index];
    SetEditNamePlayList(elementSelected.name);
    setID(elementSelected.id);
  };

  const editPlaylist = (id) => {
    var formdata = new FormData();
    formdata.append("name", editNamePlayList);
    formdata.append("image", fileImageNew.files[0], fileImageNew.files[0].name);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/playlist/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edited playlist success");
        getPlaylist();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  // const deletePlaylist = (id) => {
  //   var requestOptions = {
  //     method: "DELETE",
  //     redirect: "follow",
  //   };

  //   fetch(`http://localhost:8081/api/playlist/${id}`, requestOptions)
  //     .then((response) => {
  //       response.text();
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       alert("delete playlist success");
  //       getPlaylist();
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // };

  return (
    <>
      <div className="table_set">
        <div className="category-all-mysong">
          <ul style={{ height: "780px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Tên playlist</th>
                  <th scope="col">Hình ảnh playlist</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#playlistModal"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>
              <div
                className="modal fade"
                id="playlistModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="addSingerTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Quản lý Playlist
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
                          <label htmlFor="namePlaylist">Tên Playlist </label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="namePlaylist"
                            placeholder="Playlist Name"
                            onChange={(event) => {
                              setNamePlayList(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="imagePlaylist">Ảnh nền</label>
                          <input
                            type="file"
                            required
                            className="form-control"
                            id="imagePlaylist"
                            accept="image/jpeg"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="userID">UserId</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="userID"
                            placeholder="UserId"
                            onChange={(event) => {
                              SetUserId(event.target.value);
                            }}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addPlaylist}
                        >
                          Add
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {playlists.map((play, index) => (
                  <tr key={index}>
                    <td>{play.username}</td>
                    <td>{play.name}</td>
                    <td>{play.image}</td>
                    <td>
                      <button
                        type="button"
                        className=" item_crud"
                        data-toggle="modal"
                        data-target="#playlistEdit"
                        onClick={() => {
                          handleSelect(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      {/* <button
                        className="item_crud"
                        onClick={() => {
                          deletePlaylist(play.id);
                        }}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ul>
        </div>

        <div
          className="modal fade"
          id="playlistEdit"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTit">
                  Edit Playlist Information
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
                    <label htmlFor="namePlaylistE">Tên Playlist</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="namePlaylistE"
                      placeholder="Playlist Name"
                      defaultValue={editNamePlayList}
                      onChange={(event) => {
                        SetEditNamePlayList(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imagePlaylistNew">Ảnh nền</label>
                    <input
                      type="file"
                      required
                      className="form-control"
                      id="imagePlaylistNew"
                      accept="image/jpeg"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editPlaylist(id);
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

export default SettingPlaylist;
