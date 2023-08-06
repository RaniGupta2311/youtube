import {Link} from "react-router-dom";
const Button=({name})=>{
    return (
        <div>
         <Link to={"/search?q="+name}><button className="px-5 py-2 m-2 bg-gray-200 rounded-lg h-12 w-auto inline-block leading-none whitespace-nowrap text-center">{name}</button>
         </Link>   
        </div>
    )
}
export default Button