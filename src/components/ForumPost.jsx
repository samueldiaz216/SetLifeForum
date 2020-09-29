import React from "react";
import Tag from "./post-components/Tag";


function createTag(tag){
    return(
    <Tag
        text={tag}
    />
    )
}

function ForumPost(props){

    return(
    
      <div className="forum-post row">
        <img className="post-img"src={props.img}/>
        <h4 className="forum-subject">{props.subject}</h4>
        <p className="forum-content">{props.content}</p>
        <p className="forum-date">{props.date}</p>
        <hr />
        <h5 className="forum-content">{props.replyInfo}</h5>
        <img className="msgicon"src="../../../images/chat.png"></img>
        <div className="notification-circle">{props.replies}</div>



      </div>
        
    )
}

export default ForumPost;