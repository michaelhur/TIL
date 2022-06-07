import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import YoutubeAxios from "./service/youtube-axios";
import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {key: process.env.REACT_APP_YOUTUBE_API_KEY},
})
const youtube = new YoutubeAxios(httpClient)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
