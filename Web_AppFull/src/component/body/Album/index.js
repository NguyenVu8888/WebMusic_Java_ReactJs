import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Album.css";

function Album(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";
  const outPutData = (album) => {
    let dataDetail = {
      idData: album.albumID,
      typeDate: "album",
      nameData: album.name,
      imageDate: album.image,
      release: album.releaseDate,
    };

    localStorage.removeItem("dataDetail");
    localStorage.setItem("dataDetail", JSON.stringify(dataDetail));
  };

  const navigate = useNavigate();
  return (
    <div className="playlist container">
      <div className="content-playlist">
        <a className="ct">ALBUM ĐỀ XUẤT</a>
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
        {props.data.map((album, index) => (
          <div
            key={index}
            className="playlist-item col-xl-3 col-lg-4 col-md-6"
            id={album.albumID}
            onClick={() => {
              outPutData(album);
              navigate("/Album");
            }}
          >
            <img src={uriImage + album.image} alt="" />
            <span>{album.name}</span>
            <p>Release: {Date(album.releaseDate).substring(0, 24)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;
