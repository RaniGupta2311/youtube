import CommentList from "./CommentList"

export const commentData=[
    {
        name:"Rani",
        text:"hi its a comment",
        replies:[
            {
                name:"Rani",
                text:"hi its a comment",
                replies:[
                    {
                        name:"Rani",
                        text:"hi its a comment",
                        replies:[
                            {
                                name:"Rani",
                                text:"hi its a comment",
                                replies:[
                                    {
                                        name:"Rani",
                                        text:"hi its a comment",
                                        replies:[
                                            {
                                                name:"Rani",
                                                text:"hi its a comment",
                                                replies:[]
                                            }
                                        ]
                                    },
                                 
                                ]
                            }
                        ]
                    },
                 
                ]
            }
        ]
    },
    {
        name:"Rani",
        text:"hi its a comment",
        replies:[
            {
                name:"Rani",
                text:"hi its a comment",
                replies:[
                    {
                        name:"Rani",
                        text:"hi its a comment",
                        replies:[
                            {
                                name:"Rani",
                                text:"hi its a comment",
                                replies:[
                             
                                ]
                            }
                        ]
                    },
                 
                ]
            }
        ]
    },
    {
        name:"Rani",
        text:"hi its a comment",
        replies:[
            {
                name:"Rani",
                text:"hi its a comment",
                replies:[
                    {
                        name:"Rani",
                        text:"hi its a comment",
                        replies:[
                            {
                                name:"Rani",
                                text:"hi its a comment",
                                replies:[
                             
                                ]
                            }
                        ]
                    },
                 
                ]
            }
        ]
    },
    {
        name:"Rani",
        text:"hi its a comment",
        replies:[
            {
                name:"Rani",
                text:"hi its a comment",
                replies:[
                    {
                        name:"Rani",
                        text:"hi its a comment",
                        replies:[
                            {
                                name:"Rani",
                                text:"hi its a comment",
                                replies:[
                             
                                ]
                            }
                        ]
                    },
                 
                ]
            }
        ]
    },
    {
        name:"Rani",
        text:"hi its a comment",
        replies:[
            {
                name:"Rani",
                text:"hi its a comment",
                replies:[
                    {
                        name:"Rani",
                        text:"hi its a comment",
                        replies:[
                            {
                                name:"Rani",
                                text:"hi its a comment",
                                replies:[
                             
                                ]
                            }
                        ]
                    },
                 
                ]
            }
        ]
    },
 
 
]
const CommentsContainer=()=>{
    return (
        <div className="m-5 p-2">
           <h1 className="font-bold text-2xl">Comments:</h1>
           {/* <Comment data={commentData[0]}/> */}
           {/* {commentData.map((comment,index)=><Comment key={index} data={comment}/>)} */}
           <CommentList comments={commentData}/>
        </div>
    )
}
export default CommentsContainer