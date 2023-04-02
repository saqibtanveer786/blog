import React from 'react';
import '../css/post.css';
import deletePng from '../assests/icons/delete.png';
// import postJpg from 'http://localhost:5000/assests/images/post.jpg';
import updatePng from '../assests/icons/update.png';
import { useContext } from 'react';
import BlogContext from '../context/BlogContext';

export default function Post({
  _id,
  title,
  author,
  description,
  createdAt,
  imageUrl,
}) {
  const { deletePost, updatePost } = useContext(BlogContext);
  const myStyle = {
    backgroundImage: 'http://localhost:5000/assests/images/post.jpg',
  };

  return (
    <>
      <div className="postContainer">
        {localStorage.getItem('token') && (
          <div className="icons">
            <img
              className="deleteIcon"
              src={deletePng}
              alt="delete"
              onClick={() => {
                deletePost(_id);
              }}
            />
            <img
              className="updateIcon"
              src={updatePng}
              alt="update"
              onClick={() => {
                updatePost(_id);
              }}
            />
          </div>
        )}
        <div className="postImage" style={myStyle}></div>
        <div className="postContent">
          <h4 className="postTitle">{title}</h4>
          <p className="postAuthor">
            @{author}
            <span className="postDate"> {createdAt}</span>
          </p>
          <p className="postDescription" style={{ paddingTop: '10px' }}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
