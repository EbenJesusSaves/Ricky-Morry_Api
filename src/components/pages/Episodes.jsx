import React from "react";
import Cards from "../cards/Cards";
import { useState, useEffect } from "react";
import InputGroup from "../aside/Category/InputGroup";

const Episodes = () => {
  const [pageNumbers, setPageNumbers] = useState();
  const [id, setId] = useState();

  const API = `https://rickandmortyapi.com/api/episode/${id}?page=${pageNumbers}`;

  const [fetchedData, setFechedData] = useState([]);
  const [results, setResult] = useState([]);

  useEffect(() => {
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      setFechedData(data);
      console.log(data.results);

      let charData = await Promise.all(
        data.characters.map((data) => {
          return fetch(data).then((res) => res.json());
        })
      );
      setResult(charData);
    })();
  }, [API]);

  const { air_date, name } = fetchedData;

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="text-center">
            Episode : {name === "" ? "Not Found" : name}
          </h1>
          <h5 className="text-center">
            Air Date : {air_date === "" ? "Not Found" : air_date}
          </h5>
        </div>

        <div className="row">
          <div className="col-3">
            <div className="text-center mb-3">Episodes Go Here</div>
            <InputGroup total={51} setId={setId} name="Episode" />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards page="/episodes/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
