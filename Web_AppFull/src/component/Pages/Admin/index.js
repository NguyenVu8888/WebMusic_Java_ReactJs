import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./Admin.css";
import SettingSong from "../../elements/SettingSong";
import Pagenumber from "../../elements/Pagenumber";
import SettingSinger from "../../elements/SettingSinger";
import SettingMv from "../../elements/SettingMv";
import SettingUser from "../../elements/SettingUser";
import SettingAlbum from "../../elements/SettingAlbum";
import SettingPlaylist from "../../elements/SettingPlaylist";
import SettingSearchUser from "../../elements/SettingSearchUser";
import SettingRanks from "../../elements/SettingRanks";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem("private") ||
      localStorage.getItem("role") !== "admin"
    ) {
      navigate("/Login");
    }
  }, []);

  const ClearData = () => {
    localStorage.removeItem("private");
    localStorage.removeItem("role");
    localStorage.removeItem("privateImage");
    localStorage.removeItem("privateName");
    localStorage.removeItem("currentMusic");
    localStorage.removeItem("dataDetail");
    localStorage.removeItem("dataDetailMV");
    localStorage.removeItem("contentPlaymusic");
    localStorage.removeItem("singer");
    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
  };

  const logout = () => {
    ClearData();
    navigate("/Home");
  };

  return (
    <>
      <div className="app">
        <div className="header sticky-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="#">
                <img
                  className="imge_logo"
                  src="https://i.pinimg.com/474x/13/66/24/13662403df40419741a2858e38135a5c.jpg"
                  alt=""
                />
              </a>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to="/Home" className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                  <div className="dropdown show account_infor">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="https://i.pinimg.com/474x/13/66/24/13662403df40419741a2858e38135a5c.jpg"
                        alt=""
                        className="avata_account"
                      />
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <Link className="dropdown-item" to="/" onClick={logout}>
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="nav_left mt-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-2">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link nav_left_link active"
                      data-toggle="tab"
                      href="#songsNav"
                    >
                      songs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav_left_link"
                      data-toggle="tab"
                      href="#singerNav"
                    >
                      Singer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav_left_link"
                      data-toggle="tab"
                      href="#Mv"
                    >
                      Mv
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav_left_link"
                      data-toggle="tab"
                      href="#user"
                    >
                      User
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link nav_left_link"
                      data-toggle="tab"
                      href="#Album"
                    >
                      Album
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link nav_left_link"
                      data-toggle="tab"
                      href="#Playlist"
                    >
                      Playlist
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link nav_left_link"
                      data-toggle="tab"
                      href="#Image"
                    >
                      Search User
                    </a>
                  </li>

                  {/* <li className="nav-item">
                    <a
                      className="nav-link nav_left_link"
                      data-toggle="tab"
                      href="#Ranks"
                    >
                      Ranks
                    </a>
                  </li> */}
                </ul>
              </div>

              {/*  */}
              <div className="col-xl-10 boc">
                <div className="content_tab">
                  <div className="tab-content">
                    <div className="tab-pane container active" id="songsNav">
                      <SettingSong />
                    </div>
                    -----
                    <div className="tab-pane container fade" id="singerNav">
                      <SettingSinger />
                    </div>
                    -----
                    <div className="tab-pane container fade" id="Mv">
                      <SettingMv />
                    </div>
                    -----
                    <div className="tab-pane container fade" id="user">
                      <SettingUser />
                    </div>
                    <div className="tab-pane container fade" id="Album">
                      <SettingAlbum />
                    </div>
                    <div className="tab-pane container fade" id="Playlist">
                      <SettingPlaylist />
                    </div>
                    <div className="tab-pane container fade" id="Image">
                      <SettingSearchUser />
                    </div>
                    {/* <div className="tab-pane container fade" id="Ranks">
                      <SettingRanks />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          Tab panes
        </div>
      </div>
    </>
  );
}
