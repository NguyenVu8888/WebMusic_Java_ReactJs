import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore, actions } from "../../../store";

import "./DetailAlbum.css";
import ThumbCircle from "../ThumbCircle";
import ThumbMain from "../ThumbMain";
import ui from "../../../assets/img/bg-ani.jpg";

function DetailAlbum() {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const [state, dispath] = useStore();
  const navigate = useNavigate();
  // const [albums, setAlbums] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8081/api/album")
  //     .then((res) => res.json())
  //     .then((albums) => {
  //       setAlbums(albums.listResult);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       navigate("/Notfound");
  //     });
  // }, []);

  // const displayAlbum = albums[Math.floor(Math.random() * albums.length)];

  const [thumbcircles, setthumbcircles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/artist")
      .then((res) => res.json())
      .then((thumbcircles) => {
        setthumbcircles(thumbcircles.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);
  const dataThumbCircle = thumbcircles.slice(6, 11);
  //const dataThumbCircle = thumbcircles.slice(0, 6);

  const [songAlbum, setSongAlbum] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/song")
      .then((res) => res.json())
      .then((songAlbum) => {
        setSongAlbum(songAlbum.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const displayAlbumImage =
    songAlbum[Math.floor(Math.random() * songAlbum.length)];

  const [thumbmains, setThumbmains] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/song")
      .then((res) => res.json())
      .then((thumbmains) => {
        setThumbmains(thumbmains.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const dataThummain = thumbmains.slice(0, 4);

  const dataGet = JSON.parse(localStorage.getItem("dataDetail"));
  const [datasend, setDateSend] = useState("");

  useEffect(() => {
    let type = dataGet.typeDate;
    if (type == "album") {
      var formdata = new FormData();
      formdata.append("id", dataGet.idData);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      fetch("http://localhost:8081/api/song/search/album", requestOptions)
        .then((res) => res.json())
        .then((result) => {
          setDateSend(result);
        })
        .catch((error) => {
          console.log("error", error);
          navigate("/Notfound");
        });
    } else if (type == "gerne") {
      var formdata = new FormData();
      formdata.append("gerne", dataGet.ger);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:8081/api/song/search/gerne", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => {
          console.log("error", error);
          navigate("/Notfound");
        });
    } else if (type == "artist") {
      var formdata = new FormData();
      formdata.append("nameArtist", dataGet.nameData);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:8081/api/song/search/artist", requestOptions)
        .then((res) => res.json())
        .then((result) => {
          setDateSend(result);
        })
        .catch((error) => {
          console.log("error", error);
          navigate("/Notfound");
        });
    } else {
      fetch("http://localhost:8081/api/song")
        .then((res) => res.json())
        .then((result) => {
          setDateSend(result.listResult);
        })
        .catch((error) => {
          console.log("error", error);
          navigate("/Notfound");
        });
    }
  }, []);

  let userid = localStorage.getItem("private");

  const addLove = (id) => {
    if (userid != null) {
      var formdata = new FormData();
      formdata.append("userid", userid);
      formdata.append("songid", id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:8081/api/like", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
          alert("Server error");
        });
    } else {
      alert("you still not login");
    }
  };

  const playmusic = (category, index) => {
    dispath(actions.setSongPlay(category));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(category.id);

    x.setAttribute("data", category.path);
    // x.setAttribute("className", "active");

    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
    localStorage.removeItem("singer");

    localStorage.setItem("thumb", uriImage + category.image);
    localStorage.setItem("title", category.name);
    localStorage.setItem("singer", category.artist);

    localStorage.removeItem("currentMusic");
    localStorage.removeItem("currentMusic1");
    localStorage.setItem("currentMusic", index);

    var y = uriAudio + x.getAttribute("data");

    musicPlayer.src = y;
    musicPlayer.play();
  };

  const addHistory = (songID) => {
    if (userid != null) {
      var formdata = new FormData();
      formdata.append("userid", userid);
      formdata.append("songid", songID);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:8081/api/history", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
          alert("Server error");
        });
    } else {
    }
  };

  const download = (path) => {
    let uri = `http://localhost:8081/files/audio/download/${path}`;
    alert("Link downdload :   " + uri);
  };

  const outPutDataForMusicplayer = (album) => {
    if (dataGet.typeDate == "album") {
      let contentPlaymusic = {
        typeDATA: "album",
        typeRender: dataGet.idData,
      };
      localStorage.removeItem("contentPlaymusic");
      localStorage.setItem(
        "contentPlaymusic",
        JSON.stringify(contentPlaymusic)
      );
    } else if (dataGet.typeDate == "gerne") {
      let contentPlaymusic = {
        typeDATA: "gerne",
        typeRender: album.gerne,
      };
      localStorage.removeItem("contentPlaymusic");
      localStorage.setItem(
        "contentPlaymusic",
        JSON.stringify(contentPlaymusic)
      );
    } else if (dataGet.typeDate == "artist") {
      let contentPlaymusic = {
        typeDATA: "artist",
        typeRender: album.artist,
      };
      localStorage.removeItem("contentPlaymusic");
      localStorage.setItem(
        "contentPlaymusic",
        JSON.stringify(contentPlaymusic)
      );
    } else {
      let contentPlaymusic = {
        typeDATA: "all",
      };
      localStorage.removeItem("contentPlaymusic");
      localStorage.setItem(
        "contentPlaymusic",
        JSON.stringify(contentPlaymusic)
      );
    }
  };

  return (
    <>
      <div className="right-menu pagebody">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
            <div className="null-left"></div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 ">
            <div className="main-menu mb-3 mt-2">
              <div className="main-menu-all">
                {/*  */}

                <div class="container-fluid pt-3 ">
                  <div class="row">
                    <div class="col-xl-4 leftcustom">
                      <img
                        class="imgThumb"
                        src={dataGet ? uriImage + dataGet.imageDate : ui}
                      />
                      <div class="contentCustom">
                        <div class="title">
                          {dataGet ? dataGet.nameData : "xxx"}
                        </div>
                        <div>
                          {dataGet.release
                            ? "Xuất bản :" + Date(dataGet.release)
                            : "00/00/0000"}
                        </div>
                        <div>
                          <span>
                            {/* <a href="#">
                              {displayAlbum
                                ? displayAlbum.listSongs[0]
                                : "???????"}
                            </a> */}
                          </span>
                          <span>
                            <a href="#">Iron,</a>
                          </span>
                          <span>
                            <a href="#">diamon,</a>
                          </span>
                        </div>
                        {/* <div>
                          {displayAlbum ? displayAlbum.singer : "Singer name"}
                        </div>
                        <div>
                          {displayAlbumImage ? displayAlbumImage.listen : "??"}k
                          Người yêu thích
                        </div> */}
                        <div
                          class="btn"
                          onclick={() => {
                            alert("day la buttom");
                          }}
                        >
                          <span class="insideBtn">
                            <i class="fa-solid fa-play"></i>
                          </span>
                          <span>Tiếp tục phát {dataGet.nameDate}</span>
                        </div>
                        <div class="under">
                          <div class="underbtn">
                            <a href="">
                              <i className="far fa-heart"></i>
                            </a>
                          </div>
                          <div class="underbtn">
                            <a href="">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-8 rightcustom ">
                      <div className="titlete">
                        Lời tựa: cảm nhận sự bình yên của âm nhạc
                      </div>
                      <div className="category-all-mysong ">
                        <ul className="ulAlbum">
                          <table class="customtable" data-spy="scroll">
                            <thead>
                              <tr>
                                <th>x</th>
                                <th class="roww1">Bài hát</th>
                                <th class="roww2">Artist</th>
                                <th class="roww3">Thời gian</th>
                              </tr>
                            </thead>
                            {datasend ? (
                              <tbody>
                                {/*  */}
                                {datasend.map((category, index) => (
                                  <tr
                                    class="elementtable"
                                    key={index}
                                    id={category.id}
                                    onClick={() => {
                                      playmusic(category, index);
                                      addHistory(category.id);
                                      outPutDataForMusicplayer(category);
                                    }}
                                  >
                                    <td>
                                      <input type="checkbox" />
                                    </td>
                                    <td class="roww1">{category.name}</td>
                                    <td class="roww2">{category.artist}</td>

                                    <td class="roww3">
                                      <div class="visiblecustom">
                                        Time: {category.duration}s
                                      </div>
                                      <div class="hiden">
                                        <div className="under1">
                                          <div
                                            class="underbtn1"
                                            onclick={() => {
                                              addLove(category.id);
                                            }}
                                          >
                                            <a>
                                              <i className="far fa-heart"></i>
                                            </a>
                                          </div>
                                          <div
                                            class="underbtn1"
                                            onclick={() => {
                                              download(category.path);
                                            }}
                                          >
                                            <a>
                                              <i className="fas fa-ellipsis-h"></i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                ))}

                                {/*  */}
                                <tr>
                                  <td></td>
                                  <div>
                                    Songs: {datasend.length}
                                    {/* <span className="dot">.</span> TimeTotal: */}
                                  </div>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            ) : (
                              <tbody></tbody>
                            )}
                          </table>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="section">
                    <div className="head">Nghệ sỹ tham gia</div>
                    <div className="content">
                      <div className="radio">
                        <ThumbCircle data={dataThumbCircle} />
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div className="head">Có thể bạn quan tâm</div>
                    <div className="content">
                      <ThumbMain data={dataThummain} />
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailAlbum;
