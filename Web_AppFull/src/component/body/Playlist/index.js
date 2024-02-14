import { useNavigate } from "react-router-dom";
import { useStore, actions } from "../../../store";

import "./Playlist.css";

function Playlist(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  let userid = localStorage.getItem("private");
  const [state, dispath] = useStore();

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
  return (
    <div className="playlist container">
      <div className="content-playlist">
        <a className="ct">Nhạc đề xuất</a>
        <div className="contr-np">
          <a href="">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a href="">
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="playlist-items row">
        {props.data.map((playlist, index) => (
          <div
            className="playlist-item playlist-item1  col-xl-2 col-lg-3 col-md-3"
            key={index}
            id={playlist.id}
            onClick={() => {
              playmusic(playlist);
              addHistory(playlist.id);
            }}
          >
            <img src={uriImage + playlist.image} alt="" />
            <span>{playlist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
