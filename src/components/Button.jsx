import { useState } from "react";
import { buttonList, youtubeSuggestionsResultsURL } from "../utils/constant";

const Button = () => {
  // const [videoResults, setVideoResults] = useState([]);

  // const handleButtonClick = async (query) => {
  //   const url = youtubeSuggestionsResultsURL(query);
  //   try {
  //     // Logic to fetch video results based on the selected button label
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     // console.log(data.items);
  //     setVideoResults(data.items || []);
  //     setIsButton(true);
  //   } catch (error) {
  //     console.error("Error fetching video results:", error);
  //     setVideoResults([]);
  //     setIsButton(true);
  //   }
  // };

  return (
    <div className="flex flex-col">
      <div className="mt-5">
        {buttonList.map((button) => (
          <button
            key={button.id}
            className="px-4 py-3 text-lg font-semibold rounded-lg ml-4 bg-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer"
            // onClick={() => handleButtonClick(button.label)}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/*    
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {videoResults?.map((video) => {
            const { snippet } = video;
            const { title, thumbnails, description } = snippet;
            const videoId = video.id.videoId;

            return (
              <div
                key={videoId}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-72 flex flex-col items-center overflow-hidden"
              >
                <img
                  className="w-full h-40 object-cover rounded-lg"
                  src={thumbnails.high.url}
                  alt={title}
                />
                <div className="mt-3 text-center w-full">
                  <h3
                    className="text-sm font-semibold truncate w-full"
                    title={title}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-gray-600 text-xs mt-1 line-clamp-3 overflow-hidden w-full"
                    title={description}
                  >
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}
    </div>
  );
};

export default Button;
