import React, { useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";

const SearchBar = ({ placeholder, data }) => {
  const [item, setItem] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  //   onchange
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilterItem = data.filter((v) => {
      return v.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setItem([]);
    } else {
      setItem(newFilterItem);
    }
  };

  // clear all
  const clearAll = () => {
    setItem([]);
    setWordEntered("");
  };

  return (
    <>
      <section id="searching" className="my-5 py-4">
        <Container>
          <h1 className="text-black text-center">Search Field</h1>
          <Row>
            <Col xl={6} className="mx-auto">
              <div className="search">
                <div className="searchInputs">
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="form-control my-4"
                    value={wordEntered}
                    onChange={handleFilter}
                  />
                  <div className="searchIcon">
                    {item.length === 0 ? (
                      <BsSearch />
                    ) : (
                      <BsX onClick={clearAll} />
                    )}
                  </div>
                </div>

                {item.length !== 0 && (
                  <div>
                    {item.slice(0, 15).map((ele) => {
                      return (
                        <div key={ele.title}>
                          <a href={ele.link} target="_blank">
                            {ele.title}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchBar;
