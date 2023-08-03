import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
const Sidebar=()=>{
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
//    early return
   if(!isMenuOpen) return null
    return (
        <div className="w-48 shadow-lg p-5">
            <ul className="shadow-sm">
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md"><Link to="/">Home</Link></li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Shorts</li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Videos</li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Live</li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Downloads</li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Library</li>
            </ul>
            <h1 className="font-bold mt-5">Subscriptions</h1>
            <ul className="shadow-sm">
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Music</li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Sports</li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Gaming</li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Movies</li>
            </ul>
            <h1 className="font-bold mt-5">Watch Later</h1>
            <ul className="shadow-sm">
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Music</li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Sports</li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Gaming</li>
                <li className="px-2 py-1 hover:bg-gray-100 rounded-md">Movies</li>
            </ul>
        </div>
    )
}
export default Sidebar