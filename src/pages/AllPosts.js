import React from 'react';
import Post from '../components/Post';
import '../css/allPosts.css';

import Sidebar from '../components/Sidebar';
export default function AllPosts() {
  return (
    <div className="allPostsMainContainer">
      <Sidebar />
      <main className="allPostsMain">
        <div className="allPostContainer">
          <div className="allPosts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </main>
    </div>
  );
}
