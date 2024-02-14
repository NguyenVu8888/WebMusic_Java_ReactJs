import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingSinger() {
  const navigate = useNavigate();
  const [singers, setSingers] = useState([]);

  const [singerName, setSingerName] = useState("");
  const fileImage = document.querySelector("#imageArtist");
  const [gerne, setGerne] = useState("");

  const [editSingerName, setEditSingerName] = useState("");
  const fileEditImage = document.querySelector("#editImageArtist");
  const [editGerne, setEditGerne] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    getSinger();
  }, []);
  const getSinger = () => {
    fetch("http://localhost:8081/api/artist")
      .then((res) => res.json())
      .then((singers) => {
        setSingers(singers.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  };

  const addSinger = () => {
    var formdata = new FormData();
    formdata.append("name", singerName);
    formdata.append("image", fileImage.files[0], fileImage.files[0].name);
    formdata.append("gerne", gerne);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/artist", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add singer success");
        getSinger();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const handleSelected = (index) => {
    const elementSelected = singers[index];
    setEditSingerName(elementSelected.name);
    setEditGerne(elementSelected.gerne);
    setID(elementSelected.id);
  };

  const editSinger = (id) => {
    var formdata = new FormData();
    formdata.append("name", editSingerName);
    formdata.append(
      "image",
      fileEditImage.files[0],
      fileEditImage.files[0].name
    );
    formdata.append("gerne", editGerne);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/artist/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edit singer success");
        getSinger();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const deleteSinger = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/artist/${id}`, requestOptions)
      .then((response) => {
        response.text();
      })
      .then((result) => {
        console.log(result);
        alert("delete singer success");
        getSinger();
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
                  <th scope="col">Tên ca sĩ</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Thể loại</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#addSinger"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>
              <div
                className="modal fade"
                id="addSinger"
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
                        Thêm Ca Sĩ
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
                          <label htmlFor="nameSinger">Tên ca sĩ</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="nameSinger"
                            placeholder="Tên ca sĩ"
                            onChange={(event) => {
                              setSingerName(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="imageArtist">Hình ảnh</label>
                          <input
                            type="file"
                            required
                            className="form-control"
                            accept="image/jpeg"
                            id="imageArtist"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="gerneSinger">Thể loại</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="gerneSinger"
                            placeholder="the loai"
                            onChange={(event) => {
                              setGerne(event.target.value);
                            }}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addSinger}
                        >
                          Thêm
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {singers.map((singer, index) => (
                  <tr key={index}>
                    <td>{singer.name}</td>
                    <td>{singer.image}</td>
                    <td>{singer.gerne}</td>
                    <td>
                      <button
                        className="item_crud"
                        type="button"
                        data-toggle="modal"
                        data-target="#editSinger"
                        onClick={() => {
                          handleSelected(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="item_crud"
                        onClick={() => {
                          deleteSinger(singer.id);
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
          id="editSinger"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Edit Singer Information
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
                    <label htmlFor="nameSingerEdit">Tên ca sĩ</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="nameSingerEdit"
                      value={editSingerName}
                      placeholder="Tên ca sĩ"
                      onChange={(event) => {
                        setEditSingerName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editImageArtist">Hình ảnh</label>
                    <input
                      type="file"
                      required
                      className="form-control"
                      accept="image/jpeg"
                      id="editImageArtist"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gerne">Thể loại</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="national"
                      value={editGerne}
                      placeholder="the loai"
                      onChange={(event) => {
                        setEditGerne(event.target.value);
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editSinger(id);
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

export default SettingSinger;
