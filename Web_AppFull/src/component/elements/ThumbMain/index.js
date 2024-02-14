import style from "./ThumbMain.module.css";
import { actions, useStore } from "../../../store";

function ThumbMain(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const [state, dispath] = useStore();

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

  const playmusic = (thumbmain, index) => {
    dispath(actions.setSongPlay(thumbmain));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(thumbmain.id);

    x.setAttribute("data", thumbmain.path);
    // x.setAttribute("className", "active");

    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
    localStorage.removeItem("singer");

    localStorage.setItem("thumb", uriImage + thumbmain.image);
    localStorage.setItem("title", thumbmain.name);
    localStorage.setItem("singer", thumbmain.artist);

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
      {props.data.map((thumbmain, index) => (
        <div
          className={style.boxContent}
          key={index}
          id={thumbmain.id}
          onClick={() => {
            playmusic(thumbmain, index);
            addHistory(thumbmain.id);
          }}
        >
          <div className={style.box}>
            <img
              className={style.imgThumb}
              src={uriImage + thumbmain.image}
              alt=""
            />
            <div className={style.content}>
              <a
                className={style.ln}
                onClick={() => {
                  addLove(thumbmain.id);
                }}
              >
                <i className="far fa-heart "></i>
              </a>
              <a className={style.ln}>
                <i className="far fa-circle-play fa-2xl"></i>
              </a>
              <a
                className={style.ln}
                onClick={() => {
                  download(thumbmain.path);
                }}
              >
                <i className="fas fa-ellipsis-h "></i>
              </a>
            </div>
          </div>

          <div className={style.underContent}>
            <p>{thumbmain.name} </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ThumbMain;
