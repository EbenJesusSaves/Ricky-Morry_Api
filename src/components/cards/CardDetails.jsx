import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./cdetails.css";
const CardDetails = () => {
  let { id } = useParams();
  let API = `https://rickandmortyapi.com/api/character/${id}`;
  const [fetchedData, setFechedData] = useState("");

  useEffect(() => {
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      setFechedData(data);
    })();
  }, [API]);
  console.log(fetchedData);

  return (
    <div className="main">
      <div className="front ">
        <div className="imageclass">
          <img src={fetchedData.image} className="card-img-top " alt="..." />
        </div>

        <div className="card-body">
          <p>
            {" "}
            <h2 className="card-title">{fetchedData.name}</h2>
          </p>

          <p className="card-text">
            <span>Gender : {fetchedData.gender}</span>
          </p>
          <p className="card-text">
            Species : <span>{fetchedData.species}</span>
          </p>
          {/* <p className="card-text">
            Location : <span>{fetchedData?.location.name}</span>
          </p> */}
          <p className="card-text">
            Created : <span>{fetchedData.created}</span>
          </p>

          {(() => {
            if (fetchedData.status === "Dead") {
              return (
                <div className="btn text-white bg-danger ">
                  Status {fetchedData.status}
                </div>
              );
            } else if (fetchedData.status === "Alive") {
              return (
                <div className="btn text-white  bg-success ">
                  Status {fetchedData.status}
                </div>
              );
            } else {
              return (
                <div className="btn text-white bg-secondary ">
                  Status {fetchedData.status}
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
