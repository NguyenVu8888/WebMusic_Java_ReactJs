import style from "./CardTopic.module.css";

function CardTopic(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";
  return (
    <>
      {props.data.map((CardTopic, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.boxContent}>
            <div className={style.box}>
              <img
                className={style.imgThumb}
                src={uriImage + CardTopic.image}
                alt=""
              />
              <div className={style.content}>
                <div className={style.ln}>{CardTopic.name}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardTopic;
