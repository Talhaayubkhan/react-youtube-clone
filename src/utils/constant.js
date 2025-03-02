export const buttonList = [
  { id: 1, label: "All" },
  { id: 2, label: "Music" },
  { id: 3, label: "Gaming" },
  { id: 4, label: "Live" },
  { id: 5, label: "News" },
  { id: 6, label: "Sports" },
  { id: 7, label: "Movies" },
  { id: 8, label: "Learning" },
  { id: 9, label: "Trending" },
  { id: 11, label: "Sci" },
  { id: 12, label: "Adventure" },
  { id: 13, label: "Geography" },
  { id: 14, label: "Darama" },
  { id: 15, label: "Polticis" },
];

export const USER_ICON =
  "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg";
export const YOUTUBE_VIDEOS_API_KEY = import.meta.env
  .VITE_YOUTUBE_VIDEOS_API_KEY;

export const YOUTUBE_VIDEOS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${YOUTUBE_VIDEOS_API_KEY}`;

export const YOUTUB_SEARCH_SUGGESTIONS_API_URL =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const youtubeSearchResultsURL = (query) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&videoDefinition=high&videoEmbeddable=true&maxResults=50&regionCode=US&key=${YOUTUBE_VIDEOS_API_KEY}`;
};

export const currDate = new Date().toLocaleDateString().split("T")[0];
