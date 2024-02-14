import { useState, useEffect } from "react";

import style from "./CardTopicHot.module.css";
import img1 from "../../../assets/img/mv-iu.jpg";
import img2 from "../../../assets/img/mv-iu2.jpg";
import img3 from "../../../assets/img/mv-iu3.jpg";

function CardTopicHot(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  return (
    <>
      {props.data.map((cardTopicHot, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img
                  className={style.imgThumb}
                  src={uriImage + cardTopicHot.image}
                  alt=""
                />
                <div className={style.content}>
                  <div className={style.ln} title={cardTopicHot.name}>
                    {cardTopicHot.name}
                  </div>
                  <div className={style.imgTag}>
                    <img
                      className={style.img}
                      // src={uriImage + cardTopicHot.image}
                      src={img1}
                      alt=""
                    />
                    <img
                      className={style.img}
                      // src={uriImage + cardTopicHot.image}
                      src={img2}
                      alt=""
                    />
                    <img
                      className={style.img}
                      // src={uriImage + cardTopicHot.image}
                      src={img3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardTopicHot;
