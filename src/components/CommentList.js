import Comment from "./Comment"
const CommentList=({comments})=>{
    return comments.map((comment,index)=>{
            return <div>
                <Comment key={index} data={comment}/>
                <div className="pl-5 ml-5 border-l-2">
                {/* <Comment key={index} data={comment}/>
                <Comment key={index} data={comment}/>
                <Comment key={index} data={comment}/> */}
                    <CommentList comments={comment.replies}/>
                </div>
            </div>

        })
    
}
export default CommentList;