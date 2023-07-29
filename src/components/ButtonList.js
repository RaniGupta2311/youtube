import Button from "./Button";

const list=["All","Songs","Mixes","Live","Cricket","News","Cooking","Soccer","Rapping","Comedy","Recently Uploaded"]

const ButtonList=()=>{
    return (
        <div className="flex">
            {/* ButtonList */}
            {list.map((button)=>{
                return  <Button key={button} name={button}/>
            })}
        </div>
    )
}
export default ButtonList;