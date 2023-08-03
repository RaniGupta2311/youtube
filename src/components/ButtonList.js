import Button from "./Button";

const list=["All","Songs","Mixes","Live","Cricket","News","Cooking","Soccer","Rapping","Comedy","Recently Uploaded","Bhakti","Watched"]

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