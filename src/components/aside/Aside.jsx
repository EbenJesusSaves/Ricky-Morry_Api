import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Aside = ({ setStatus, setNextPage, setGender, setSpecies }) => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4">Filter</div>
      <div
        onClick={() => {
          setStatus("");
          setGender("");
          setSpecies("");
          setNextPage(1);
          window.location.reload(false)
        }}
        style={{ cursor: "pointer" }}
        className="text-center mb-3 text-primary"
      >
        Clear Filters
      </div>
      <div className="accordion " id="accordionExample">
        <Gender setNextPage={setNextPage} setGender={setGender} />
        <Species setNextPage={setNextPage} setSpecies={setSpecies} />
        <Status setNextPage={setNextPage} setStatus={setStatus} />
      </div>
    </div>
  );
};

export default Aside;
