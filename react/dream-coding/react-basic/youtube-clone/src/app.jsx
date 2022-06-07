import styles from './app.module.css';
import { useState, useEffect } from 'react';
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";


function App({ youtube }) {
    const [videos, setVideos] = useState([]);

    const onSearch = (query) => {
        youtube
            .search(query)
            .then(videos => setVideos(videos))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        youtube
            .mostPopular()
            .then(videos => setVideos(videos))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={onSearch} />
            <VideoList videos={videos}/>
        </div>
    );
}

export default App;
