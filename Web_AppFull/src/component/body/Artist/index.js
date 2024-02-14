import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Artist.css";

function Artist(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const outPutData = (artis) => {
    let dataDetail = {
      idData: artis.id,
      typeDate: "artist",
      nameData: artis.name,
      imageDate: artis.image,
    };

    localStorage.removeItem("dataDetail");
    localStorage.setItem("dataDetail", JSON.stringify(dataDetail));
  };

  const navigate = useNavigate();
  return (
    <div className="playlist container">
      <div className="content-playlist">
        <a className="ct">NGHỆ SĨ</a>
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
        {props.data.map((artis, index) => (
          <div
            className="playlist-item cs col-xl-3 col-lg-4 col-md-6"
            key={index}
            onClick={() => {
              outPutData(artis);
              navigate("/Album");
            }}
          >
            <img className="cd" src={uriImage + artis.image} alt="" />
            <span>{artis.name}</span>
            <p className="midCustom">{artis.gerne}</p>

            <a href="" className="checkbtn">
              <i className="fas fa-check"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artist;
