import { useNavigate } from "react-router-dom";

import "./MVlit.css";

function MVlit(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const outPutData = (ob) => {
    let dataDetailMV = {
      idData: ob.id,
      nameData: ob.title,
      imageDate: uriImage + ob.thumb,
      descreption: ob.description,
      source: uriVdeo + ob.source,
    };

    localStorage.removeItem("dataDetailMV");
    localStorage.setItem("dataDetailMV", JSON.stringify(dataDetailMV));
  };
  const GotoMV = () => {
    navigate("/MVDetail");
  };
  const navigate = useNavigate();
  return (
    <div className="playlist container">
      <div className="content-playlist">
        <a className="ct">MV</a>
        <div className="contr-np">
          <a href="">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a href="">
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="playlist-items row">
        {props.data.map((mv, index) => (
          <div
            className="playlist-item col-xl-4 col-lg-6"
            key={index}
            id={mv.id}
            onClick={() => {
              outPutData(mv);
              GotoMV();
            }}
          >
            <img className="heg" src={uriImage + mv.thumb} alt="" />
            <span>{mv.title}</span>
            <p>{mv.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MVlit;
