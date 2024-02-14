import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import style from "./KhamPha.module.css";
import Thumb from "../../elements/Thumb";
import ThumbCircle from "../../elements/ThumbCircle";
import ThumbMain from "../../elements/ThumbMain";
import Postcard from "../../elements/Postcard";
import Card from "../../elements/Card";
import ThumbTop from "../../elements/ThumbTop";
import Slide from "../../elements/Slide";

function KhamPha() {
  const navigate = useNavigate();
  const [thumbs, setThumbs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/song")
      .then((res) => res.json())
      .then((thumbs) => {
        setThumbs(thumbs.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const datathumb = thumbs.slice(0, 12);

  const [sadSong, setSadSong] = useState([]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("gerne", "Nhạc buồn");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song/search/gerne", requestOptions)
      .then((res) => res.json())
      .then((sadSong) => {
        setSadSong(sadSong);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const dataSadSong = sadSong.slice(0, 4);

  const [happySong, setHappySong] = useState([]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("gerne", "Nhạc vui nhộn");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song/search/gerne", requestOptions)
      .then((res) => res.json())
      .then((happySong) => {
        setHappySong(happySong);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const dataHappySong = happySong.slice(0, 4);
  // const dataHappySong = new Array();
  // for (let i = 0; i < 4; i++) {
  //   dataHappySong.push(
  //     happySong[Math.floor(Math.random() * (happySong.length - 1))]
  //   );
  // }

  const [chrisSong, setChrisSong] = useState([]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("gerne", "Nhạc giáng sinh");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song/search/gerne", requestOptions)
      .then((res) => res.json())
      .then((chrisSong) => {
        setChrisSong(chrisSong);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const dataChrisSong = chrisSong.slice(0, 4);

  const [postcards, setPostcrads] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song/new", requestOptions)
      .then((res) => res.json())
      .then((postcards) => {
        setPostcrads(postcards);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const dataPostcard = postcards.slice(0, 3);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/song")
      .then((res) => res.json())
      .then((crads) => {
        setCards(crads.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);
  const dataCard = cards.slice(2, 5);

  const [thumbtops, setThumbtops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/album")
      .then((res) => res.json())
      .then((thumbtops) => {
        setThumbtops(thumbtops.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);

  const dataThumbTop = thumbtops.slice(0, 4);

  const [thumbcircles, setthumbcircles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/artist")
      .then((res) => res.json())
      .then((thumbcircles) => {
        setthumbcircles(thumbcircles.listResult);
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/Notfound");
      });
  }, []);
  const dataThumbCircle = thumbcircles.slice(6, 11);

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

                <div className="page-body">
                  <div className={style.galery}>
                    <Slide data={datathumb} />
                  </div>

                  <div className={style.region}>
                    <div className={style.head}>
                      <h2 className={style.title}>Mới phát hành</h2>
                      <div className={style.btnRegion}>
                        <a className={style.btn}>Tất cả</a>
                        <a className={style.btn}>Việt Nam</a>
                        <a className={style.btn}>Quốc tế</a>
                        <a className={style.lastBtn}>
                          Tất cả...
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className={style.newsPulished}>
                      <Thumb data={datathumb} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <div className={style.btnRegion}>
                      <h2 className={style.title}>Vui nhộn</h2>
                      <a className={style.lastBtn}>
                        Tất cả...
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className={style.chill}>
                      <ThumbMain data={dataHappySong} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <h2 className={style.title}>Giáng sinh</h2>
                    <div className={style.chill}>
                      <ThumbMain data={dataChrisSong} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <h2 className={style.title}>Sâu lắng</h2>
                    <div className={style.chill}>
                      <ThumbMain data={dataSadSong} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <h2 className={style.title}>Bảng xếp hạng nhạc mới</h2>
                    <div className={style.bxh}>
                      <Postcard data={dataPostcard} />
                    </div>
                  </div>

                  {/* <div className={style.region}>
                    <h2 className={style.title}>Bang xep hang</h2>
                    <div className={style.chart}>
                      <Card data={dataCard} />
                    </div>
                  </div> */}

                  {/* <div className={style.region}>
                    <div className={style.btnRegion}>
                      <h2 className={style.title}>Top 100</h2>
                      <a className={style.lastBtn}>
                        Tất cả...
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className={style.topHundred}>
                      <ThumbTop data={dataThumbTop} />
                    </div>
                  </div> */}

                  <div className={style.region}>
                    <h2 className={style.title}>Album hot</h2>
                    <div className={style.topHundred}>
                      <ThumbTop data={dataThumbTop} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <div className={style.btnRegion}>
                      <h2 className={style.title}>Radio nổi bật</h2>
                      <a className={style.lastBtn}>
                        Tất cả...
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className={style.radio}>
                      <ThumbCircle data={dataThumbCircle} />
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

export default KhamPha;
