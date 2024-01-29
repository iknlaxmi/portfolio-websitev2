import { useState } from "react";
import homeImg from "../src/assets/home-background.jpg";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [clickData, setClickData] = useState(false);

  return (
    <div>
      {/* <div className=" h-full relative">
        <img className="max-w-full" src={homeImg} />
        <div className="text-center absolute top-1/2 left-1/3 text-white">
          <p className="font-normal text-2xl font-roboto">
            Hello,I am Nagalakshmi.
            <br />
            I'm a full-stack web developer.
          </p>

          <button className="border p-2 m-8" onClick={() => setClickData(true)}>
            View my work &#8594;
          </button>
        </div>
      </div> */}
      {/* {clickData && <NavBar />} */}
    </div>
  );
}

export default App;
