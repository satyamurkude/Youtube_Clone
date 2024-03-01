import React from 'react'
import Comment from './Comment'
const commentsData=[{
name:"Satyam Urkude",
text:"This is my comment  ",
replies:[],

},
{
    name:"Satyam Urkude",
    text:"This is my comment  ",
    replies:[{
        name:"Shivam Urkude",
        text:"This is my comment  ",
        replies:[],
        
        },],
    
    },
    {
        name:"Satyam Urkude",
        text:"This is my comment  ",
        replies:[],
        
        },
        {
            name:"Satyam Urkude",
            text:"This is my comment  ",
            replies:[],
            
            },
            {
                name:"Satyam Urkude",
                text:"This is my comment  ",
                replies:[],
                
                },

]
const CommentList=({comments})=>{
    return comments.map((comment,index)=>(<div><Comment key={index} data={comment}/>
    <div className='pl-5  border border-l-black ml-5'>
<CommentList comments={comment.replies}/>
    </div>
    </div>))
    
}
const CommentsContainer = () => {

  return (
    <div className='ml-6 mt-2 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
     <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer