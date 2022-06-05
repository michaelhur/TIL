import React from 'react';

const VideoItem = (props) => {
    return(
        <>
        {/*<img src={props.video.snippet.thumbnails.default.url} />*/}
        <h1>{props.video.snippet.title}</h1>
        </>
    )
}

export default VideoItem;