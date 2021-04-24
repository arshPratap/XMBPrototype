import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function List() {
  const useKeyPress = function (targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
    function upHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    }
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    });
    return keyPressed;
  };
  const items = [
    { id: 1, name: "ABCDE" },
    { id: 2, name: "FGHIJ" },
    { id: 3, name: "KLMNO" },
    { id: 4, name: "PQRST" },
    { id: 5, name: "UVWXYZ" }
  ];
  const ListItem = ({ item, active, setSelected, setHovered }) => {
    let myRef = useRef(null);
    return (
      <div
        ref={myRef}
        className={`item ${active ? "active" : ""}`}
        onClick={() => setSelected(item)}
        //onMouseEnter={() => {
        //setHovered(item);
        //let look = ReactDOM.findDOMNode(myRef.current).style;
        //console.log("I am called");
        //console.log(look);
        //}}
        //onMouseLeave={() => setHovered(undefined)}
      >
        {item.name}
      </div>
    );
  };
  const ListExample = () => {
    let divRef = useRef(null);
    const [selected, setSelected] = useState(undefined);
    const downPress = useKeyPress("ArrowDown");
    const upPress = useKeyPress("ArrowUp");
    const enterPress = useKeyPress("Enter");
    const [cursor, setCursor] = useState(0);
    const [down, setDown] = useState(0);
    const [up, setUp] = useState(0);
    //const [hovered, setHovered] = useState(undefined);
    useEffect(() => {
      if (items.length && downPress) {
        setCursor((prevState) =>
          prevState < items.length - 1 ? prevState + 1 : prevState
        );
        //setDown(20);
      }
    }, [downPress]);
    useEffect(() => {
      if (items.length) {
        setDown(cursor * 20);
        ReactDOM.findDOMNode(
          divRef.current
        ).childNodes[2].style.transform = `translate(${0}px,${down}px)`;
        ReactDOM.findDOMNode(
          divRef.current
        ).childNodes[3].style.transform = `translate(${0}px,${down}px)`;
        ReactDOM.findDOMNode(
          divRef.current
        ).childNodes[4].style.transform = `translate(${0}px,${down}px)`;
        ReactDOM.findDOMNode(
          divRef.current
        ).childNodes[5].style.transform = `translate(${0}px,${down}px)`;
        ReactDOM.findDOMNode(
          divRef.current
        ).childNodes[6].style.transform = `translate(${0}px,${down}px)`;
      }
    }, [downPress, cursor]);
    useEffect(() => {
      if (items.length && upPress) {
        setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
      }
    }, [upPress]);

    useEffect(() => {
      if (items.length) {
        setUp(cursor * -20);
        ReactDOM.findDOMNode(
          divRef.current
        ).childNodes[2].style.transform = `translate(${0}px,${up}px)`;
        ReactDOM.findDOMNode(
          divRef.current
        ).childNodes[3].style.transform = `translate(${0}px,${up}px)`;
        ReactDOM.findDOMNode(
          divRef.current
        ).childNodes[4].style.transform = `translate(${0}px,${up}px)`;
        ReactDOM.findDOMNode(
          divRef.current
        ).childNodes[5].style.transform = `translate(${0}px,${up}px)`;
        ReactDOM.findDOMNode(
          divRef.current
        ).childNodes[6].style.transform = `translate(${0}px,${up}px)`;
      }
    }, [upPress, cursor]);
    useEffect(() => {
      if (items.length && enterPress) {
        setSelected(items[cursor]);
        //ReactDOM.findDOMNode(divRef.current).childNodes[items.indexOf(selected)].style.transform=`scale(${1.05}px,${1.05}px)`;
      }
    }, [cursor, enterPress]);
    /*useEffect(() => {
      if (items.length && hovered) {
        setCursor(items.indexOf(hovered));
       // let node = ReactDOM.findDOMNode(divRef.current).childNodes[2];
       // node.style.transform = `scale(${1.05},${1.05})`;
      }
    }, [hovered]);*/
    return (
      <div ref={divRef}>
        <p>
          <small>Use up,down keys and hit enter to select</small>
        </p>
        <span>Selected:{selected ? selected.name : "none"}</span>
        {items.map((item, i) => (
          <ListItem
            key={item.id}
            active={i === cursor}
            item={item}
            setSelected={setSelected}
            //setHovered={setHovered}
          />
        ))}
      </div>
    );
  };
  return ListExample();
}
