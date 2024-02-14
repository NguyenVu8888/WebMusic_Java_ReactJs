import { Routes, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import KhamPhaPage from "../Pages/KhamPha";
import ZingChartPage from "../Pages/ZingChart";
import RadioPage from "../Pages/Radio";
import NhacMoiPage from "../Pages/NhacMoi";
import TheLoaiPage from "../Pages/TheLoai";
import MVPage from "../Pages/MV";
import "./Page.css";
import LoginRegister from "../Pages/LoginRegister";

function Pagebody() {
  return (
    <div className="right-menu pagebody">
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
          <div className="null-left"></div>
        </div>
        <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 ">
          <div className="main-menu mb-3 mt-2">
            <div className="main-menu-all">
              {/*  */}

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagebody;
