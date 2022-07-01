import React from "react";
import Cards from "../cards/Cards";
import { useState, useEffect } from "react";
import InputGroup from "../aside/Category/InputGroup";

const Location = () => {
  const [pageNumbers, setPageNumbers] = useState();
  const [id, setId] = useState();

  const API = `https://rickandmortyapi.com/api/location/${id}?page=${pageNumbers}`;

  const [fetchedData, setFechedData] = useState([]);
  const [results, setResult] = useState([]);

  useEffect(() => {
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      setFechedData(data);
      console.log(data.results);

      let charData = await Promise.all(
        data.residents.map((data) => {
          return fetch(data).then((res) => res.json());
        })
      );
      setResult(charData);
    })();
  }, [API]);

  const { dimension, name } = fetchedData;

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="text-center">
            Location : {name === "" ? "Not Found" : name}
          </h1>
          <h5 className="text-center">
            Dimension : {dimension === "" ? "Not Found" : dimension}
          </h5>
        </div>

        <div className="row">
          <div className="col-3">
            <div className="text-center mb-3">Location Go Here</div>
            <InputGroup total={126} setId={setId} name="Location" />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards page="/location/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
