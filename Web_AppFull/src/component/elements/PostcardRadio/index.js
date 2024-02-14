import style from "./PostcardRadio.module.css";
import { useNavigate } from "react-router-dom";

function PostcardRadio(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const navigate = useNavigate();

  const outPutData = (ob) => {
    let dataDetail = {
      idData: ob.id,
      typeDate: "playlist",
      nameData: ob.name,
      imageDate: ob.image,
    };

    localStorage.removeItem("dataDetail");
    localStorage.setItem("dataDetail", JSON.stringify(dataDetail));
  };
  return (
    <>
      {props.data.map((postcardRadio, index) => (
        <div
          className={style.boxContent}
          key={index}
          onClick={() => {
            outPutData(postcardRadio);
            navigate("/Album");
          }}
        >
          <div className={style.box}>
            <img
              className={style.imgThumb}
              src={uriImage + postcardRadio.image}
              alt=""
            />
          </div>

          <div className={style.underContent}>
            <h1 className={style.title} title={postcardRadio.name}>
              {postcardRadio.name}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostcardRadio;
