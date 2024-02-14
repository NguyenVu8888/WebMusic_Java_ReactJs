import style from "./RanksPostcard.module.css";
import { useStore, actions } from "../../../store";

function RanksPostcard(props) {
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

  const playmusic = (rank, index) => {
    dispath(actions.setSongPlay(rank));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(rank.id);

    x.setAttribute("data", rank.path);
    // x.setAttribute("className", "active");

    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
    localStorage.removeItem("singer");

    localStorage.setItem("thumb", uriImage + rank.image);
    localStorage.setItem("title", rank.name);
    localStorage.setItem("singer", rank.artist);

    localStorage.removeItem("currentMusic");
    localStorage.removeItem("currentMusic1");
    localStorage.setItem("currentMusic", index + 7);

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
      {props.data.map((rank, index) => (
        <div
          className={style.wrapBox}
          key={index}
          id={rank.id}
          onClick={() => {
            playmusic(rank, index);
            addHistory(rank.id);
          }}
        >
          <div className={style.disThumb}>
            {/* <div className={style.rank}>{rank.listen}</div> */}
          </div>

          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img
                  className={style.imgThumb}
                  src={uriImage + rank.image}
                  alt=""
                />
                <div className={style.content}>
                  <a className={style.ln}>
                    <i className="far fa-play-circle fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={style.disThumb}>
            <div className={style.sideContent}>
              <h4 className={style.title}>{rank.name}</h4>
              <a href="" className={style.lnk}>
                {rank.gerne}
              </a>
              <div className={style.bot}>
                <span className={style.botDot}>
                  <a
                    className={style.ln}
                    onClick={() => {
                      addLove(rank.id);
                    }}
                  >
                    <i className="far fa-heart "></i>
                  </a>
                  <a
                    onClick={() => {
                      download(rank.path);
                    }}
                  >
                    <i className="fas fa-ellipsis-h "></i>
                  </a>
                </span>
                <div>
                  Duration <span className={style.dot}>.</span>
                  {rank.duration}s
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RanksPostcard;
