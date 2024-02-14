import { useState } from "react";
import style from "./List.module.css";
import { useStore, actions } from "../../../store";

function List(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const [state, dispath] = useStore();
  let userid = localStorage.getItem("private");

  const deleteHistory = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/history/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("xoá thành công");
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };
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

  const playmusicHis = (list, index) => {
    dispath(actions.setSongPlay(list));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(list.historyid);

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

  return (
    <>
      {props.data.map((list, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.contentBody}>
            {list.playdate ? (
              <div className={style.numTwo}>
                {Date(list.playdate).substring(0, 24)}
              </div>
            ) : (
              <div className={style.num}>
                {Date(list.createdDate).substring(0, 15)}
              </div>
            )}

            <div className={style.space}> - </div>

            {list.playdate ? (
              <div
                className={style.wrap}
                id={list.historyid}
                onClick={() => {
                  playmusicHis(list, index);
                  addHistory(list.songid);
                }}
              >
                <div className={style.boxContent}>
                  <div className={style.box}>
                    <img
                      className={style.imgThumb}
                      src={uriImage + list.image}
                      alt=""
                    />
                    <div className={style.content}>
                      <a className={style.ln}>
                        <i className="far fa-play-circle fa-2xl"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={style.sideContentTwo}>
                  <h4 className={style.title}>{list.name}</h4>
                </div>

                <div className={style.descreption}>
                  <a href="" className={style.des}>
                    Duration: {list.duration}s
                  </a>
                </div>
              </div>
            ) : (
              <div
                className={style.wrap}
                id={list.id}
                onClick={() => {
                  playmusic(list, index);
                  addHistory(list.id);
                }}
              >
                <div className={style.boxContent}>
                  <div className={style.box}>
                    <img
                      className={style.imgThumb}
                      src={uriImage + list.image}
                      alt=""
                    />
                    <div className={style.content}>
                      <a className={style.ln}>
                        <i className="far fa-play-circle fa-2xl"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={style.sideContent}>
                  <h4 className={style.title}>{list.name}</h4>
                  <p className="textOver">
                    <a href="" className={style.lnk}>
                      {list.artist}
                    </a>
                  </p>
                </div>

                <div className={style.descreption}>
                  <a href="" className={style.des}>
                    Duration: {list.duration}s
                  </a>
                </div>
              </div>
            )}

            {list.playdate ? (
              <div className={style.icon}></div>
            ) : (
              <div className={style.icon}>
                <a href="">
                  <i className="fas fa-microphone"></i>
                </a>
              </div>
            )}

            {list.playdate ? (
              <div className={style.icon}>
                <a
                  onClick={() => {
                    deleteHistory(list.historyid);
                  }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </a>
              </div>
            ) : (
              <div className={style.icon}>
                <a
                  onClick={() => {
                    addLove(list.id);
                  }}
                >
                  <i className="far fa-heart"></i>
                </a>
              </div>
            )}

            {list.playdate ? (
              <div className={style.icon}></div>
            ) : (
              <div className={style.end}>
                <div className={style.time}> {list.createAt}</div>
                <div className={style.more}>
                  <a
                    onClick={() => {
                      download(list.path);
                    }}
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default List;
