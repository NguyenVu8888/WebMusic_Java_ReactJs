import style from "./Thumb.module.css";
import { useStore, actions } from "../../../store";

function Thumb(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const [state, dispath] = useStore();
  let userid = localStorage.getItem("private");

  const playmusic = (thumb, index) => {
    dispath(actions.setSongPlay(thumb));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(thumb.id);

    x.setAttribute("data", thumb.path);
    // x.setAttribute("className", "active");

    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
    localStorage.removeItem("singer");

    localStorage.setItem("thumb", uriImage + thumb.image);
    localStorage.setItem("title", thumb.name);
    localStorage.setItem("singer", thumb.artist);

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
      {props.data.map((thumb, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.boxContent}>
            <div className={style.box}>
              <img
                className={style.imgThumb}
                src={uriImage + thumb.image}
                alt=""
              />
              <div className={style.content}>
                <a className={style.ln}>
                  <i
                    className="far fa-play-circle"
                    id={thumb.id}
                    onClick={() => {
                      playmusic(thumb, index);
                      addHistory(thumb.id);
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>

          <div className={style.sideContent}>
            <h4 className={style.textOver} title={thumb.name}>
              {thumb.name}
            </h4>
            <h4 className={style.textOver} title={thumb.artist}>
              <a href="">Nghệ sĩ: {thumb.artist}</a>
            </h4>
            <h1 className={style.textOver}>Duration: {thumb.duration}s</h1>
          </div>

          <div className={style.sideMore}>
            <a
              className={style.sideMoreBtn}
              onClick={() => {
                download(thumb.path);
              }}
            >
              <i className="fas fa-ellipsis-h"></i>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Thumb;
