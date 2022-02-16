import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// json data
import mockData from "../mockData.json";

const SearchComp = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <>
      <section id="search">
        <Container>
          <h1 className="my-5 text-center">Search Anything...</h1>
          <Row className="text-center">
            <Col xl={6} className="mx-auto">
              <div className="input_field mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                  onChange={(e) => setSearchItem(e.target.value)}
                />
              </div>
              {mockData
                .filter((v) => {
                  if (searchItem === "") {
                    return v;
                  } else if (
                    v.author.toLowerCase().includes(searchItem.toLowerCase())
                  ) {
                    return v;
                  }
                })
                .map((item) => {
                  return (
                    <div ke={Math.random()} className="my-4">
                      <p className="text-primary">{item.author}</p>
                    </div>
                  );
                })}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchComp;
