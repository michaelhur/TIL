import './App.css';
import { useState, useEffect } from 'react';
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCmBr_x4gehHuQSL3d2OGB67vAeDA8QCVU",
        requestOptions
    )
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
  }, []);

  return (
      <VideoList videos={videos} />
  );
}

export default App;
