import { useState } from "react";
import style from "./ThumbCircle.module.css";
import { useNavigate } from "react-router-dom";

function ThumbCircle(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const navigate = useNavigate();
  const [reset, setReset] = useState("");

  const outPutData = (ob) => {
    let dataDetail = {
      idData: ob.id,
      typeDate: "artist",
      nameData: ob.name,
      imageDate: ob.image,
    };

    localStorage.removeItem("dataDetail");
    localStorage.setItem("dataDetail", JSON.stringify(dataDetail));
    setReset(Math.random);
  };

  return (
    <>
      {props.data.map((thumbcircle, index) => (
        <div
          className={style.wrapBox}
          key={index}
          onClick={() => {
            outPutData(thumbcircle);
            navigate("/Album");
          }}
        >
          <div className={style.box}>
            <img
              className={style.imgBig}
              src={uriImage + thumbcircle.image}
            ></img>
            <img
              className={style.imgSmall}
              src={uriImage + thumbcircle.image}
            ></img>
          </div>
          <div className={style.box}>
            <h1 className={style.title}>{thumbcircle.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
}

export default ThumbCircle;
