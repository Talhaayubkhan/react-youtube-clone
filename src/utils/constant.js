export const buttonList = [
  { id: 1, label: "All" },
  { id: 2, label: "Music" },
  { id: 3, label: "Gaming" },
  { id: 4, label: "Live" },
  { id: 5, label: "News" },
  { id: 6, label: "Sports" },
  { id: 7, label: "Movies" },
  { id: 8, label: "Learning" },
  { id: 9, label: "Sci" },
  { id: 10, label: "Geography" },
  { id: 11, label: "Darama" },
  { id: 12, label: "Polticis" },
  { id: 13, label: "History" },
  { id: 14, label: "Circket" },
  { id: 15, label: "Trump" },
  { id: 16, label: "South Movies" },
  { id: 17, label: "Pakistani Movies" },
];

export const USER_ICON =
  "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg";
export const YOUTUBE_VIDEOS_API_KEY = import.meta.env
  .VITE_YOUTUBE_VIDEOS_API_KEY;

export const YOUTUBE_VIDEOS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${YOUTUBE_VIDEOS_API_KEY}`;

export const YOUTUB_SEARCH_SUGGESTIONS_API_URL =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const youtubeSuggestionsResultsURL = (query) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&videoDefinition=high&videoEmbeddable=true&maxResults=25&regionCode=US&key=${YOUTUBE_VIDEOS_API_KEY}`;
};

export const YOUTUBE_COMMENTS_API_URL = (parentId) => {
  return `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${parentId}&maxResults=50&textFormat=plainText&key=${YOUTUBE_VIDEOS_API_KEY}`;
};

export const currDate = new Date().toLocaleDateString().split("T")[0];
