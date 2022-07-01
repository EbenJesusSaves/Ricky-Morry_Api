import React from "react";

const Fiter = ({ name, index, value, setNextPage, setStatus, }) => {
  return (
    <div>
      <style jsx>
        {`
          .fill:checked + label {
            background-color: #0b5ed7;
            color: #ffff;
          }

          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="fill"
          onClick={() => {
            setNextPage(1);
            setStatus(value);
            
          }}
          type="radio"
          name={name}
          id={`${name}-${index + 1}`}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index + 1}`}>
          {value}
        </label>
      </div>
    </div>
  );
};

export default Fiter;
