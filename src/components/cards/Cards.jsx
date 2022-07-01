import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
const Cards = ({ results, page }) => {
  //this checks for character availability
  let pageDisplay;
  if (results) {
    pageDisplay = results.map((result) => {
      return (
        <Link
          to={`${page}${result.id}`}
          className="col-4 text-decoration-none position-relative"
          key={result.id}
        >
          <div className="card ">
            <img src={result.image} className="img-fluid" alt="" />
            <div className="container">
              <div className="fs-4 fw-bold mb-4">{result.name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="">{result.location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (result.status === "Dead") {
              return (
                <div className="badge bg-danger position-absolute">
                  {result.status}
                </div>
              );
            } else if (result.status === "Alive") {
              return (
                <div className="badge bg-success position-absolute">
                  {result.status}
                </div>
              );
            } else {
              return (
                <div className="badge bg-secondary position-absolute">
                  {result.status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    pageDisplay = (
      <div className="result-not">
        {" "}
        <img
          src="https://cdn.dribbble.com/users/436620/screenshots/8386175/no_results_found__4x.jpg"
          alt=""
        />
      </div>
    );
  }

  return <>{pageDisplay}</>;
};

export default Cards;
