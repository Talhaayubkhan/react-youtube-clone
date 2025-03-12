import { useState } from "react";
import { buttonList, youtubeSuggestionsResultsURL } from "../utils/constant";

const Button = () => {
  const [videoResults, setVideoResults] = useState([]);

  const handleButtonClick = async (query) => {
    const url = youtubeSuggestionsResultsURL(query);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setVideoResults(data.items || []);
    } catch (error) {
      console.error("Error fetching video results:", error);
      setVideoResults([]);
    }
  };

  return (
    <div className="w-full px-2 py-2 mt-5">
      <div className="flex overflow-x-auto gap-2 pb-2">
        {buttonList.map((button) => (
          <button
            key={button.id}
            className="px-3 py-1.5 ml-1 text-sm font-medium bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200 whitespace-nowrap"
            onClick={() => handleButtonClick(button.label)}
          >
            {button.label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videoResults?.map((video) => {
          const { snippet } = video;
          const { title, thumbnails, description } = snippet;
          const videoId = video.id.videoId;

          return (
            <div
              key={videoId}
              className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img
                className="w-full h-36 object-cover rounded-md"
                src={thumbnails.high.url}
                alt={title}
              />
              <div className="mt-2">
                <h3 className="text-sm font-medium line-clamp-2" title={title}>
                  {title}
                </h3>
                <p
                  className="text-xs text-gray-500 mt-1 line-clamp-2"
                  title={description}
                >
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Button;
