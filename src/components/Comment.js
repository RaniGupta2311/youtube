
const Comment=({data})=>{
    const {name,text,replies}=data;
    return (
        <div className="flex items-center p-2 bg-gray-100 rounded-md m-2 shadow-sm">
            <img
             alt="user-icon" 
             src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
             className="h-8 w-8"   
             />
             <div className="ml-3 ">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
             </div>
        </div>
    )
}
export default Comment;
