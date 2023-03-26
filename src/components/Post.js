import React from 'react';
import '../css/post.css';

export default function Post({ title, author, body, createdAt }) {
  return (
    <>
      <div className="postContainer">
        <div className="postImage"></div>
        <div className="postContent">
          <h4 className="postTitle">{title}</h4>
          <p className="postAuthor">
            @{author}
            <span className="postDate"> {createdAt}</span>
          </p>
          <p className="postDescription" style={{ paddingTop: '10px' }}>
            {body}
          </p>
        </div>
      </div>
    </>
  );
}
