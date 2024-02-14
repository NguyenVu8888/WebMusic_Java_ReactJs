import { useState } from "react";
import style from "./List2.module.css";
import { useStore, actions } from "../../../store";

function List2(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const [state, dispath] = useStore();
  const [reset, setRest] = useState("");
  let userid = localStorage.getItem("private");

  const deleteHistory = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/like/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("xoá thành công");
        setRest(Math.random());
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const playmusic = (list, index) => {
    dispath(actions.setSongPlay(list));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(list.likeid);

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
        setRest(Math.random());
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };
  return (
    <>
      {props.data.map((list, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.contentBody}>
            <div
              className={style.wrap}
              id={list.likeid}
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
            </div>

            <div className={style.icon}>
              <a
                onClick={() => {
                  deleteHistory(list.likeid);
                }}
              >
                <i className="fa-solid fa-trash-can"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default List2;
