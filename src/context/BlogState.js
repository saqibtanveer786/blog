import BlogContext from './BlogContext';
import React, { useState } from 'react';
import dotenv from 'dotenv';

export default function BlogState(props) {
  const [posts, setPosts] = useState([]);

  dotenv.config();

  //FUNCTION TO MANAGE API CALL
  async function getAllPosts(endPoint) {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/allposts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const jsonData = await data.json();
    setPosts(jsonData);
    return jsonData;
  }

  // FUNCTION TO ADD A POST
  async function addPost(endPoint, postToAdd) {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/addpost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postToAdd),
    });
    const Data = await data.json();
    setPosts(posts.concat(Data));
    return Data;
  }

  async function updatePost(id) {
    console.log(id);
  }

  async function deletePost(id) {
    console.log(id);
    // const strid = JSON.stringify(id);
    const data = await fetch(
      `${process.env.REACT_APP_API_URL}/deletepost/${id}
      `,
      {
        method: 'DELETE',
      }
    );
    const jsData = await data.json();
    console.log(jsData);
    getAllPosts('http://localhost:5000/api/v1/blogposts/allposts');
  }

  return (
    <BlogContext.Provider
      value={{ posts, getAllPosts, addPost, updatePost, deletePost }}
    >
      {props.children}
    </BlogContext.Provider>
  );
}
