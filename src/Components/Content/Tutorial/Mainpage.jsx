import React, { useState } from "react";
import Info from "./Info";
import { data1, differ } from "../../../data";
import Button from "../../Button/Button";
import "./Mainpage.css";

const Mainpage = () => {
  const [showContent, setshowContent] = useState(null);
  const [handleDoubleClick, sethandleDoubleClick] = useState(false);
  const [moment, setMoment] = useState(new Date());
  // setInterval(() => setMoment(new Date()), 1000);

  // console.log("App render");

  function handleClick(button) {
    setshowContent(button);
    console.log(showContent);
  }

  const handleMouseEnter = () => {
    console.log("entered to button");
    // setshowContent(true);
    // showContent(true);
  };

  const handleMouseLeave = () => {
    console.log("left the mouse");

    setshowContent(false);
    sethandleDoubleClick(false);
  };
  var myModal = document.getElementById("myModal");
  var myInput = document.getElementById("myInput");

  // myModal.addEventListener("shown.bs.modal", function () {
  //   myInput.focus();
  // });
  return (
    <>
      <div className="main">
        here should be time:{moment.toLocaleTimeString()}
        {data1.map((inf) => (
          <Info key={inf.title} {...inf} />
        ))}
        <Button text="Click here" />
        <Button
          isActive={showContent === "move_on"}
          onTouch={() => handleClick("move_on")}
        >
          Move on
        </Button>{" "}
        <br />
        <Button
          isActive={showContent === "move_forward"}
          onTouch={() => handleClick("move_forward")}
        >
          Move forward
        </Button>
        <Button
          isActive={showContent === "move_down"}
          onTouch={() => handleClick("move_down")}
        >
          Move down
        </Button>
      </div>
      {showContent ? <p>{differ[showContent]}</p> : <p>click to see</p>}
      {!showContent ? <p>click it</p> : <p>{differ[showContent]}</p>}
      //modal
    </>
  );
};

export default Mainpage;
