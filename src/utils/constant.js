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

export const YOUTUBE_VIDEOS_API_KEY = import.meta.env
  .VITE_YOUTUBE_VIDEOS_API_KEY;
export const YOUTUBE_VIDEOS_API_URL =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  YOUTUBE_VIDEOS_API_KEY;

export const currDate = new Date().toLocaleDateString().split("T")[0];
