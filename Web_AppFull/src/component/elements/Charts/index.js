import { useState, useEffect } from "react";

import style from "./Charts.module.css";
import ThumbCharts from "../ThumbCharts";

function Charts(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";
  const [thumbcharts, setThumbcharts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/song")
      .then((res) => res.json())
      .then((thumbcharts) => {
        setThumbcharts(thumbcharts.listResult);
      });
  }, []);

  const dataThumbchart =
    thumbcharts[Math.floor(Math.random() * thumbcharts.length)];

  return (
    <>
      {props.data.map((chart, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.head}>
            <div className={style.textHead} title={chart.title}>
              {chart.title}
            </div>
            <i className="fa fa-play-circle fa-3x"></i>
          </div>

          <div className={style.body}>
            <div className={style.contentBody}>
              <div className={style.num}>{chart.duration}</div>
              <div className={style.space}> - </div>
              <div className={style.mid}>
                <ThumbCharts data={dataThumbchart} />
              </div>
              <div className={style.icon}>
                <i className="fas fa-microphone"></i>
              </div>
              <div className={style.end}>
                <div className={style.more}>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>

            <div className={style.contentBody}>
              <div className={style.num}>{chart.duration}</div>
              <div className={style.space}> - </div>
              <div className={style.mid}>
                <ThumbCharts data={dataThumbchart} />
              </div>
              <div className={style.icon}>
                <i className="fas fa-microphone"></i>
              </div>
              <div className={style.end}>
                <div className={style.more}>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>

            <div className={style.contentBody}>
              <div className={style.num}>{chart.duration}</div>
              <div className={style.space}> - </div>
              <div className={style.mid}>
                <ThumbCharts data={dataThumbchart} />
              </div>
              <div className={style.icon}>
                <i className="fas fa-microphone"></i>
              </div>
              <div className={style.end}>
                <div className={style.more}>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>

            <div className={style.contentBody}>
              <div className={style.num}>{chart.duration}</div>
              <div className={style.space}> - </div>
              <div className={style.mid}>
                <ThumbCharts data={dataThumbchart} />
              </div>
              <div className={style.icon}>
                <i className="fas fa-microphone"></i>
              </div>
              <div className={style.end}>
                <div className={style.more}>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>

            <div className={style.contentBody}>
              <div className={style.num}>{chart.duration}</div>
              <div className={style.space}> - </div>
              <div className={style.mid}>
                <div className={style.mid}>
                  <ThumbCharts data={dataThumbchart} />
                </div>
              </div>

              <div className={style.icon}>
                <i className="fas fa-microphone"></i>
              </div>
              <div className={style.end}>
                <div className={style.more}>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
          </div>
          <div className={style.bot}>
            <a className={style.btn}> Xem tất cả</a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Charts;
