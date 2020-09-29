import React from "react";
import Header from "./components/Header";
import ForumPost from "./components/ForumPost"
import forumPosts from "./forumPosts"
import SearchDiv from "./components/SearchDiv"
function createForumPost(post){
    
    return(
        <ForumPost
            img={post.imgsrc}
            subject={post.subject}
            content={post.content}
            replies={post.replies}
            date={post.date}
            tags={post.tags}
            replyInfo={post.replyInfo}
            
        />
        
    )
}

function App(){
    return(
        <div>
        <Header/>
        
        <h1 className="page-title">FORUM</h1>
        <div className="row">
        <div className="col-lg-3">
            <SearchDiv/>
        </div>

        <div className="col-lg-9">
            {forumPosts.map(createForumPost)}
        </div>
        </div>
        

        </div>
    )
}

export default App;