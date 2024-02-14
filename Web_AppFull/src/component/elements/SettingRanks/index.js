import { useState, useEffect } from "react";

function SettingRanks() {
  const [ranks, setRanks] = useState([]);

  const [topPopular, setTopPopular] = useState("");
  const [topSinger, setTopSinger] = useState("");
  const [topLike, setTopLike] = useState("");
  const [topListen, setTopListen] = useState("");

  const [id, setID] = useState("");
  const [editTopPopular, SetEditTopPopular] = useState("");
  const [editTopSinger, SetEditTopSinger] = useState("");
  const [editTopLike, setEditTopLike] = useState("");
  const [editTopListen, setEditTopListen] = useState("");

  useEffect(() => {
    getRanks();
  }, []);

  const getRanks = () => {
    fetch("http://localhost:4000/api/rank")
      .then((res) => res.json())
      .then((ranks) => {
        setRanks(ranks);
      });
  };

  const addRank = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("TopPopular", topPopular);
    urlencoded.append("TopSinger", topSinger);
    urlencoded.append("TopLike", topLike);
    urlencoded.append("TopListen", topListen);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/rank", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add rank success");
        getRanks();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSelect = (index) => {
    const elementSelected = ranks[index];
    SetEditTopPopular(elementSelected.TopPopular);
    SetEditTopSinger(elementSelected.TopSinger);
    setEditTopLike(elementSelected.TopLike);
    setEditTopListen(elementSelected.TopListen);
    setID(elementSelected._id);
  };

  const editRank = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("NewTopPopular", editTopPopular);
    urlencoded.append("NewTopSinger", editTopSinger);
    urlencoded.append("NewTopLike", editTopLike);
    urlencoded.append("NewTopListen", editTopListen);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/rank/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edited rank success");
        getRanks();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deleteRank = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/rank/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("delete rank success");
        getRanks();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="table_set">
        <div className="category-all-mysong">
          <ul style={{ height: "780px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Top popular</th>
                  <th scope="col">Top singer</th>
                  <th scope="col">Top like</th>
                  <th scope="col">Top Listen</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#rankModal"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>
              <div
                className="modal fade"
                id="rankModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="addSingerTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Quản lý rank
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form method="post" action="">
                        <div className="form-group">
                          <label htmlFor="topPopular">Top Popular</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="topPopular"
                            placeholder="Top Popular"
                            onChange={(event) => {
                              setTopPopular(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="topSinger">Top singer</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="topSinger"
                            placeholder="Top singer"
                            onChange={(event) => {
                              setTopSinger(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="topLike">Top like</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="topLike"
                            placeholder="Top like"
                            onChange={(event) => {
                              setTopLike(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="topListen">Top Listen</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="topListen"
                            placeholder="Top Listen"
                            onChange={(event) => {
                              setTopListen(event.target.value);
                            }}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addRank}
                        >
                          Add
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {ranks.map((rank, index) => (
                  <tr key={index}>
                    <td>{rank.TopPopular}</td>
                    <td>{rank.TopSinger}</td>
                    <td>{rank.TopLike}</td>
                    <td>{rank.TopListen}</td>
                    <td>
                      <button
                        type="button"
                        className=" item_crud"
                        data-toggle="modal"
                        data-target="#rankEdit"
                        onClick={() => {
                          handleSelect(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="item_crud"
                        onClick={() => {
                          deleteRank(rank._id);
                        }}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ul>
        </div>

        <div
          className="modal fade"
          id="rankEdit"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTit">
                  Edit Rank Information
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="topPopularE">Top Popular</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editTopPopular}
                      id="topPopularE"
                      placeholder="Top Popular"
                      onChange={(event) => {
                        SetEditTopPopular(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="topSingerE">Top Singer</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editTopSinger}
                      id="topSingerE"
                      placeholder="Top Singer"
                      onChange={(event) => {
                        SetEditTopSinger(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="topLikeE">Top like</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editTopLike}
                      id="topLikeE"
                      placeholder="Top like"
                      onChange={(event) => {
                        setEditTopLike(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="topListenE">Top listen</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      defaultValue={editTopListen}
                      id="topListenE"
                      placeholder="Top listen"
                      onChange={(event) => {
                        setEditTopListen(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editRank(id);
                    }}
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingRanks;
