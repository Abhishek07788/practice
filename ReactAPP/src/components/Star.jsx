import React from "react";
import { useState } from "react";

const Star = () => {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "200px",
    margin: "auto",
    marginTop: "50px",
    fontSize: "40px",
    gap: "0px",
  };

  const [star1, setStar1] = useState({});
  const [star2, setStar2] = useState({});
  const [star3, setStar3] = useState({});
  const [star4, setStar4] = useState({});
  const [star5, setStar5] = useState({});

  const s = {
    fontSize: "140px",
    height: "20px",
  };

  const setColor = (x) => {
    if (x === 1) {
      setStar1({
        color: "red",
      });
      setStar2({
        color: "blue",
      });
      setStar3({
        color: "blue",
      });
      setStar4({
        color: "black",
      });
      setStar5({
        color: "black",
      });
    } else if (x === 2) {
      setStar1({
        color: "blue",
      });
      setStar2({
        color: "red",
      });
      setStar3({
        color: "blue",
      });
      setStar4({
        color: "black",
      });
      setStar5({
        color: "black",
      });
    } else if (x === 3) {
      setStar1({
        color: "black",
      });
      setStar2({
        color: "blue",
      });
      setStar3({
        color: "red",
      });
      setStar4({
        color: "blue",
      });
      setStar5({
        color: "black",
      });
    } else if (x === 4) {
      setStar1({
        color: "black",
      });
      setStar2({
        color: "black",
      });
      setStar3({
        color: "blue",
      });
      setStar4({
        color: "red",
      });
      setStar5({
        color: "blue",
      });
    } else if (x === 5) {
      setStar1({
        color: "black",
      });
      setStar2({
        color: "black",
      });
      setStar3({
        color: "blue",
      });
      setStar4({
        color: "blue",
      });
      setStar5({
        color: "red",
      });
    }
  };

  return (
    <div style={style} id="hover">
      <h1 style={{ ...s, ...star1 }} onClick={() => setColor(1)}>
        *
      </h1>
      <h1 style={{ ...s, ...star2 }} onClick={() => setColor(2)}>
        *
      </h1>
      <h1 style={{ ...s, ...star3 }} onClick={() => setColor(3)}>
        *
      </h1>
      <h1 style={{ ...s, ...star4 }} onClick={() => setColor(4)}>
        *
      </h1>
      <h1 style={{ ...s, ...star5 }} onClick={() => setColor(5)}>
        *
      </h1>
    </div>
  );
};

export default Star;
