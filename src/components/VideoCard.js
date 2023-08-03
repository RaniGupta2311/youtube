import React from "react";
const VideoCard=({ info })=>{
    // console.log(info);
    // console.log(info?.snippet.title);
    // console.log(info?.snippet.thumbnails);
    // console.log(info?.snippet.thumbnails.medium.url);
    // console.log(info?.snippet.channelTitle);
    // console.log(info?.statistics.viewCount);
    return (
        <div className="p-2 m-2 shadow-lg w-[24rem] sm:w-[24rem] md:w-[21rem] lg:w-[20rem] xl:w-[20rem] hover:scale-110">
         <img className="rounded-lg w-[100%]" alt="thumbnail" src={info?.snippet.thumbnails.medium.url}/>
         <ul>
            <li className="h-14 font-bold py-2 text-left text-ellipsis overflow-hidden ...">{info?.snippet.title}</li>
            <li className="text-left">{info?.snippet.channelTitle}</li>
            <li className="text-left">{info?.statistics.viewCount} views</li>
         </ul>
        </div>
    )
}
export default VideoCard;