import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingAlbum() {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);

  const [albumName, setAlbumName] = useState("");
  const [nameSinger, setNameSinger] = useState("");
  const fileImage = document.querySelector("#albumImage");

  const [id, setID] = useState("");
  const [editAlbumName, SetEditAlbumName] = useState("");
  const [editNameSinger, SetEditNameSinger] = useState("");
  const fileEditImage = document.querySelector("#albumEditImage");

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = () => {
    fetch("http://localhost:8081/api/album")
      .then((res) => res.json())
      .then((albums) => {
        setAlbums(albums.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  };

  const addAlbum = () => {
    var formdata = new FormData();
    formdata.append("name", albumName);
    formdata.append("image", fileImage.files[0], fileImage.files[0].name);
    formdata.append("artistName", nameSinger);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/album", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add user success");
        getAlbums();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const handleSelect = (index) => {
    const elementSelected = albums[index];
    SetEditAlbumName(elementSelected.name);
    SetEditNameSinger(elementSelected.artistID);
    setID(elementSelected.id);
  };

  const editAlbum = (id) => {
    var formdata = new FormData();
    formdata.append("name", editAlbumName);
    formdata.append(
      "image",
      fileEditImage.files[0],
      fileEditImage.files[0].name
    );
    formdata.append("artistName", editNameSinger);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/album/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edited album success");
        getAlbums();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const deleteAlbum = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/album/${id}`, requestOptions)
      .then((response) => {
        response.text();
      })
      .then((result) => {
        console.log(result);
        alert("delete album success");
        getAlbums();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  return (
    <>
      <div className="table_set">
        <div className="category-all-mysong">
          <ul style={{ height: "780px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Tên Album</th>
                  <th scope="col">Mã nghệ sĩ</th>
                  <th scope="col">Thời gian xuất bản</th>
                  <th scope="col">Hình ảnh Album</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#AlbumModal"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>
              <div
                className="modal fade"
                id="AlbumModal"
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
                        Quản lý Album
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
                          <label htmlFor="nameAlbum">Tên album</label>
                          <input
                            type="text"
                            className="form-control"
                            id="nameAlbum"
                            placeholder="Tên album"
                            required
                            onChange={(event) => {
                              setAlbumName(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="namesinger">Mã nghệ sĩ</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="namesinger"
                            placeholder="Singer Name"
                            onChange={(event) => {
                              setNameSinger(event.target.value);
                            }}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="albumImage ">Hình ảnh Album</label>
                          <input
                            type="file"
                            required
                            className="form-control"
                            id="albumImage"
                            accept="image/jpeg"
                          />
                        </div>

                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addAlbum}
                        >
                          Add
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {albums.map((album, index) => (
                  <tr key={index}>
                    <td>{album.name}</td>
                    <td>{album.artistID}</td>
                    <td>{album.releaseDate}</td>
                    <td>{album.image}</td>
                    <td>
                      <button
                        type="button"
                        className=" item_crud"
                        data-toggle="modal"
                        data-target="#AlbumEdit"
                        onClick={() => {
                          handleSelect(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="item_crud"
                        onClick={() => {
                          deleteAlbum(album.id);
                        }}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ul>
        </div>

        <div
          className="modal fade"
          id="AlbumEdit"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTit">
                  Edit Album Information
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
                    <label htmlFor="nameAlbumsE">Tên Album</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editAlbumName}
                      id="nameAlbumsE"
                      placeholder="Album Name"
                      onChange={(event) => {
                        SetEditAlbumName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="namesingerE">Mã nghệ sĩ</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editNameSinger}
                      id="namesingerE"
                      placeholder="Singer Name"
                      onChange={(event) => {
                        SetEditNameSinger(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="albumEditImage ">Hình ảnh Album</label>
                    <input
                      type="file"
                      required
                      className="form-control"
                      id="albumEditImage"
                      accept="image/jpeg"
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editAlbum(id);
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

export default SettingAlbum;
