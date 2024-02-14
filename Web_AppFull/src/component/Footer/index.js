import { useState, useRef, useEffect } from "react";
import { useStore, actions } from "../../store";

import "./Footer.css";
import albumImg from "../../assets/img/album-iu.jpeg";

function Footer() {
  let uriAudio = "http://localhost:8081/files/audio/";
  let uriImage = "http://localhost:8081/files/image/";
  let userid = localStorage.getItem("private");

  const [state, dispath] = useStore();
  console.log(state);

  const [audioStatus, changeAudioStatus] = useState(false);
  const [checkLoop, setCheckLoop] = useState(true);
  const myRef = useRef();

  const [reload, setReload] = useState("");

  const [categoris, setCategoris] = useState([]);

  const dataGet = JSON.parse(localStorage.getItem("dataDetail"));
  const dataContentPlaymusic = JSON.parse(
    localStorage.getItem("contentPlaymusic")
  );

  const getDATAMusicplayer = () => {
    if (dataContentPlaymusic != null) {
      let type = dataContentPlaymusic.typeDATA;
      if (type == "all") {
        fetch("http://localhost:8081/api/song")
          .then((res) => res.json())
          .then((categoris) => {
            setCategoris(categoris.listResult);
            console.log(" data render type all");
          });
      } else if (type == "album") {
        var formdata = new FormData();
        formdata.append("id", dataContentPlaymusic.typeRender);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };
        fetch("http://localhost:8081/api/song/search/album", requestOptions)
          .then((res) => res.json())
          .then((categoris) => {
            setCategoris(categoris);

            console.log(" data render type album");
          });
      } else if (type == "gerne") {
        var formdata = new FormData();
        formdata.append("gerne", dataContentPlaymusic.typeRender);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        fetch("http://localhost:8081/api/song/search/gerne", requestOptions)
          .then((res) => res.json())
          .then((categoris) => {
            setCategoris(categoris);

            console.log(" data render type gerne");
          });
      } else if (type == "artist") {
        var formdata = new FormData();
        formdata.append("nameArtist", dataContentPlaymusic.typeRender);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        fetch("http://localhost:8081/api/song/search/artist", requestOptions)
          .then((res) => res.json())
          .then((categoris) => {
            setCategoris(categoris);

            console.log(" data render type artist");
          });
      }
    } else {
      fetch("http://localhost:8081/api/song")
        .then((res) => res.json())
        .then((categoris) => {
          setCategoris(categoris.listResult);
          console.log(" data render type default");
        });
    }
  };

  useEffect(() => {
    getDATAMusicplayer();
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8081/api/song")
  //     .then((res) => res.json())
  //     .then((categoris) => {
  //       setCategoris(categoris.listResult);
  //     });
  // }, []);

  const startAudio = () => {
    myRef.current.play();

    changeAudioStatus(true);
    getDATAMusicplayer();
  };

  const pauseAudio = () => {
    myRef.current.pause();

    changeAudioStatus(false);
    getDATAMusicplayer();
  };

  const loopEnable = () => {
    myRef.current.loop = true;
    console.log("looped");
    setCheckLoop(false);
    getDATAMusicplayer();
  };

  const loopDisnable = () => {
    myRef.current.loop = false;
    console.log("loop out");
    setCheckLoop(true);
  };

  const display = (ob) => {
    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
    localStorage.removeItem("singer");

    localStorage.setItem(
      "thumb",
      "http://localhost:8081/files/image/" + ob.image
    );
    localStorage.setItem("title", ob.name);
    localStorage.setItem("singer", ob.artist);
  };

  const backAudio = () => {
    getDATAMusicplayer();
    let dk = localStorage.getItem("currentMusic");
    let dk1 = localStorage.getItem("currentMusic1");
    let position = parseInt(localStorage.getItem("currentMusic"));
    let position2 = parseInt(localStorage.getItem("currentMusic1"));

    let src;
    if (dk != null) {
      if (position - 1 < 0) {
        localStorage.removeItem("currentMusic");
        localStorage.setItem("currentMusic", categoris.length - 1);
        src =
          "http://localhost:8081/files/audio/" +
          categoris[categoris.length - 1].path;
        display(categoris[categoris.length - 1]);
      } else {
        localStorage.removeItem("currentMusic");
        localStorage.setItem("currentMusic", position - 1);
        src =
          "http://localhost:8081/files/audio/" + categoris[position - 1].path;
        display(categoris[position - 1]);
      }
    } else if (dk1 != null) {
      if (position2 - 1 < 0) {
        localStorage.removeItem("currentMusic1");
        localStorage.setItem("currentMusic1", categoris.length - 1);
        src =
          "http://localhost:8081/files/audio/" +
          categoris[categoris.length - 1].path;
        display(categoris[categoris.length - 1]);
      } else {
        localStorage.removeItem("currentMusic1");
        localStorage.setItem("currentMusic1", position2 - 1);
        src =
          "http://localhost:8081/files/audio/" + categoris[position2 - 1].path;
        display(categoris[position2 - 1]);
      }
    }

    let musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.src = src;
    myRef.current.play();
    setReload(Math.random());
  };

  const nextAudio = () => {
    getDATAMusicplayer();
    let dk = localStorage.getItem("currentMusic");
    let dk1 = localStorage.getItem("currentMusic1");
    let position = parseInt(localStorage.getItem("currentMusic"));
    let position2 = parseInt(localStorage.getItem("currentMusic1"));

    let src;

    if (dk != null) {
      if (position == categoris.length - 1) {
        localStorage.removeItem("currentMusic");
        localStorage.setItem("currentMusic", 0);
        src = "http://localhost:8081/files/audio/" + categoris[0].path;
        display(categoris[0]);
      } else {
        localStorage.removeItem("currentMusic");
        localStorage.setItem("currentMusic", position + 1);
        src =
          "http://localhost:8081/files/audio/" + categoris[position + 1].path;
        display(categoris[position + 1]);
      }
    } else if (dk1 != null) {
      if (position2 == categoris.length - 1) {
        localStorage.removeItem("currentMusic1");
        localStorage.setItem("currentMusic1", 0);
        src = "http://localhost:8081/files/audio/" + categoris[0].path;
        display(categoris[0]);
      } else {
        localStorage.removeItem("currentMusic1");
        localStorage.setItem("currentMusic1", position2 + 1);
        src =
          "http://localhost:8081/files/audio/" + categoris[position2 + 1].path;
        display(categoris[position2 + 1]);
      }
    }

    let musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.src = src;
    myRef.current.play();
    setReload(Math.random());
  };

  const randomMusic = () => {
    getDATAMusicplayer();
    let x = Math.floor(Math.random() * (categoris.length - 1));
    localStorage.removeItem("currentMusic");
    localStorage.setItem("currentMusic", x);
    let src = "http://localhost:8081/files/audio/" + categoris[x].path;
    let musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.src = src;
    myRef.current.play();
    display(categoris[x]);
    setReload(Math.random());
  };

  const playmusic = (list, index) => {
    dispath(actions.setSongPlay(list));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(list.id);

    x.setAttribute("data", list.path);
    // x.setAttribute("className", "active");

    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
    localStorage.removeItem("singer");

    localStorage.setItem("thumb", uriImage + list.image);
    localStorage.setItem("title", list.name);
    localStorage.setItem("singer", list.artist);

    localStorage.removeItem("currentMusic");
    localStorage.removeItem("currentMusic1");
    localStorage.setItem("currentMusic", index);

    var y = uriAudio + x.getAttribute("data");

    musicPlayer.src = y;
    musicPlayer.play();
  };

  const addHistory = (songID) => {
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
  };

  return (
    <>
      <div className="fake"></div>
      <div className="footer-play-song">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-2">
            <div className="detai-song footer-detai-song">
              {localStorage.getItem("thumb") ? (
                <>
                  <img
                    src={localStorage.getItem("thumb")}
                    className="thumb"
                    alt=""
                  />
                  <div className="detai-name-song">
                    <marquee>{localStorage.getItem("title")}</marquee>
                    <p>{localStorage.getItem("singer")}</p>
                  </div>
                </>
              ) : (
                <>
                  <img src={albumImg} alt="" />
                  <div className="detai-name-song">
                    <marquee>碧碧碧 Name Song</marquee>
                    <p>Singer</p>
                  </div>
                </>
              )}
              <ul className="nav-song nav-song1">
                <li>
                  <a href="">
                    <i className="far fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-ellipsis-h"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4 col-md-8">
            <div className="footer-btn-play-song">
              <ul>
                <li onClick={randomMusic}>
                  <a>
                    <i className="fas fa-random"></i>
                  </a>
                </li>
                <li onClick={backAudio}>
                  <a>
                    <i className="fas fa-step-backward"></i>
                  </a>
                </li>

                {audioStatus ? (
                  <li>
                    <a>
                      <i
                        className="fa-solid fa-pause fa-sm"
                        onClick={pauseAudio}
                      ></i>
                    </a>
                  </li>
                ) : (
                  <li>
                    <a>
                      <i
                        className="far fa-play-circle"
                        onClick={startAudio}
                      ></i>
                    </a>
                  </li>
                )}

                <li onClick={nextAudio}>
                  <a>
                    <i className="fas fa-step-forward"></i>
                  </a>
                </li>

                {checkLoop ? (
                  <li onClick={loopEnable}>
                    <a>
                      <i className="fas fa-sync-alt" o></i>
                    </a>
                  </li>
                ) : (
                  <li onClick={loopDisnable}>
                    <a>
                      <div className="activee">
                        <i className="fas fa-sync-alt"></i>
                      </div>
                    </a>
                  </li>
                )}
              </ul>
              <div>
                <audio
                  ref={myRef}
                  id="musicPlayer"
                  className="musicPlayer"
                  src=""
                  controls
                ></audio>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-1">
            <div className="footer-btn-right">
              <i className="fas fa-video"></i>
              {/* <i className="fas fa-microphone"></i> */}
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#CurentMusic"
              >
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade "
        id="CurentMusic"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addSingerTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modelx">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Danh sách đang phát
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

            <div className="table_set">
              <div className="category-all-mysong">
                <ul style={{ height: "780px" }}>
                  <table className="table">
                    <div className="modal-body">
                      {categoris.map((list, index) => (
                        <li className="wrapBox" key={index}>
                          <div className="contentBody">
                            <div
                              className="wrap"
                              id={list.id}
                              onClick={() => {
                                playmusic(list, index);
                                addHistory(list.id);
                              }}
                            >
                              <div className="sideContent">
                                <h4 className="title">{list.name}</h4>
                                <p className="textOver">
                                  <a href="" className="lnk">
                                    {list.artist}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </div>
                  </table>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
