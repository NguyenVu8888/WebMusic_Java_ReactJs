import { useId, useState } from "react";
import style from "./ListRank.module.css";
import { useStore, actions } from "../../../store";

function ListRank(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const [state, dispath] = useStore();
  const [reset, setRest] = useState("");
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

  const playmusic = (list, index) => {
    dispath(actions.setSongPlay(list));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(list.songid);

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
          setRest(Math.random());
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
            <div className={style.num}>Like: {list.count}</div>

            <div className={style.space}> - </div>

            <div
              className={style.wrap}
              id={list.songid}
              onClick={() => {
                playmusic(list, index);
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

            <div className={style.icon}>
              <a
                onClick={() => {
                  console.log(localStorage.getItem("private"));
                }}
              >
                <i className="fas fa-microphone"></i>
              </a>
            </div>

            <div className={style.icon}>
              <a
                onClick={() => {
                  addLove(list.songid);
                }}
              >
                <i className="far fa-heart"></i>
              </a>
            </div>

            <div className={style.end}>
              {/* <div className={style.time}> {list.createAt}</div> */}
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
          </div>
        </div>
      ))}
    </>
  );
}

export default ListRank;
