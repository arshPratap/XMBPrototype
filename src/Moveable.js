import ReactDOM from "react-dom";
import { useRef } from "react";

export default function Moveable(props) {
  const myRef = useRef(null);
  function myClick() {
    // console.log(ReactDOM.findDOMNode(myRef.current).getBoundingClientRect().width);
    //console.log(ReactDOM.findDOMNode(myRef.current).getBoundingClientRect().height);
    console.log(
      "top is" + ReactDOM.findDOMNode(myRef.current).getBoundingClientRect().top
    );
    console.log(
      "left is" +
        ReactDOM.findDOMNode(myRef.current).getBoundingClientRect().left
    );
    //console.log(ReactDOM.findDOMNode(myRef.current).style);
    let Left = ReactDOM.findDOMNode(myRef.current).getBoundingClientRect().left;
    let look = ReactDOM.findDOMNode(myRef.current).style;
    console.log("Left will be" + (Left + 50));
    look.transform = `translate(${50}px, ${0}px)`;
  }
  function btnClick() {
    //let Left = ReactDOM.findDOMNode(myRef.current).getBoundingClientRect().left;
    let look = ReactDOM.findDOMNode(myRef.current).style;
    console.log(
      ReactDOM.findDOMNode(myRef.current).getBoundingClientRect().top
    );
    console.log(
      ReactDOM.findDOMNode(myRef.current).getBoundingClientRect().left
    );
    console.log("I am not called");
    look.transform = `translate(${-120}px,${0}px)`;
  }
  function keyPress(event) {
    if (event.keyPress === "D") {
      console.log("D pressed");
    }
  }
  return (
    <div ref={myRef} className="Card MenuItem" onKeyPress={keyPress}>
      <h2>{props.name}</h2>
      <div className="Actions">
        <button className="btn" onClick={btnClick}>
          Left
        </button>
        <button className="btn" onClick={myClick}>
          Right
        </button>
      </div>
    </div>
  );
}
