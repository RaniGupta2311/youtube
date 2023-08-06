import { useParams, useSearchParams } from "react-router-dom";
import {useEffect,useState} from "react";
import { YOUTUBE_SEARCH_KEYWORD_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import {Link} from "react-router-dom";
const SearchPage=()=>{
    const [keywordParams]=useSearchParams();
    const [searchVideo,setSearchVideo]=useState([]);
    // console.log(keywordParams.get("q"));
    useEffect(()=>{
        getVideosBySearch();
        // console.log("This is use effect"+keywordParams.get("q"));

    },[keywordParams]);

    const getVideosBySearch=async ()=>{
        const data=await fetch(YOUTUBE_SEARCH_KEYWORD_API+keywordParams.get("q"))
        const json=await data.json();
        // console.log(json.items);
        // console.log(json.items[0].id.videoId);
        setSearchVideo(json.items);
    }

    
    return (
        <div className="flex flex-wrap justify-center sm:justify-around xl:justify-center w-[100%] text-center sm:text-left">
            {/* Search Results Page */}
            {searchVideo&&searchVideo.map((video)=>{
                return <Link to={"/watch?v="+video?.id?.videoId} key={video?.id?.videoId}><VideoCard info={video}/></Link>
            })}

        </div>
    )
}
export default SearchPage;