import styles from './app.module.css';
import { useState, useEffect } from 'react';
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App() {
    const [videos, setVideos] = useState([]);

    const onSearch = (value) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&type=video&key=AIzaSyCmBr_x4gehHuQSL3d2OGB67vAeDA8QCVU`, requestOptions)
            .then(response => response.json())
            .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
            .then(items => setVideos(items))
            .catch(error => console.log('error', error));
    }

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
        <div className={styles.app}>
            <SearchHeader onSearch={onSearch} />
            <VideoList videos={videos}/>
        </div>
    );
}

export default App;
