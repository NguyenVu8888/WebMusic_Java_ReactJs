import style from "./Epsidole.module.css";

function Epsidole(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";
  return (
    <>
      {props.data.map((epsidole, index) => (
        <div
          className={style.wrapBox}
          key={index}
          id={epsidole.id}
          onClick={() => {
            let musicPlayer = document.getElementById("musicPlayer");
            var x = document.getElementById(epsidole.id);

            x.setAttribute("data", "1687095592326.mp3");
            // x.setAttribute("className", "active");
            localStorage.setItem("currentMusic", index + 2);

            var y = uriAudio + x.getAttribute("data");

            musicPlayer.src = y;
            musicPlayer.play();
          }}
        >
          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img
                  className={style.imgThumb}
                  src={uriImage + epsidole.image}
                  alt=""
                />
                <div className={style.content}>
                  <a href="" className={style.ln}>
                    <i className="far fa-play-circle fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={style.disThumb}>
            <div className={style.sideContent}>
              <h4 className={style.title}>{epsidole.name}</h4>
              <a href="" className={style.lnk}>
                {epsidole.gerne}
              </a>
              <div className={style.bot}>
                <div>
                  <span className={style.dot}>.</span>
                  <span className={style.botDot}>
                    <a href="" className={style.ln}>
                      <i className="fas fa-bookmark"></i>
                    </a>
                    <a href="">
                      <i className="fas fa-ellipsis-h "></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Epsidole;
