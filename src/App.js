import React from "react";
//import React, {useState, useEffect} from "react";
import "./App.css";
import video from "./videos/Underwater.mp4";

function App() {
  /*const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "http://orangevalleycaa.org/api/videos/"
      ).then(res => res.json());
      setData(result);
    };
    fetchData();
  }, []);*/

  return (
    <div className="App">
      <header>
        <h2>Duck Art Videos</h2>
      </header>

      {/* {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url}></video>
        </div>
      ))} */}

      <video height={200} controls src={video}></video>
    </div>
  );
}

export default App;
