import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MV.css";

function MV() {
  const navigate = useNavigate();
  const [mvs, setMvs] = useState([]);

  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";

  useEffect(() => {
    fetch("http://localhost:8081/api/mv")
      .then((res) => res.json())
      .then((mvs) => {
        setMvs(mvs.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const display = mvs[Math.floor(Math.random() * mvs.length)];

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

  const dataGet = JSON.parse(localStorage.getItem("dataDetailMV"));
  const GotoMV = () => {
    navigate("/MVDetail");
  };

  return (
    <>
      <div className="right-menu pagebody">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
            <div className="null-left"></div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 ">
            <div className="main-menu mb-3 mt-2">
              <div className="main-menu-all">
                {/*  */}

                <div className="container">
                  <div className="videoShow">
                    <div className="famousVideo mt-4">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-sm-4">
                          <div className="info_video">
                            <h1 className="NameVideo tx_01">
                              {dataGet
                                ? dataGet.nameData
                                : "Yêu 1 người có ước mơ"}
                            </h1>
                            <span className="author tx_02">
                              {dataGet
                                ? dataGet.descreption
                                : "Thanh Tâm Liên Bích"}
                            </span>
                            <div className="title">
                              Độ dài:
                              {display !== undefined ? display.duration : "150"}
                              s
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-7 col-lg-7 col-sm-7">
                          <div className="Mv_Video ">
                            <video controls className="videosquare" autoPlay>
                              <source
                                src={
                                  dataGet
                                    ? dataGet.source
                                    : "http://localhost:8081/files/video/The Promised Neverland OST - Isabellas Lullaby.mp4"
                                }
                              />
                              {/* <source src={uriVdeo + display.source} /> */}
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="more_video mt-4">
                      <div className="row">
                        {mvs.map((mv) => (
                          <div
                            className="col-xl-4 mt-2 cardd"
                            onClick={() => {
                              outPutData(mv);
                              GotoMV();
                            }}
                          >
                            <div className=" card_mv_customer">
                              <img
                                className="card card-img-top"
                                src={uriImage + mv.thumb}
                                alt="Card cap"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb0">{mv.title}</h5>
                                <p className="card-text mb0">
                                  {mv.description}
                                </p>
                                <div className="more_info">
                                  <span className="card-text">
                                    Duration: {mv.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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

export default MV;
