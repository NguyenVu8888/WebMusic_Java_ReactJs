import style from "./ThumbTop.module.css";
import { useNavigate } from "react-router-dom";

function ThumbTop(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const navigate = useNavigate();

  const outPutData = (ob) => {
    let dataDetail = {
      idData: ob.id,
      typeDate: "album",
      nameData: ob.name,
      imageDate: ob.image,
      release: ob.releaseDate,
    };

    localStorage.removeItem("dataDetail");
    localStorage.setItem("dataDetail", JSON.stringify(dataDetail));
  };

  return (
    <>
      {props.data.map((thumbtop, index) => (
        <div
          className={style.boxContent}
          key={index}
          onClick={() => {
            outPutData(thumbtop);
            navigate("/Album");
          }}
        >
          <div className={style.box}>
            <img
              className={style.imgThumb}
              src={uriImage + thumbtop.image}
              alt=""
            />
            <div className={style.content}>
              <a href="" className={style.ln}>
                <i className="far fa-heart "></i>
              </a>
              <a href="" className={style.ln}>
                <i className="far fa-circle-play fa-2xl"></i>
              </a>
              <a href="" className={style.ln}>
                <i className="fas fa-ellipsis-h "></i>
              </a>
            </div>
          </div>

          <div className={style.underContent}>
            <div className={style.title}>{thumbtop.name}</div>
            {/* <p className={style.title1}>{thumbtop.description} </p> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default ThumbTop;
