// const GOOGLE_API_KEY="AIzaSyAnDLWIXjir560GsYEWYIWDxxdYFkr3bDU";
// const GOOGLE_API_KEY="AIzaSyC_wGBpeaPduhD-gXwNlBHBW1mXq2MQMmk";
const GOOGLE_API_KEY="AIzaSyDkZkgnBUOkIsnS2FIqpbaCBpwsXyidOAk";
export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_SUGGESTIONS_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const OFFSET_LIVE_CHAT=25;

// "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+SEARCH_KEYWORD+"&type=video&key="+GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_KEYWORD_API="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key="+GOOGLE_API_KEY+"&q=";