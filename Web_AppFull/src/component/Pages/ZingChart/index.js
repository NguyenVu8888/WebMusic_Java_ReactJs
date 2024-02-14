import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Charts from "../../elements/Charts";
import style from "./ZingChart.module.css";
import chartsss from "../../../assets/img/line_chart.jpg";
import ListRank from "../../elements/ListRank";

function ZingChart() {
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song/rank", requestOptions)
      .then((res) => res.json())
      .then((lists) => {
        setLists(lists);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  return (
    <>
      <div className={style.pagebody}>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
            <div className="null-left"></div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 ">
            <div className="main-menu mb-3 mt-2">
              <div className="main-menu-all">
                {/*  */}

                {/* <div className={style.chart}>
                  <img className={style.image} src={chartsss} />
                </div> */}
                <div className={style.list}>
                  <ListRank data={lists} />
                </div>
                <div className={style.bot}>
                  <a href="" className={style.btn}>
                    Xem tất cả
                  </a>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZingChart;
