import React from 'react';

const VideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  // Function to truncate long titles
  const truncateTitle = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div className="w-80 h-64 ml-4 my-3 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
      <img
        className="w-full h-40 object-cover shadow-sm"
        src={thumbnails.medium.url}
        alt="Thumbnail"
      />
      <div className="p-1">
        <h2 className="font-bold mb-1 pb-1 overflow-hidden">
          {truncateTitle(title, 30)}
        </h2>
        <p className="text-gray-700 text-base ">{truncateTitle(channelTitle,30) }</p>
        <ul className="text-sm text-gray-500">
          <li className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 fill-current text-gray-600"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v6h-2zm0 4h2v2h-2z" />
            </svg>
            {statistics.viewCount >= 1e6
              ? `${(statistics.viewCount / 1e6).toFixed(1)}M views`
              : statistics.viewCount >= 1e3
              ? `${(statistics.viewCount / 1e3).toFixed(1)}K views`
              : `${statistics.viewCount} views`}
          </li>
          {/* Add more statistics if needed */}
        </ul>
      </div>
    </div>
  );
};

export default VideoCards;
