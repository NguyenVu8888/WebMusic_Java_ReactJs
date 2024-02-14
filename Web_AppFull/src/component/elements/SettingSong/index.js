import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingSong() {
  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);

  const [songName, setSongName] = useState("");
  const [singerName, setSingerName] = useState("");
  const [songGerne, setSongGerne] = useState("");
  const [songDuration, setSongDuration] = useState("");
  const fileImage = document.querySelector("#imageSong");
  const fileSource = document.querySelector("#sourceSong");

  const [id, setID] = useState("");
  const [editSongName, setEditSongName] = useState("");
  const [editSingerName, setEditSingerName] = useState("");
  const [editSongImage, setEditSongImage] = useState("");
  const [editSongSource, setEditSongSource] = useState("");
  const [editSongGerne, setEditSongGerne] = useState("");
  const [editSongDuration, setEditSongDuration] = useState("");
  const [editSongAlbum, setEditSongAlbum] = useState("");
  const fileEditImage = document.querySelector("#imageEditSong");
  const fileEditSource = document.querySelector("#sourceEditSong");

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = () => {
    fetch("http://localhost:8081/api/song")
      .then((res) => res.json())
      .then((songs) => {
        setSongs(songs.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  };

  const addSong = () => {
    var formdata = new FormData();
    formdata.append("name", songName);
    formdata.append("image", fileImage.files[0], fileImage.files[0].name);
    formdata.append("nameArtist", singerName);
    formdata.append("gerne", songGerne);
    formdata.append("duration", songDuration);
    formdata.append("source", fileSource.files[0], fileSource.files[0].name);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add song success");
        getSongs();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const handleSelected = (index) => {
    const elementSelected = songs[index];
    setEditSongName(elementSelected.name);
    setEditSingerName(elementSelected.artist);
    setEditSongImage(elementSelected.image);
    setEditSongSource(elementSelected.path);
    setEditSongDuration(elementSelected.duration);
    setEditSongGerne(elementSelected.gerne);
    setID(elementSelected.id);
  };

  const editSong = (id) => {
    var formdata = new FormData();
    formdata.append("name", editSongName);
    formdata.append(
      "image",
      fileEditImage.files[0],
      fileEditImage.files[0].name
    );
    formdata.append("nameArtist", editSingerName);
    formdata.append("gerne", editSongGerne);
    formdata.append("duration", editSongDuration);
    formdata.append(
      "source",
      fileEditSource.files[0],
      fileEditSource.files[0].name
    );
    formdata.append("nameAlbum", editSongAlbum);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/song/${id}`, requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result + "ttttt");
        alert("edit song success");
        getSongs();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const deleteSong = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/song/${id}`, requestOptions)
      .then((response) => {
        response.text();
      })
      .then((result) => {
        console.log(result);
        alert("delete song success");
        console.log("delete success");
        getSongs();
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
                  <th scope="col">Tên bài hát</th>
                  <th scope="col">Ca sĩ</th>
                  <th scope="col">Ảnh bìa</th>
                  <th scope="col">Thể loại</th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Nguồn</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#addSong"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>

              <div
                className="modal fade"
                id="addSong"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="addSongTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Thêm Bài Hát</h5>
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
                      <form
                        method="post"
                        action=""
                        encType="multipart/form-data"
                      >
                        <div className="form-group">
                          <label htmlFor="nameSong">Tên bài hát</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="nameSong"
                            placeholder="Tên bài hát"
                            onChange={(event) => {
                              setSongName(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="singer">Ca sĩ</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="singer"
                            placeholder="Ca sĩ"
                            onChange={(event) => {
                              setSingerName(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="imageSong">Hình ảnh bài hát</label>
                          <input
                            type="file"
                            required
                            className="form-control"
                            id="imageSong"
                            accept="image/jpeg"
                            placeholder="đường dẫn hình ảnh"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="sourceSong">Nguồn bài hát</label>
                          <input
                            type="file"
                            required
                            accept="audio/mp3"
                            className="form-control"
                            id="sourceSong"
                            placeholder="đường dẫn nguon"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="gerne">Thể loại</label>
                          <textarea
                            className="form-control"
                            id="gerne"
                            onChange={(event) => {
                              setSongGerne(event.target.value);
                            }}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="durationx">Thời gian</label>
                          <input
                            type="number"
                            required
                            className="form-control"
                            id="durationx"
                            placeholder="Thoi gian"
                            onChange={(event) => {
                              setSongDuration(event.target.value);
                            }}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addSong}
                        >
                          Thêm
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {songs.map((song, index) => (
                  <tr key={index}>
                    <td>{song.name}</td>
                    <td>{song.artist}</td>
                    <td>
                      <image src="http://localhost:8081/files/image/${song.image}"></image>
                      {song.image}
                    </td>
                    <td>{song.gerne}</td>
                    <td>{song.duration}</td>
                    <td>{song.path}</td>
                    <td>
                      <button
                        className="item_crud"
                        type="button"
                        data-toggle="modal"
                        data-target="#editSong"
                        onClick={() => {
                          handleSelected(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="item_crud"
                        onClick={() => {
                          deleteSong(song.id);
                          console.log("xxxxxx");
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
          id="editSong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Song</h5>
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
                    <label>Tên bài hát</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={editSongName}
                      onChange={(event) => {
                        setEditSongName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ca sĩ</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={editSingerName}
                      onChange={(event) => {
                        setEditSingerName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Hình ảnh bài hát</label>
                    <input
                      type="file"
                      required
                      id="imageEditSong"
                      className="form-control"
                      accept="image/jpeg"
                      placeholder="đường dẫn hình ảnh"
                      defaultValue={editSongImage}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nguồn bài hát</label>
                    <input
                      type="file"
                      required
                      id="sourceEditSong"
                      accept="audio/mp3"
                      className="form-control"
                      placeholder="nguon bai hat"
                      defaultValue={editSongSource}
                    />
                  </div>
                  <div className="form-group">
                    <label>the loai</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="the loai"
                      defaultValue={editSongGerne}
                      onChange={(event) => {
                        setEditSongGerne(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Thời gian</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="thoi gian"
                      defaultValue={editSongDuration}
                      onChange={(event) => {
                        setEditSongDuration(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Album</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Album"
                      onChange={(event) => {
                        setEditSongAlbum(event.target.value);
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editSong(id);
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

export default SettingSong;
