import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
const Body=()=>{
    return (
        <div className="flex relative h-[calc(100vh-82px)]">
            <Sidebar/>
            {/* <MainContainer/> */}
            <Outlet/>
        </div>
    )
}
export default Body;