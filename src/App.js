import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Aside from "./components/aside/Aside";
import Search from "./components/search/Search";
import Cards from "./components/cards/Cards";
import Paginations from "./components/pagination/Paginations.jsx";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Episodes from "./components/pages/Episodes";
import Location from "./components/pages/Location";
import CardDetails from "./components/cards/CardDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Browser>
      <div className="App">
        <Navbar className="container " />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/:id" element={<CardDetails />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<CardDetails />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<CardDetails />} />
        </Routes>
      </div>
    </Browser>
  );
}

const Home = () => {
  // this state changes the page number
  const [nextPage, setNextPage] = useState(1);

  // this state holds the data fetched from the api
  const [fetchedData, setFechedData] = useState([]);
  const { info, results } = fetchedData;

  //this state is used to search for a character
  const [search, setSearch] = useState("");

  //this state filter the characters using status
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  //this code gets the api for the page
  let api = `https://rickandmortyapi.com/api/character?page=${nextPage}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  //this state fetches data and send it to the fetchedData state
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFechedData(data);
    })();
  }, [api]);
  function updatePageNumber() {
    setNextPage((prePage) => {
      return prePage + 1;
    });
  }
  // this function decreases sends you to pre stage
  function sendBack() {
    if (nextPage === 1) return;
    setNextPage((prePage) => {
      return prePage - 1;
    });
  }

  return (
    <div className="App">
      <div className="container mt-4">
        <div className="row">
          {" "}
          <Aside
            setSpecies={setSpecies}
            setStatus={setStatus}
            setGender={setGender}
            setNextPage={setNextPage}
          />
          <div className="col-8">
            <Search setSearch={setSearch} setNextPage={setNextPage} />{" "}
            <div className="row">
              <Cards page="/" results={results} />
            </div>
            {results && (
              <Paginations
                info={info}
                setNextPage={setNextPage}
                sendBack={sendBack}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
