// import { useState } from "react";
// import { buttonList, youtubeSuggestionsResultsURL } from "../utils/constant";

// const Button = () => {
//   const [videoResults, setVideoResults] = useState([]);

//   const handleButtonClick = async (query) => {
//     const url = youtubeSuggestionsResultsURL(query);
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setVideoResults(data.items || []);
//     } catch (error) {
//       console.error("Error fetching video results:", error);
//       setVideoResults([]);
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="mt-10 flex justify-center items-center">
//         <div className="flex overflow-x-auto gap-2 pb-2">
//           {buttonList.map((button) => (
//             <button
//               key={button.id}
//               className="px-3 py-2 ml-1 text-sm font-medium bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200 whitespace-nowrap"
//               onClick={() => handleButtonClick(button.label)}
//             >
//               {button.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {videoResults?.map((video) => {
//           const { snippet } = video;
//           const { title, thumbnails, description } = snippet;
//           const videoId = video.id.videoId;

//           return (
//             <div
//               key={videoId}
//               className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
//             >
//               <img
//                 className="w-full h-36 object-cover rounded-md"
//                 src={thumbnails.high.url}
//                 alt={title}
//               />
//               <div className="mt-2">
//                 <h3 className="text-sm font-medium line-clamp-2" title={title}>
//                   {title}
//                 </h3>
//                 <p
//                   className="text-xs text-gray-500 mt-1 line-clamp-2"
//                   title={description}
//                 >
//                   {description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Button;

import { useState } from "react";
import { buttonList, youtubeSuggestionsResultsURL } from "../utils/constant";

const Button = () => {
  const [videoResults, setVideoResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async (query) => {
    const url = youtubeSuggestionsResultsURL(query);
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setVideoResults(data.items || []);
    } catch (error) {
      console.error("Error fetching video results:", error);
      setVideoResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-5">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-2 mt-5">
        {buttonList.map((button) => (
          <button
            key={button.id}
            className="px-5 py-2.5 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full backdrop-blur-md shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 whitespace-nowrap"
            onClick={() => handleButtonClick(button.label)}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-blue-600 font-semibold animate-pulse text-lg">
          Loading videos...
        </div>
      )}

      {/* Video Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videoResults?.map((video) => {
          const { snippet } = video;
          const { title, thumbnails, description } = snippet;
          const videoId = video.id?.videoId || video.id;

          return (
            <div
              key={videoId}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={thumbnails.high.url}
                  alt={title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-base font-bold text-gray-800 mb-2 line-clamp-2"
                  title={title}
                >
                  {title}
                </h3>
                <p
                  className="text-sm text-gray-500 line-clamp-2"
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
