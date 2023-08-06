import {useDispatch} from "react-redux";

import { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage=()=>{

    const [searchParams]=useSearchParams();
    // console.log(searchParams.get("v"));
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])

    return (
        <div className="flex flex-col w-full">
            <div className="p-5 flex w-full">
            {/* <h1>watch page</h1> */}
                <div>
                <div>
                    <iframe 
                        width="1100"
                        height="600"
                        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                        </iframe>
                        </div>
                    <div>
                            <h2>Description</h2>
                            <div>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                            </div>
                    </div>
                </div>
                <div className="w-full">
                    <LiveChat/>
                </div>
            </div>
            <CommentsContainer/>
        </div>
    
    )
}
export default WatchPage;