import { useRef } from "react";
import ReactDOM from "react-dom";
export default function Transition(props) {
  let myRef = useRef(null);
  function inHover() {
    let look = ReactDOM.findDOMNode(myRef.current).style;
    console.log(look);
    look.transform = `translate(${10}px,${0}px)`;
  }
  function outHover() {
    let look = ReactDOM.findDOMNode(myRef.current).style;
    console.log(look);
    look.transform = `translate(${-10}px,${0}px)`;
  }
  return (
    <div
      className="tTest"
      ref={myRef}
      onMouseEnter={inHover}
      onMouseLeave={outHover}
    ></div>
  );
}
