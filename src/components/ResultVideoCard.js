import React from "react";
import moment from "moment/moment";

const ResultVideoCard = ({ info, limit }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt, description } = snippet;

  // Function to truncate the number of words in a string
  const truncateWords = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl">
      <img
        src={thumbnails.medium.url}
        alt="Thumbnail"
        className="w-full md:w-60 h-40 md:h-auto object-cover object-center"
      />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
          <p className="text-sm text-gray-500 mb-2">{channelTitle}</p>
          <p className="text-sm text-gray-600 mb-4">{moment(publishedAt).fromNow()}</p>
          <p className="text-sm text-gray-600 line-clamp-3">{truncateWords(description, limit)}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-xs text-gray-600">
            <p>{statistics.viewCount} views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultVideoCard;
