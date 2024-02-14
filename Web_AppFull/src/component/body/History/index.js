import { useState, useEffect } from "react";
import { useStore, actions } from "../../../store";

import "./History.css";

function History() {
  const [state, dispath] = useStore();
  const [search, setSreach] = useState("");
  const [searchResult, setSreachResult] = useState("");

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("name", search);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/song/search`, requestOptions)
      .then((response) => response.json())
      .then((sreachResult) => {
        setSreachResult(sreachResult);
      })
      .catch((error) => console.log("error", error));
  }, [search]);

  let userid = localStorage.getItem("private");

  const playmusic = (history, index) => {
    dispath(actions.setSongPlay(history));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(history.id);
    x.setAttribute("data", history.path);
    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
    localStorage.removeItem("singer");

    localStorage.setItem(
      "thumb",
      "http://localhost:8081/files/image/" + history.image
    );
    localStorage.setItem("title", history.name);
    localStorage.setItem("singer", history.artist);

    localStorage.removeItem("currentMusic");
    localStorage.setItem("currentMusic", index);

    var y = "http://localhost:8081/files/audio/" + x.getAttribute("data");
    musicPlayer.src = y;
    musicPlayer.play();
  };

  const addHistory = (songID) => {
    if (userid != null) {
      var formdata = new FormData();
      formdata.append("userid", userid);
      formdata.append("songid", songID);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:8081/api/history", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    } else {
    }
  };

  const outPutDataForMusicplayer = (album) => {
    let contentPlaymusic = {
      typeDATA: "all",
    };

    localStorage.removeItem("contentPlaymusic");
    localStorage.setItem("contentPlaymusic", JSON.stringify(contentPlaymusic));
  };

  return (
    <>
      <div className="find align-items-center justify-content-end" id="find">
        <i className="fas fa-search posi"></i>
        <input
          className="input-head"
          id="input-head"
          type="text"
          placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
          onChange={(event) => {
            setSreach(event.target.value);
          }}
        />
        <div className="fake_after" id="fake_after"></div>
        {search.length > 0 ? (
          <ul className="input-head-history" id="history">
            {searchResult.map((history, index) => (
              <li
                key={index}
                id={history.id}
                onClick={() => {
                  playmusic(history, index);
                  addHistory(history.id);
                  outPutDataForMusicplayer(history);
                }}
              >
                <div href="">
                  <i className="fas fa-history"> </i>
                  {history.name}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul></ul>
        )}
      </div>
    </>
  );
}

export default History;
