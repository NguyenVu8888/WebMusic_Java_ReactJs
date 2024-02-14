import { useState, useEffect } from "react";

import style from "./ThumbCharts.module.css";

function ThumbCharts(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";
  return (
    <>
      <div
        className={style.wrapBox}
        id={props.data.name}
        onClick={() => {
          let musicPlayer = document.getElementById("musicPlayer");
          var x = document.getElementById(props.data.name);

          x.setAttribute("data", props.data.path);
          // x.setAttribute("className", "active");

          localStorage.removeItem("thumb");
          localStorage.removeItem("title");
          localStorage.removeItem("singer");

          localStorage.setItem("thumb", uriImage + props.data.image);
          localStorage.setItem("title", props.data.name);
          localStorage.setItem("singer", props.data.artist);

          localStorage.removeItem("currentMusic");
          localStorage.removeItem("currentMusic1");
          localStorage.setItem("currentMusic1", 0);

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
                src={uriImage + props.data.image}
                alt=""
              />
              <div className={style.content}>
                <a className={style.ln}>
                  <i className="far fa-play-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={style.disThumb}>
          <div className={style.sideContent}>
            <h4>{props.data.name}</h4>
            <a href="">{props.data.artist}</a>
            <h1>Thể loại: {props.data.gerne}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThumbCharts;
