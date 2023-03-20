import React from 'react';
import '../css/post.css';

export default function Post() {
  return (
    <>
      <div className="postContainer">
        <div className="postImage"></div>
        <div className="postContent">
          <h4 className="postTitle">My First Post</h4>
          <p className="postAuthor">
            author <span className="postDate">1-1-1</span>
          </p>
          <p className="postDescription" style={{ paddingTop: '10px' }}>
            This is an post for test no it is not a real content i am typing
            just for filling the space...
          </p>
        </div>
      </div>
    </>
  );
}
