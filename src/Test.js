import "./test.css";
import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Test(props) {
  let pRef = useRef(undefined);
  let [index, setIndex] = useState(0);
  let [active, setActive] = useState(false);
  let [subindex, setSubIndex] = useState(1);
  function onClickUp() {
    if (index !== 0) {
      setIndex(index - 1);
    }
  }
  function onClickDown() {
    if (index !== 4) {
      setIndex(index + 1);
    }
    setActive(true);
  }
  function onIn() {
    //console.log(index);
  }
  function onOut() {}
  function onScale() {
    let i = 0;
    for (i = 0; i < 5; i++) {
      if (i === index) {
        ReactDOM.findDOMNode(pRef.current).childNodes[
          i
        ].style.transform = `matrix(${1.15},${0},${0},${1.15},${0},${10})`;
        if (active) {
          ReactDOM.findDOMNode(
            pRef.current
          ).childNodes[5].childNodes[1].style.opacity = `1`;
          ReactDOM.findDOMNode(
            pRef.current
          ).childNodes[5].childNodes[2].style.opacity = `1`;
          ReactDOM.findDOMNode(
            pRef.current
          ).childNodes[5].childNodes[3].style.opacity = `1`;
        }
      } else {
        ReactDOM.findDOMNode(pRef.current).childNodes[
          i
        ].style.transform = `matrix(${1},${0},${0},${1},${0},${10})`;
      }
      //ReactDOM.findDOMNode(pRef.current).childNodes[i].style.transform=`translate(${0}px,${30}px)`;
    }
  }
  function onKey1(event) {
    if (event.key === "Enter") {
      console.log("keyPress1");
    }
  }
  function onKey2(event) {
    if (event.key === "Enter") {
      console.log("keyPress2");
    }
  }
  function subOn() {
    console.log("subKeyPress1");
  }
  function subOff() {
    if (subindex !== 3) {
      setSubIndex(subindex + 1);
    }
  }
  function onSubScale() {
    let i = 1;
    for (i = 1; i < 4; i++) {
      if (i === subindex) {
        ReactDOM.findDOMNode(pRef.current).childNodes[5].childNodes[
          i
        ].style.transform = `matrix(${1.15},${0},${0},${1.15},${0},${10})`;
      } else {
        ReactDOM.findDOMNode(pRef.current).childNodes[5].childNodes[
          i
        ].style.transform = `matrix(${1},${0},${0},${1},${0},${10})`;
      }
    }
  }
  return (
    <div ref={pRef}>
      <div
        className="tTest"
        onMouseEnter={onIn}
        onMouseLeave={onOut}
        onKeyPress={onKey1}
        tabIndex="0"
      >
        <h1>1</h1>
        <button
          onClick={() => {
            onClickUp();
            console.log(index);
            onScale();
          }}
        >
          Up
        </button>
        <button
          onClick={() => {
            onClickDown();
            console.log(index);
            onScale();
          }}
        >
          Down
        </button>
      </div>
      <div className="tTest" onKeyPress={onKey2} tabIndex="0">
        <h1>2</h1>
        <button onClick={onClickUp}>Up</button>
        <button onClick={onClickDown}>Down</button>
      </div>
      <div className="tTest" onKeyPress={onKey2} tabIndex="0">
        <h1>3</h1>
        <button onClick={onClickUp}>Up</button>
        <button onClick={onClickDown}>Down</button>
      </div>
      <div className="tTest" onKeyPress={onKey2} tabIndex="0">
        <h1>4</h1>
        <button onClick={onClickUp}>Up</button>
        <button onClick={onClickDown}>Down</button>
      </div>
      <div className="tTest" onKeyPress={onKey2} tabIndex="0">
        <h1>5</h1>
        <button onClick={onClickUp}>Up</button>
        <button onClick={onClickDown}>Down</button>
      </div>
      <div>
        <button>Up</button>
        <div className="tTest2">
          <h1>{5 * index}</h1>
        </div>
        <div className="tTest2">
          <h1>{10 * index}</h1>
        </div>
        <div className="tTest2">
          <h1>{20 * index}</h1>
        </div>
        <button
          onClick={() => {
            subOff();
            onSubScale();
          }}
        >
          Down
        </button>
      </div>
    </div>
  );
}
