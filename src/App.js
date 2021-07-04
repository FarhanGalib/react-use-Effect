import { useState } from "react";
import "./App.css";
import ShowTime from "./components/ShowTime";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <div>{show && <ShowTime></ShowTime>}</div>
      <button type="button" onClick={() => setShow((prevShow)=>!prevShow)}>
        {show ? "hide" : "show"}
      </button>
    </div>
  );
}

export default App;
