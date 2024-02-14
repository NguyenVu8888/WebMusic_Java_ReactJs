import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import style from "./SongLike.module.css";
import List2 from "../../elements/List2";

function SongLike() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("private")) {
      navigate("/Login");
    }
  }, []);

  const [lists, setLists] = useState([]);
  let userid = localStorage.getItem("private");

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userid", userid);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/song/like", requestOptions)
      .then((res) => res.json())
      .then((lists) => {
        if (lists.length < 1) {
          alert("Bạn chưa thích bài hát nào");
        }
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

                <div className="category-all-mysong ">
                  <ul className={style.ulAlbum}>
                    <div className={style.list}>
                      <List2 data={lists} />
                    </div>
                  </ul>
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

export default SongLike;
