import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';

import '../css/addpost.css';

export default function AddPost() {
  const { addPost } = useContext(BlogContext);
  let postToAdd = {};
  function handleChange(e) {
    console.log([e.target.name], e.target.value);
    postToAdd = {
      ...postToAdd,
      [e.target.name]: e.target.value,
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(postToAdd);
    addPost('http://localhost:5000/api/v1/blogposts/addpost', postToAdd);
  }

  return (
    <>
      <form className="addPostForm" onSubmit={handleSubmit}>
        <div className="titleSection">
          <input
            className="titleField inputs"
            name="title"
            type={'text'}
            placeholder="Title"
            required
            onChange={handleChange}
          />
        </div>
        <div className="descriptionSection">
          <textarea
            className="descriptionField inputs"
            name="description"
            type={'text'}
            rows="8"
            placeholder="Description"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="imageSection ">
          <input
            className="imageField inputs"
            name="image"
            type={'file'}
            placeholder="File"
            required
            onChange={handleChange}
          />
        </div>
        <div className="categorySection">
          <input
            className="categoryField inputs"
            name="category"
            type={'text'}
            placeholder="Category"
            required
            onChange={handleChange}
          />
        </div>
        <div className="categorySection">
          <input className="submitButton" type="submit" placeholder="Submit" />
        </div>
      </form>
    </>
  );
}
