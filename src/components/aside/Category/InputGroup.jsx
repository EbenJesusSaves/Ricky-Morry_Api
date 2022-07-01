import React from "react";

const InputGroup = ({ total, setId, name }) => {
  return (
    <div>
      <div class="input-group mb-3">
        <select
          onChange={(e) => setId(e.target.value)}
          class="form-select"
          id={"Episode"}
        >
          <option selected>Choose...</option>
          {[...Array(total).keys()].map((item) => {
            return (
              <option onClick={setId(item + 1)} value={item + 1}>
                {name} - {item + 1}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default InputGroup;
