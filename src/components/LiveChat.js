import { useEffect,useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { randomNamegenerate } from "../utils/helpers";
import { generateRandomMessage } from "../utils/helpers";
const LiveChat =()=>{
    const [liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const chatMessages=useSelector(store=>store.chat.messages)

    useEffect(()=>{
        const i=setInterval(()=>{
            // API Polling
            dispatch(addMessage({
                name:randomNamegenerate(),
                message:generateRandomMessage(20)
            }));
            // console.log("API Polling");
        },1500)

        // dont forget to clear timeinterval
        return ()=> clearInterval(i)
    },[])

    return (
        <>
        <div className="p-2 w-full h-[600px] bg-slate-100 rounded-lg overflow-y-auto shadow-md mx-2 border border-black flex flex-col-reverse">
            {/* LiveChat */}
            {/* <ChatMessage name="Gupta" message="Hello ReactJS 💕"/> */}
            {/* dont use indexes as key */}
           {chatMessages.map((m,index)=>{
            return <ChatMessage key={index} name={m.name} message={m.message}/>
           })}
        </div>
        <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
            e.preventDefault();
            // console.log("on form sumbit",liveMessage);
            dispatch(addMessage({
                name:"User_name",
                message:liveMessage,
            }))
            setLiveMessage('');
        }}>
           <input 
           className="w-3/4 px-1" 
           type="text"
            value={liveMessage}
            onChange={(e)=>setLiveMessage(e.target.value)}
           />
           <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>
        </>
    )
}
export default LiveChat