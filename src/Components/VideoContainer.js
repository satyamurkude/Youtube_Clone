import React, { useState, useEffect } from 'react';
import VideoCards from './VideoCards';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(YOUTUBE_VIDEOS_API);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setVideos(data.items);
        } else {
          console.error('No videos found in the response:', data);
        }
        console.log(videos)
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className='flex flex-wrap  '>
      {videos.length > 0 ? (
        videos.map((video) => <Link key={video.id}  to ={"/watch?v="+video.id}><VideoCards info={video} /></Link>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


export default VideoContainer;
