import React from "react";
import Fiter from "../Fiter";

const Gender = ({ setNextPage, setGender }) => {
  let gender = ["female", "male", "genderless", "unknown"];
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Gender
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body ">
            {gender.map((value, index) => (
              <Fiter
                key={index}
                value={value}
                name="Gender"
                index={index}
                setNextPage={setNextPage}
                setStatus={setGender}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
