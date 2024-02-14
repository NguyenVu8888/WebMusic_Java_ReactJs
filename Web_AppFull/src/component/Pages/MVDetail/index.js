import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MVDetail.css";

function MVDetail() {
  const navigate = useNavigate();

  const [mvs, setMvs] = useState([]);

  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

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

    console.log(JSON.stringify(dataDetailMV));
    console.log(dataDetailMV);
  };

  const dataGet = JSON.parse(localStorage.getItem("dataDetailMV"));

  const [mvsDisplayTitle, setMvsDisplayTitle] = useState(dataGet.nameData);
  const [mvsDisplaySource, setMvsDisplaySource] = useState(dataGet.source);
  const [mvsDisplayThumb, setMvsDisplayThumb] = useState(dataGet.imageDate);
  const [mvsDisplayDes, setMvsDisplayDes] = useState(dataGet.descreption);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="#">
          Quang Vũ Music
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="appDetaiMv mt-2">
        <div className="container_customer">
          <div className="row">
            <div className="col-xl-8">
              <div className="Show_video_detai">
                <video controls className="videosquare" autoPlay>
                  <source
                    // src={dataGet !== undefined ? dataGet.source : "1000"}
                    src={mvsDisplaySource}
                  />
                </video>

                {/* <div className="name_Video_detai">
                  {dataGet
                    ? dataGet.nameData
                    : "Ngày Trái Tim Khóc - Cao Tùng Anh"}
                </div> */}
                <div className="name_Video_detai">{mvsDisplayTitle}</div>
                <div className="infor_author align-items-center">
                  <a href="" className="author_link">
                    <img
                      className="img_author_detai authorAvata"
                      // src={
                      //   dataGet
                      //     ? dataGet.imageDate
                      //     : "https://yt3.ggpht.com/7NfKBa-tpWYX0WFXwJSRnyJWgJBr9oiG6_XUlXp_T1jSunb0g8K1cBpTi6Azlg9o85toepk8Xw=s88-c-k-c0x00ffffff-no-rj"
                      // }

                      src={mvsDisplayThumb}
                      alt=""
                    />
                  </a>
                  <div className="infor_base_author">
                    <div className="name_author">Music Entertainment</div>
                    <div className="more_info_author">
                      {Math.floor(Math.random() * 100) + 50}k người đăng ký
                    </div>
                  </div>
                </div>
                <div className="title_mv_detai">
                  {/* <div className="w90">
                    {dataGet
                      ? dataGet.descreption
                      : "https://yt3.ggpht.com/7NfKBa-tpWYX0WFXwJSRnyJWgJBr9oiG6_XUlXp_T1jSunb0g8K1cBpTi6Azlg9o85toepk8Xw=s88-c-k-c0x00ffffff-no-rj"}
                  </div> */}
                  <div className="w90">{mvsDisplayDes}</div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <ul className="list-group">
                {mvs.map((mv, index) => (
                  <li
                    className="list-group-item list_infor_mv align-items-center mt-2"
                    key={index}
                    onClick={() => {
                      outPutData(mv);
                      setMvsDisplayTitle(mv.title);
                      setMvsDisplaySource(uriVdeo + mv.source);
                      setMvsDisplayThumb(uriImage + mv.thumb);
                      setMvsDisplayDes(mv.description);
                    }}
                  >
                    <div className="box_image_mv">
                      <img
                        className="image_Mv_sub"
                        src={uriImage + mv.thumb}
                        alt=""
                      />
                    </div>
                    <div className="infor_mv_sub">
                      <div className="name_mv_sub">{mv.title}</div>
                      <div className="more_info_subMv">
                        Duration: {mv.duration}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MVDetail;
