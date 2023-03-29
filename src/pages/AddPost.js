import React from 'react';
import '../css/addpost.css';

export default function AddPost() {
  return (
    <>
      <form className="addPostForm">
        <div className="titleSection">
          <input
            className="titleField inputs"
            name="title"
            type={'text'}
            placeholder="Title"
          />
        </div>
        <div className="descriptionSection">
          <textarea
            className="descriptionField inputs"
            name="description"
            type={'text'}
            rows="8"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="imageSection ">
          <input
            className="imageField inputs"
            name="image"
            type={'file'}
            placeholder="File"
          />
        </div>
        <div className="categorySection">
          <input
            className="categoryField inputs"
            name="category"
            type={'text'}
            placeholder="Category"
          />
        </div>
      </form>
    </>
  );
}
