import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingMv() {
  const navigate = useNavigate();
  const [mvs, setMvs] = useState([]);

  const [title, setTitle] = useState("");
  const [descreption, setDescreption] = useState("");
  const [duration, setDuration] = useState("");
  const fileImage = document.querySelector("#image");
  const fileSource = document.querySelector("#source");

  const [editTitle, setEditTitle] = useState("");
  const [editDescreption, setEditDescreption] = useState("");
  const [editDuration, setEditDuration] = useState("");
  const fileEditImage = document.querySelector("#imageEdit");
  const fileEditSource = document.querySelector("#sourceEdit");
  const [id, setID] = useState("");

  useEffect(() => {
    getMV();
  }, []);

  const getMV = () => {
    fetch("http://localhost:8081/api/mv")
      .then((res) => res.json())
      .then((mvs) => {
        setMvs(mvs.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  };

  const addMV = () => {
    var formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", descreption);
    formdata.append("duration", duration);
    formdata.append("thumb", fileImage.files[0], fileImage.files[0].name);
    formdata.append("source", fileSource.files[0], fileSource.files[0].name);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/mv", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add music video success");
        getMV();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const handleSelected = (index) => {
    const elementSelected = mvs[index];
    setEditTitle(elementSelected.title);
    setEditDescreption(elementSelected.description);
    setEditDuration(elementSelected.duration);
    setID(elementSelected.id);
  };

  const editMV = (id) => {
    var formdata = new FormData();
    formdata.append("title", editTitle);
    formdata.append("description", editDescreption);
    formdata.append("duration", editDuration);
    formdata.append(
      "thumb",
      fileEditImage.files[0],
      fileEditImage.files[0].name
    );
    formdata.append(
      "source",
      fileEditSource.files[0],
      fileEditSource.files[0].name
    );

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/mv/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edit mv success");
        getMV();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const deleteMV = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/mv/${id}`, requestOptions)
      .then((response) => {
        response.text();
      })
      .then((result) => {
        console.log(result);
        alert("delete mv success");
        getMV();
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
                  <th scope="col">Tên Mv</th>
                  <th scope="col">Mô tả</th>
                  <th scope="col">Thời lượng</th>
                  <th scope="col">Ảnh nền</th>
                  <th scope="col">Video</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#mvModel"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>
              <div
                className="modal fade"
                id="mvModel"
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
                        Thêm Music video
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
                          <label htmlFor="nameMV">Tên music video</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="nameMV"
                            placeholder="Tên mv"
                            onChange={(event) => {
                              setTitle(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="des">Mô tả</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="des"
                            placeholder="Mo ta"
                            onChange={(event) => {
                              setDescreption(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="duration">Thời lượng</label>
                          <input
                            type="number"
                            required
                            className="form-control"
                            id="duration"
                            placeholder="Thoi luong"
                            onChange={(event) => {
                              setDuration(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="image">Ảnh nền</label>
                          <input
                            type="file"
                            required
                            className="form-control"
                            id="image"
                            accept="image/jpeg"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="source">Video</label>
                          <input
                            type="file"
                            required
                            className="form-control"
                            id="source"
                            accept="video/mp4"
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addMV}
                        >
                          Thêm
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {mvs.map((mv, index) => (
                  <tr key={index}>
                    <td>{mv.title}</td>
                    <td>{mv.description}</td>
                    <td>{mv.duration}</td>
                    <td>{mv.thumb}</td>
                    <td>{mv.source}</td>
                    <td>
                      <button
                        className="item_crud"
                        type="button"
                        data-toggle="modal"
                        data-target="#editmvModel"
                        onClick={() => {
                          handleSelected(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="item_crud"
                        onClick={() => {
                          deleteMV(mv.id);
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
          id="editmvModel"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Edit Music video
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
                    <label htmlFor="nameMVedit">Tên music video</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="nameMVedit"
                      placeholder="Tên mv"
                      value={editTitle}
                      onChange={(event) => {
                        setEditTitle(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dess">Mô tả</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="dess"
                      placeholder="Tác giả"
                      value={editDescreption}
                      onChange={(event) => {
                        setEditDescreption(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageEdit">Ảnh nền</label>
                    <input
                      type="file"
                      required
                      className="form-control"
                      id="imageEdit"
                      accept="image/jpeg"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sourceEdit">Video</label>
                    <input
                      type="file"
                      required
                      className="form-control"
                      id="sourceEdit"
                      accept="video/mp4"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Thời lượng</label>
                    <input
                      type="number"
                      required
                      className="form-control"
                      id="time"
                      placeholder="Thời lương"
                      value={editDuration}
                      onChange={(event) => {
                        setEditDuration(event.target.value);
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editMV(id);
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

export default SettingMv;
