import React from "react";

// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// custom scss
import "./global.scss";
import SearchBar from "./Components/SearchBar";
import jsonData from "./Data.json";

const App = () => {
  return (
    <>
      <div className="App">
        <SearchBar placeholder={"Search..."} data={jsonData} />
      </div>
    </>
  );
};

export default App;
