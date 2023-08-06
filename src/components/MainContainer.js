import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer"
import { Outlet } from "react-router-dom";

const MainContainer=()=>{
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    return <div className={isMenuOpen?'w-[calc(100%-12rem)] overflow-y-auto h-full':'w-[100%] overflow-y-auto h-full'}>
        {/* MainContainer */}
        <ButtonList/>
        {/* <VideoContainer/> */}
        <Outlet/>
    </div>
}
export default MainContainer