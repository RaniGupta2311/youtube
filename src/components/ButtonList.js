import Button from "./Button";

const list=["All","Songs","T-Series","Bholenath","Punjabi","AP Dhillon","90s Hit","Arijit Singh","Mixes","Live","Cricket","News","Cooking","Food","Soccer","Rapping","Trading","Comedy","Recently Uploaded","Bhakti","Watched","College","Workout","Programming","ReactJS"]

const ButtonList=()=>{
    return (
        <div className="flex pb-2 w-[100%] bg-white overflow-x-auto scroll-smooth sticky top-0 z-20">
            {/* ButtonList */}
            {list.map((button)=>{
                return <Button key={button} name={button}/>
                
            })}
        </div>
    )
}
export default ButtonList;