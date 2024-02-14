import style from "./Postcard.module.css";
import { useStore, actions } from "../../../store";

function Postcard(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const [state, dispath] = useStore();
  let userid = localStorage.getItem("private");

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

  const playmusic = (postcard, index) => {
    dispath(actions.setSongPlay(postcard));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(postcard.id);

    x.setAttribute("data", postcard.path);
    // x.setAttribute("className", "active");

    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
    localStorage.removeItem("singer");

    localStorage.setItem("thumb", uriImage + postcard.image);
    localStorage.setItem("title", postcard.name);
    localStorage.setItem("singer", postcard.artist);

    localStorage.removeItem("currentMusic");
    localStorage.removeItem("currentMusic1");
    localStorage.setItem("currentMusic", index);

    var y = uriAudio + x.getAttribute("data");

    musicPlayer.src = y;
    musicPlayer.play();
  };

  return (
    <>
      {props.data.map((postcard, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img
                  className={style.imgThumb}
                  src={uriImage + postcard.image}
                  alt=""
                />
                <div className={style.content}>
                  <a
                    id={postcard.id}
                    onClick={() => {
                      playmusic(postcard, index);
                      addHistory(postcard.id);
                    }}
                  >
                    <i className="far fa-circle-play fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={style.disThumb}>
            <div className={style.sideContent}>
              <h4>{postcard.name}</h4>

              <h1>
                <span>Thể loại :</span>
                <span>
                  <p className={style.date}>{postcard.gerne}</p>
                </span>
              </h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Postcard;
