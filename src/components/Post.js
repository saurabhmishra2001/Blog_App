import React from "react";
import '../styles/Post.css';
const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
return (
    <div className='my-3 post-container card-deck' >
        <div className="card" style={{width: "18rem"}}>
          <img src={!imgUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/F6A0/production/_126263136_gettyimages-591394853.jpg":imgUrl} className="card-img-top" alt="" ></img>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{body}...</p>
            <p className='card-text'><small class="text-muted">Written By {!author?'Unknown' :author} </small></p>
            {/* <a href={newsUrl} target="-blank" className="btn btn-sm btn-primary">Read More</a> */}
          </div>
        </div>
      </div>

);
};

export default Post;
