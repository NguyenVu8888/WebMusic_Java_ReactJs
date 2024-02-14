import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import style from "./Theloai.module.css";
import imgEX1 from "../../../assets/img/bg-ani.jpg";
import CardTopic from "../../elements/CardTopic";
import CardTopicHot from "../../elements/CardTopicHot";
import ThumbMain from "../../elements/ThumbMain";

function TheLoai() {
  const navigate = useNavigate();
  const [cardTopics, setCardTopics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/song")
      .then((res) => res.json())
      .then((cardTopics) => {
        setCardTopics(cardTopics.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);
  const datacardtopic = cardTopics.slice(0, 3);
  // const datacardtopic = cardTopics.slice(0, 3);

  const [cardTopicHots, setCardTopicHots] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/album", requestOptions)
      .then((res) => res.json())
      .then((cardTopicHots) => {
        setCardTopicHots(cardTopicHots.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);
  const dataCardtopichot = cardTopicHots.slice(0, 3);
  //const dataCardtopichot = cardTopicHots.slice(11, 14);

  const [dataOne, setdataOne] = useState([]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("id", 1);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song/search/album", requestOptions)
      .then((res) => res.json())
      .then((dataOne) => {
        setdataOne(dataOne);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const dataThumbTopOne = dataOne.slice(0, 4);

  const [dataTwo, setdataTwo] = useState([]);
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("id", 2);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song/search/album", requestOptions)
      .then((res) => res.json())
      .then((dataTwo) => {
        setdataTwo(dataTwo);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const dataThumbToptwo = dataTwo.slice(0, 4);

  const [dataThree, setdataThree] = useState([]);
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("id", 3);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song/search/album", requestOptions)
      .then((res) => res.json())
      .then((dataThree) => {
        setdataThree(dataThree);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const dataThumbTopthree = dataThree.slice(0, 4);

  const [dataFour, setdataFour] = useState([]);
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("id", 5);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song/search/album", requestOptions)
      .then((res) => res.json())
      .then((dataFour) => {
        setdataFour(dataFour);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const dataThumbTopFour = dataFour.slice(0, 4);

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

                <div className={style.section}>
                  <div className={style.img}>
                    <img className={style.imgIntro} src={imgEX1} alt="" />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.head}>Nổi bật</div>
                  <div className={style.wrap}>
                    <CardTopic data={datacardtopic} />
                  </div>
                  <div className={style.bot}>
                    <a className={style.btn}>Xem tất cả</a>
                  </div>
                </div>

                {/* <div className={style.section}>
                  <div className={style.head}>Quốc gia</div>
                  <div className={style.wrap}>
                    <CardTopic data={datacardtopic} />
                  </div>
                  <div className={style.bot}>
                    <a className={style.btn}>Xem tất cả</a>
                  </div>
                </div> */}

                <div className={style.section}>
                  <div className={style.head}>Tâm trạng và hoạt động</div>
                  <div className={style.wrap}>
                    <CardTopicHot data={dataCardtopichot} />
                  </div>
                  <div className={style.bot}>
                    <a className={style.btn}>Xem tất cả</a>
                  </div>
                </div>

                <div className={style.section}>
                  {/* <Topic data={dataTopic} /> */}
                  <div className="section">
                    <div className={style.btnRegion}>
                      <div className={style.head}>Album nhạc buồn</div>
                      <a className="btn last-btn">
                        Tất cả...
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className={style.wrap}>
                      <ThumbMain data={dataThumbTopOne} />
                    </div>
                  </div>

                  <div className="section">
                    <div className={style.btnRegion}>
                      <div className={style.head}>Album nhạc cổ điển</div>
                      <a className="btn last-btn">
                        Tất cả...
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className={style.wrap}>
                      <ThumbMain data={dataThumbToptwo} />
                    </div>
                  </div>

                  <div className="section">
                    <div className={style.btnRegion}>
                      <div className={style.head}>Album nhạc hay</div>
                      <a className="btn last-btn">
                        Tất cả...
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className={style.wrap}>
                      <ThumbMain data={dataThumbTopthree} />
                    </div>
                  </div>

                  <div className="section">
                    <div className={style.btnRegion}>
                      <div className={style.head}>Album nhạc EDM</div>
                      <a className="btn last-btn">
                        Tất cả...
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className={style.wrap}>
                      <ThumbMain data={dataThumbTopFour} />
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

export default TheLoai;
