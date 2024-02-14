// import { useState, useEffect } from "react";

// import style from "./Topic.module.css";
// import ThumbTop from "../ThumbTop";

// function Topic(props) {
//   const [dataOne, setdataOne] = useState([]);

//   useEffect(() => {
//     var formdata = new FormData();
//     formdata.append("id", 1);

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch("http://localhost:8081/api/song/search/album", requestOptions)
//       .then((res) => res.json())
//       .then((dataOne) => {
//         setdataOne(dataOne);
//       });
//   }, []);

//   const dataThumbTopOne = dataOne.slice(0, 4);

//   const [dataTwo, setdataTwo] = useState([]);
//   useEffect(() => {
//     var formdata = new FormData();
//     formdata.append("id", 2);

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch("http://localhost:8081/api/song/search/album", requestOptions)
//       .then((res) => res.json())
//       .then((dataTwo) => {
//         setdataTwo(dataTwo);
//       });
//   }, []);

//   const dataThumbToptwo = dataTwo.slice(0, 4);

//   const [dataThree, setdataThree] = useState([]);
//   useEffect(() => {
//     var formdata = new FormData();
//     formdata.append("id", 2);

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch("http://localhost:8081/api/song/search/album", requestOptions)
//       .then((res) => res.json())
//       .then((dataThree) => {
//         setdataThree(dataThree);
//       });
//   }, []);

//   const dataThumbTopthree = dataThree.slice(0, 4);

//   const [dataFour, setdataFour] = useState([]);
//   useEffect(() => {
//     var formdata = new FormData();
//     formdata.append("id", 2);

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch("http://localhost:8081/api/song/search/album", requestOptions)
//       .then((res) => res.json())
//       .then((dataFour) => {
//         setdataFour(dataFour);
//       });
//   }, []);

//   const dataThumbTopFour = dataFour.slice(0, 4);

//   return (
//     <>
//       {props.data.map((topic, index) => (
//         <div className="section" key={index}>
//           <div className={style.btnRegion}>
//             <div className={style.head}>{topic.name}</div>
//             <a className="btn last-btn">
//               Tất cả...
//               <i className="fas fa-chevron-right"></i>
//             </a>
//           </div>
//           <div className={style.wrap}>
//             <ThumbTop data={dataOne} />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Topic;
