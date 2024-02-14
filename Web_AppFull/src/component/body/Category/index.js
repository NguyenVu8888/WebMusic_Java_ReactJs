import "./Category.css";
import albumImg from "../../../assets/img/album-iu.jpeg";
import { useStore, actions } from "../../../store";

function Category(props) {
  let uriImage = "http://localhost:8081/files/image/";
  let uriVdeo = "http://localhost:8081/files/video/";
  let uriAudio = "http://localhost:8081/files/audio/";

  const [state, dispath] = useStore();
  let userid = localStorage.getItem("private");

  const addLove = (id) => {
    var formdata = new FormData();
    formdata.append("userid", userid);
    formdata.append("songid", id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8081/api/like", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const playmusic = (category, index) => {
    dispath(actions.setSongPlay(category));
    let musicPlayer = document.getElementById("musicPlayer");
    var x = document.getElementById(category.id);

    x.setAttribute("data", category.path);
    // x.setAttribute("className", "active");

    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
    localStorage.removeItem("singer");

    localStorage.setItem("thumb", uriImage + category.image);
    localStorage.setItem("title", category.name);
    localStorage.setItem("singer", category.artist);

    localStorage.removeItem("currentMusic");
    localStorage.removeItem("currentMusic1");
    localStorage.setItem("currentMusic", index);

    var y = uriAudio + x.getAttribute("data");

    musicPlayer.src = y;
    musicPlayer.play();
  };

  const addHistory = (songID) => {
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
      .catch((error) => {
        console.log("error", error);
        alert("Server error");
      });
  };

  const download = (path) => {
    let uri = `http://localhost:8081/files/audio/download/${path}`;
    alert("Link downdload :   " + uri);
  };
  return (
    <div className="category-my-song">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <div className="category-slide-album">
            <img src={albumImg} alt="" className="category-slide-album_img" />
          </div>
        </div>
        <div className="category-all-mysong col-xl-9 col-lg-8">
          <ul>
            {props.data.map((category, index) => (
              <li
                className="active"
                key={index}
                id={category.id}
                onClick={() => {
                  playmusic(category, index);
                  addHistory(category.id);
                }}
              >
                <div className="detai-song">
                  <img src={uriImage + category.image} alt="" />
                  <div className="detai-name-song">
                    <span>{category.name}</span>
                    <p>{category.artist}</p>
                  </div>
                </div>

                <div className="time-song">{category.duration}</div>
                <ul className="nav-song">
                  <li>
                    <a href="">
                      <i className="fas fa-microphone"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        addLove(category.songid);
                      }}
                    >
                      <i className="far fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        download(category.path);
                      }}
                    >
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Category;
