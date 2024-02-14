import style from "./Chanelhot.module.css";

function Chanelhot(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";
  return (
    <>
      {props.data.map((chanel, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img
                  className={style.imgThumb}
                  src={uriImage + chanel.thumb}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={style.disThumb}>
            <div className={style.sideContent}>
              <div> {chanel.title} </div>
              <h4 className={style.title}>{chanel.duration}s</h4>
              <div className={style.descreption}>{chanel.description}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Chanelhot;
